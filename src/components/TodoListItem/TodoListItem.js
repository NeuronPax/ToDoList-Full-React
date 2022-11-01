import './todo-list-item.css'

const TodoListItem = ({label, important, done, onDeleteItem, onEditItem}) => (
	<span className={`list-items ${important && 'important'} ${done && 'done'}`}>
		<span onClick={() => onEditItem('done')}>{label}</span>
		<button
			className='btn btn-outline-success btn-sm'
			onClick={() => onEditItem('important')}>
			<i className='fa fa-exclamation' />
		</button>
		<button className='btn btn-outline-danger btn-sm' onClick={onDeleteItem}>
			<i className='fa fa-trash' />
		</button>
	</span>
)

export default TodoListItem
