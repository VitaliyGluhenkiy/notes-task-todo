import React, { useContext } from 'react'
import { Context } from '../../../App'

import './EditNote.scss'

const EditNote = () => {
	const { handleInputChange, editNote, activeItem } = useContext(Context)
	return (
		<div className="editBlock">
			<input
				type="text"
				name="title"
				value={activeItem.title}
				onChange={handleInputChange}
			/>
			<textarea
				rows="5"
				name="text"
				value={activeItem.text}
				onChange={handleInputChange}
			></textarea>
			<button onClick={editNote}>Ok</button>
		</div>
	)
}

export default EditNote
