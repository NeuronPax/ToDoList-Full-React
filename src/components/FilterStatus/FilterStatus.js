import {useSelector, useDispatch} from 'react-redux'
import {onFilter} from '../../redux/todoSlice'

const FilterStatus = () => {
	const {filter} = useSelector(({todo}) => todo)
	const dispatch = useDispatch()
	const btn = ['All', 'Active', 'Done']
	return (
		<div className='btn-group'>
			{btn.map(name => (
				<button
					key={name}
					className={`btn btn-${
						name === filter ? 'info' : 'outline-secondary'
					}`}
					onClick={() => dispatch(onFilter(name))}>
					{name}
				</button>
			))}
		</div>
	)
}

export default FilterStatus
