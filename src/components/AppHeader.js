import {useSelector} from 'react-redux'

const AppHeader = () => {
	const {todoData} = useSelector(({todo}) => todo)
	const doneCount = todoData.filter(({done}) => done).length
	const todoCount = todoData.length - doneCount
	return (
		<div className='flex items-end'>
			<h1 className='flex-1 text-4xl tracking-wider'>ToDoList</h1>
			<h2 className='text-gray-500'>
				{todoCount} more to do, {doneCount} done
			</h2>
		</div>
	)
}

export default AppHeader
