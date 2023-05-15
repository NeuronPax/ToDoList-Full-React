import {useActions} from '../redux/hooks'

const SearchInput = () => {
	const {onSearch} = useActions()
	return (
		<input
			className='flex-1 border border-gray-300 rounded-md bg-gray-100 py-2 px-3 mr-1 outline-none focus:bg-white focus:ring-4 ring-blue-300 transition'
			placeholder='Search'
			onChange={e => onSearch(e.target.value)}
		/>
	)
}

export default SearchInput
