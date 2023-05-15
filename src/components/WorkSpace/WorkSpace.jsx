import { useContext, useState } from 'react'

import AddNewNote from './AddNewNote/AddNewNote'
import SelectedNote from './SelectedNote/SelectedNote'
import EditNote from './EditNote/EditNote'

import { Context } from '../../App'

import './WorkSpace.scss'

const WorkSpace = ({ addNote, statusEditNote }) => {
	const [titleValue, setTitleValue] = useState('')
	const [textareaValue, setTextAreaValue] = useState('')

	const { statusPlusButton, togglePlusStatus, activeItem } = useContext(Context)

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
					{statusEditNote ? <EditNote /> : activeItem ? <SelectedNote /> : ''}
				</div>
			)}
		</div>
	)
}

export default WorkSpace
