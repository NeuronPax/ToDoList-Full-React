import {useDispatch} from 'react-redux'
import {onSearch} from '../redux/todoSlice'

const SearchInput = () => {
	const dispatch = useDispatch()
	return (
		<input
			className='flex-1 border border-gray-300 rounded-md bg-gray-100 py-2 px-3 mr-1 outline-none focus:bg-white focus:ring-4 ring-blue-300 transition'
			placeholder='Search'
			onChange={e => dispatch(onSearch(e.target.value))}
		/>
	)
}

export default SearchInput
