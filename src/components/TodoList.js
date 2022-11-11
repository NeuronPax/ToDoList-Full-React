import {useSelector, useDispatch} from 'react-redux'
import {deleteTodo, editTodo} from '../redux/todoSlice'
import TodoListItem from './TodoListItem'

const TodoList = () => {
	const {todoData, searchValue, filter} = useSelector(({todo}) => todo)
	const dispatch = useDispatch()
	let todoList
	switch (filter) {
		case 'Active': {
			todoList = todoData.filter(({done}) => !done)
			break
		}
		case 'Done': {
			todoList = todoData.filter(({done}) => done)
			break
		}
		default:
			todoList = [...todoData]
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
							onDeleteItem={() => dispatch(deleteTodo(id))}
							onEditItem={action => dispatch(editTodo({id, action}))}
						/>
					</li>
				))}
		</ul>
	)
}

export default TodoList
