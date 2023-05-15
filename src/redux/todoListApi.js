import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const todoListApi = createApi({
	reducerPath: 'todoListApi',
	tagTypes: 'todo',
	baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:4444/'}),
	endpoints: builder => ({
		getTodo: builder.query({
			query: () => 'tododata',
			providesTags: result => ['todo']
		}),
		deleteItem: builder.mutation({
			query: id => ({
				url: `tododata/${id}`,
				method: 'DELETE'
			}),
			invalidatesTags: ['todo']
		}),
		editItem: builder.mutation({
			query: ({id, action}) => ({
				url: `tododata/${id}`,
				method: 'PATCH',
				body: action
			}),
			invalidatesTags: ['todo']
		}),
		addItem: builder.mutation({
			query: label => ({
				url: 'tododata',
				method: 'POST',
				body: {
					id: Date.now(),
					label,
					important: false,
					done: false
				}
			}),
			invalidatesTags: ['todo']
		})
	})
})

export const {
	useGetTodoQuery,
	useDeleteItemMutation,
	useEditItemMutation,
	useAddItemMutation
} = todoListApi
