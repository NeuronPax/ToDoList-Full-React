const TodoListItem = ({label, important, done, onDeleteItem, onEditItem}) => (
	<span className='flex items-center'>
		<span
			className={`flex-1 ml-5 select-none cursor-pointer ${
				important && 'important'
			} ${done && 'done'}`}
			onClick={() => onEditItem({done: !done})}>
			{label}
		</span>
		<button
			className='border border-green-600 rounded w-8 h-7 m-1 text-sm text-green-600 hover:bg-green-600 hover:text-white transition'
			onClick={() => onEditItem({important: !important})}>
			<i className='fa fa-exclamation' />
		</button>
		<button
			className='border border-red-600 rounded w-8 h-7 m-1 text-sm text-red-600 hover:bg-red-600 hover:text-white transition'
			onClick={onDeleteItem}>
			<i className='fa fa-trash' />
		</button>
	</span>
)

export default TodoListItem
