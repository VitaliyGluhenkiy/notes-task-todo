import { useContext, useState } from 'react'

import AddNewNote from './AddNewNote/AddNewNote'

import { Context } from '../../App'

import './WorkSpace.scss'

const WorkSpace = ({ addNote, statusEditNote, activeItem }) => {
	const [titleValue, setTitleValue] = useState('')
	const [textareaValue, setTextAreaValue] = useState('')

	const { statusPlusButton, togglePlusStatus, handleInputChange, editNote } =
		useContext(Context)

	const handleSetTitle = e => {
		setTitleValue(e.target.value)
	}

	const handleSetText = e => {
		setTextAreaValue(e.target.value)
	}

	const handleAddNote = () => {
		addNote(titleValue, textareaValue)
		togglePlusStatus()
		setTitleValue('')
		setTextAreaValue('')
	}

	return (
		<div className="workSpace">
			{statusPlusButton ? (
				<AddNewNote
					titleValue={titleValue}
					textareaValue={textareaValue}
					handleSetTitle={handleSetTitle}
					handleSetText={handleSetText}
					handleAddNote={handleAddNote}
				/>
			) : (
				<div>
					{statusEditNote ? (
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
