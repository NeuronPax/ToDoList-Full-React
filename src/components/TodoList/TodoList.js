import {useSelector, useDispatch} from 'react-redux'
import {deleteItem, editItem} from '../../redux/todoSlice'
import TodoListItem from '../TodoListItem/TodoListItem'

import './todo-list.css'

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
		<ul className='list-group'>
			{todoList
				.filter(({label}) =>
					label.toLowerCase().includes(searchValue.toLowerCase())
				)
				.map(({id, ...items}) => (
					<li key={id} className='list-group-item'>
						<TodoListItem
							{...items}
							onDeleteItem={() => dispatch(deleteItem(id))}
							onEditItem={action => dispatch(editItem({id, action}))}
						/>
					</li>
				))}
		</ul>
	)
}

export default TodoList
