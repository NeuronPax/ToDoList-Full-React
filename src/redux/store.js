import {configureStore} from '@reduxjs/toolkit'
import {todoListApi} from './todoListApi'
import todoReducer from './todoSlice'

export const store = configureStore({
	reducer: {
		[todoListApi.reducerPath]: todoListApi.reducer,
		todoSlice: todoReducer
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(todoListApi.middleware)
})
