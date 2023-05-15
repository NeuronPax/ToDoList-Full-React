import {
	useGetTodoQuery,
	useDeleteItemMutation,
	useEditItemMutation
} from '../redux/todoListApi'
import {useData} from '../redux/hooks'
import TodoListItem from './TodoListItem'

const TodoList = () => {
	const {data, isLoading} = useGetTodoQuery()
	const [deleteItem] = useDeleteItemMutation()
	const [editItem] = useEditItemMutation()
	const {searchValue, filter} = useData()
	if (isLoading) return <h1>Loading...</h1>
	const onDeleteItem = async id => await deleteItem(id)
	const onEditItem = async (id, action) => await editItem({id, action})
	let todoList
	switch (filter) {
		case 'Active': {
			todoList = data.filter(({done}) => !done)
			break
		}
		case 'Done': {
			todoList = data.filter(({done}) => done)
			break
		}
		default:
			todoList = [...data]
	}
	return (
		<ul className='border border-gray-300 rounded-md divide-y divide-gray-300 bg-gray-100 text-xl'>
			{todoList
				.filter(({label}) =>
					label.toLowerCase().includes(searchValue.toLowerCase())
				)
				.map(({id, ...items}) => (
					<li key={id} className='py-1 px-3'>
						<TodoListItem
							{...items}
							onDeleteItem={() => onDeleteItem(id)}
							onEditItem={action => onEditItem(id, action)}
						/>
					</li>
				))}
		</ul>
	)
}

export default TodoList
