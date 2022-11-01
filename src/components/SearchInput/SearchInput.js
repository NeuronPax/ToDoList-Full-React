import {useDispatch} from 'react-redux'
import {onSearch} from '../../redux/todoSlice'
import './search-input.css'

const SearchInput = () => {
	const dispatch = useDispatch()
	return (
		<input
			className='form-control search-input'
			placeholder='Search'
			onChange={e => dispatch(onSearch(e.target.value))}
		/>
	)
}

export default SearchInput
