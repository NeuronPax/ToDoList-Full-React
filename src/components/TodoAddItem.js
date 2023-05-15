import {useAddItemMutation} from '../redux/todoListApi'
import {useState} from 'react'

const TodoAddItem = () => {
	const [addItem] = useAddItemMutation()
	const [value, setValue] = useState('')
	const onFormSubmit = async e => {
		e.preventDefault()
		value.trim() && (await addItem(value.trim()))
		setValue('')
	}
	return (
		<form className='flex mt-2' onSubmit={onFormSubmit}>
			<input
				className='flex-1 border border-gray-300 rounded-md bg-gray-100 py-2 px-3 mr-1 outline-none focus:bg-white focus:ring-4 ring-blue-300 transition'
				placeholder='What needs to be done'
				value={value}
				onChange={e => setValue(e.target.value)}
			/>
			<button className='border border-gray-400 rounded-md px-3 hover:bg-gray-400 hover:text-white transition'>
				Add
			</button>
		</form>
	)
}

export default TodoAddItem
