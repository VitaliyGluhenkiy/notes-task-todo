import { useContext } from 'react'

import { Context } from '../../../App'

import './NoteItem.scss'

const NoteItem = ({ noteItem }) => {
	const { activeItem, handleItemClick } = useContext(Context)
	return (
		<div
			className={`noteItem ${noteItem.id === activeItem.id ? 'active' : ''}`}
			key={noteItem.id}
			onClick={() => handleItemClick(noteItem)}
		>
			<h5>{noteItem.title}</h5>
			<p>{noteItem.text}</p>
		</div>
	)
}

export default NoteItem
