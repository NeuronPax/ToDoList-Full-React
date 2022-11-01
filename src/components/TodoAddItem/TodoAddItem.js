import {useState} from 'react'
import {useDispatch} from 'react-redux'
import {addItem} from '../../redux/todoSlice'
import './todo-add-item.css'

const TodoAddItem = () => {
	const dispatch = useDispatch()
	const [value, setValue] = useState('')
	const onFormSubmit = e => {
		e.preventDefault()
		value.trim() && dispatch(addItem(value.trim()))
		setValue('')
	}
	return (
		<form className='todo-add-item' onSubmit={onFormSubmit}>
			<input
				className='form-control'
				placeholder='What needs to be done'
				value={value}
				onChange={e => setValue(e.target.value)}
			/>
			<button className='btn btn-outline-secondary'>Add</button>
		</form>
	)
}

export default TodoAddItem
