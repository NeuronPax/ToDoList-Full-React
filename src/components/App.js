import AppHeader from './AppHeader'
import SearchInput from './SearchInput'
import FilterStatus from './FilterStatus'
import TodoList from './TodoList'
import TodoAddItem from './TodoAddItem'

const App = () => {
	return (
		<div className='max-w-md my-4 mx-auto'>
			<AppHeader />
			<div className='flex my-2'>
				<SearchInput />
				<FilterStatus />
			</div>
			<TodoList />
			<TodoAddItem />
		</div>
	)
}

export default App
