import { useContext, useState } from 'react'

import AddNewNote from './AddNewNote/AddNewNote'

import { Context } from '../../App'

const WorkSpace = ({ addNote, statusEditNote }) => {
	const [titleValue, setTitleValue] = useState('')
	const [textareaValue, setTextAreaValue] = useState('')
	const { statusPlusButton, activeItem, togglePlusStatus } = useContext(Context)

	const handleTitleChange = e => {
		setTitleValue(e.target.value)
	}

	const handleTextareaChange = e => {
		setTextAreaValue(e.target.value)
	}

	const handleAddNote = () => {
		addNote(titleValue, textareaValue)
		togglePlusStatus()
		setTitleValue('')
		setTextAreaValue('')
	}

	return (
		<div>
			WorkSpace
			{statusPlusButton ? (
				<AddNewNote
					titleValue={titleValue}
					textareaValue={textareaValue}
					handleTitleChange={handleTitleChange}
					handleTextareaChange={handleTextareaChange}
					handleAddNote={handleAddNote}
				/>
			) : (
				<div>
					{statusEditNote ? (
						<div>
							<input type="text" value={activeItem.title} />
							<textarea rows="5" value={activeItem.text}></textarea>
							<button>Ok</button>
						</div>
					) : (
						<div>
							<h5>{activeItem.title}</h5>
							<p>{activeItem.text}</p>
						</div>
					)}
				</div>
			)}
		</div>
	)
}

export default WorkSpace
