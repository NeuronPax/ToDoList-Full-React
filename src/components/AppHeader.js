import {useGetTodoQuery} from '../redux/todoListApi'

const AppHeader = () => {
	const {data, isLoading} = useGetTodoQuery()
	if (isLoading) return
	const doneCount = data.filter(({done}) => done).length
	const todoCount = data.length - doneCount
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
