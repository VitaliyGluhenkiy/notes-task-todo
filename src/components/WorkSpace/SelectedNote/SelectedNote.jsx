import React, { useContext } from 'react'
import { Context } from '../../../App'

import './SelectedNote.scss'

const SelectedNote = () => {
	const { activeItem } = useContext(Context)

	const currentTime = activeItem.date
	const dateString = currentTime?.toDateString()
	const hours = currentTime?.getHours()
	const minutes = currentTime?.getMinutes()
	const seconds = currentTime?.getSeconds()
	return (
		<div>
			<p className="dateTime">
				{dateString + ' , ' + hours + ':' + minutes + ':' + seconds}
			</p>
			<h5>{activeItem.title}</h5>
			<p>{activeItem.text}</p>
		</div>
	)
}

export default SelectedNote
