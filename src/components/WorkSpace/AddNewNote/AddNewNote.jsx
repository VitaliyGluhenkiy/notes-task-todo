import React from 'react'

const AddNewNote = ({
	titleValue,
	handleTitleChange,
	textareaValue,
	handleTextareaChange,
	handleAddNote
}) => {
	return (
		<div>
			<input value={titleValue} onChange={handleTitleChange} />
			<textarea
				value={textareaValue}
				onChange={handleTextareaChange}
				cols="30"
				rows="10"
			></textarea>
			<button onClick={handleAddNote}>click</button>
		</div>
	)
}

export default AddNewNote
