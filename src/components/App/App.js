import AppHeader from '../AppHeader/AppHeader'
import SearchInput from '../SearchInput/SearchInput'
import FilterStatus from '../FilterStatus/FilterStatus'
import TodoList from '../TodoList/TodoList'
import TodoAddItem from '../TodoAddItem/TodoAddItem'

import './app.css'

const App = () => {
	return (
		<div className='app'>
			<AppHeader />
			<div className='panel'>
				<SearchInput />
				<FilterStatus />
			</div>
			<TodoList />
			<TodoAddItem />
		</div>
	)
}

export default App
