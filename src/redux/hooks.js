import {useSelector, useDispatch} from 'react-redux'
import {bindActionCreators} from '@reduxjs/toolkit'
import {todoSliceActions} from './todoSlice'

export const useActions = () => {
	const dispatch = useDispatch()
	return bindActionCreators({...todoSliceActions}, dispatch)
}

export const useData = () => useSelector(({todoSlice}) => todoSlice)
