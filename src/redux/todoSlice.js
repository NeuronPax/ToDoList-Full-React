import {createSlice} from '@reduxjs/toolkit'

const createTodoItem = (id, label) => ({
	id,
	label,
	important: false,
	done: false
})

const initialState = {
	maxId: 3,
	todoData: [
		createTodoItem(1, 'Drink Coffee'),
		createTodoItem(2, 'Create Awesome App'),
		createTodoItem(3, 'Have a Lunch')
	],
	searchValue: '',
	filter: 'All'
}

const todoSlice = createSlice({
	name: 'todo',
	initialState,
	reducers: {
		addItem(state, {payload}) {
			state.maxId += 1
			state.todoData.push(createTodoItem(state.maxId, payload))
		},
		deleteItem(state, {payload}) {
			state.todoData = state.todoData.filter(({id}) => id !== payload)
		},
		editItem(state, {payload}) {
			state.todoData = state.todoData.map(el => {
				if (el.id === payload.id) el[payload.action] = !el[payload.action]
				return el
			})
		},
		onSearch(state, {payload}) {
			state.searchValue = payload
		},
		onFilter(state, {payload}) {
			state.filter = payload
		}
	}
})

export const {addItem, deleteItem, editItem, onSearch, onFilter} =
	todoSlice.actions
export default todoSlice.reducer
