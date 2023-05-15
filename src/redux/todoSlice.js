import {createSlice} from '@reduxjs/toolkit'

const initialState = {
	searchValue: '',
	filter: 'All'
}

const todoSlice = createSlice({
	name: 'todoSlice',
	initialState,
	reducers: {
		onSearch(state, {payload}) {
			state.searchValue = payload
		},
		onFilter(state, {payload}) {
			state.filter = payload
		}
	}
})

export const todoSliceActions = todoSlice.actions
export default todoSlice.reducer
