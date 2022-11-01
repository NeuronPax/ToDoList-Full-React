import {useSelector} from 'react-redux'
import './app-header.css'

const AppHeader = () => {
	const {todoData} = useSelector(({todo}) => todo)
	const doneCount = todoData.filter(({done}) => done).length
	const todoCount = todoData.length - doneCount
	return (
		<div className='app-header'>
			<h1>ToDoList</h1>
			<h2>
				{todoCount} more to do, {doneCount} done
			</h2>
		</div>
	)
}

export default AppHeader
