import React from 'react'

import './AddNewNote.scss'

const AddNewNote = ({
	titleValue,
	textareaValue,
	handleSetTitle,
	handleSetText,
	handleAddNote
}) => {
	return (
		<div className="addNewNote">
			<input
				placeholder="Enter your note title "
				value={titleValue}
				onChange={handleSetTitle}
			/>
			<textarea
				placeholder="enter tasks..."
				value={textareaValue}
				onChange={handleSetText}
				cols="30"
				rows="10"
			></textarea>
			<button onClick={handleAddNote}>Add</button>
		</div>
	)
}

export default AddNewNote
