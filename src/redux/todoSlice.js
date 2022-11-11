import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from './axios'

const initialState = {
	status: 'loading',
	todoData: [],
	searchValue: '',
	filter: 'All'
}

export const getTodo = createAsyncThunk('todo/getTodo', async () => {
	const {data} = await axios.get('/tododata')
	return data
})

export const addTodo = createAsyncThunk('todo/addTodo', async label => {
	const {data} = await axios.post('/tododata', {
		id: Date.now(),
		label,
		important: false,
		done: false
	})
	return data
})

export const deleteTodo = createAsyncThunk('todo/deleteTodo', async id => {
	await axios.delete(`/tododata/${id}`)
	return id
})

export const editTodo = createAsyncThunk(
	'todo/editTodo',
	async ({id, action}) => {
		const {data} = await axios.patch(`/tododata/${id}`, action)
		return data
	}
)

const todoSlice = createSlice({
	name: 'todo',
	initialState,
	reducers: {
		onSearch(state, {payload}) {
			state.searchValue = payload
		},
		onFilter(state, {payload}) {
			state.filter = payload
		}
	},
	extraReducers: {
		[getTodo.pending]: state => {
			state.status = 'loading'
			state.todoData = []
		},
		[getTodo.fulfilled]: (state, {payload}) => {
			state.status = 'loaded'
			state.todoData = payload
		},
		[getTodo.rejected]: state => {
			state.status = 'error'
			state.todoData = []
		},
		[addTodo.fulfilled]: (state, {payload}) => {
			state.todoData.push(payload)
		},
		[deleteTodo.fulfilled]: (state, {payload}) => {
			state.todoData = state.todoData.filter(({id}) => id !== payload)
		},
		[editTodo.fulfilled]: (state, {payload}) => {
			state.todoData = state.todoData.map(el => {
				if (el.id === payload.id) el = payload
				return el
			})
		}
	}
})

export const {onSearch, onFilter} = todoSlice.actions
export default todoSlice.reducer
