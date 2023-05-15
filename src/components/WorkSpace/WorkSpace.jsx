import { useContext, useState } from 'react'

import AddNewNote from './AddNewNote/AddNewNote'
import SelectedNote from './SelectedNote/SelectedNote'
import EditNote from './EditNote/EditNote'

import { AppContext } from '../AppProvider'

import './WorkSpace.scss'

export const WorkSpace = () => {
    const [titleValue, setTitleValue] = useState('')
    const [textareaValue, setTextAreaValue] = useState('')

    const { statusPlusButton, togglePlusStatus, activeItem, statusEditNote, handleAddNote } =
        useContext(AppContext)

    const handleSetTitle = e => {
        setTitleValue(e.target.value)
    }

    const handleSetText = e => {
        setTextAreaValue(e.target.value)
    }

    const onAddNote = () => {
        return handleAddNote(titleValue, textareaValue).then(() => {
            togglePlusStatus()
            setTitleValue('')
            setTextAreaValue('')
        })
    }

    return (
        <div className="workSpace">
            {statusPlusButton ? (
                <AddNewNote
                    titleValue={titleValue}
                    textareaValue={textareaValue}
                    handleSetTitle={handleSetTitle}
                    handleSetText={handleSetText}
                    onAddNote={onAddNote}
                />
            ) : (
                <div>{statusEditNote ? <EditNote /> : activeItem ? <SelectedNote /> : ''}</div>
            )}
        </div>
    )
}
