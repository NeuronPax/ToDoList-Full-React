import {useActions, useData} from '../redux/hooks'

const FilterStatus = () => {
	const {filter} = useData()
	const {onFilter} = useActions()
	const btn = ['All', 'Active', 'Done']
	return (
		<div className='flex border border-gray-400 rounded-md divide-x divide-gray-400 overflow-hidden'>
			{btn.map(name => (
				<button
					key={name}
					className={`px-3 ${
						name === filter
							? 'bg-blue-300 hover:bg-blue-400'
							: 'hover:bg-gray-400'
					} hover:text-white transition`}
					onClick={() => onFilter(name)}>
					{name}
				</button>
			))}
		</div>
	)
}

export default FilterStatus
