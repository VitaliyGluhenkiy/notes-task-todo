import { useContext } from 'react'

import { Context } from '../../../App'

import './NoteItem.scss'

const NoteItem = ({ noteItem }) => {
	const { activeItem, handleItemClick } = useContext(Context)
	const dateTime = noteItem.date
	const day = dateTime.getDate()
	const month = dateTime.getMonth()
	const year = dateTime.getFullYear()

	return (
		<div
			className={`noteItem ${noteItem.id === activeItem.id ? 'active' : ''}`}
			key={noteItem.id}
			onClick={() => handleItemClick(noteItem)}
		>
			<h5>
				{noteItem.title.length > 15
					? noteItem.title.slice(0, 15) + '...'
					: noteItem.title}
			</h5>
			<div className="dateAndText">
				<p className="date">{day + '/' + month + '/' + year}</p>
				<p>
					{noteItem.text.length > 10
						? noteItem.text.slice(0, 10) + '...'
						: noteItem.text}
				</p>
			</div>
		</div>
	)
}

export default NoteItem
