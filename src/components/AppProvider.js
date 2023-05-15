import { createContext, useEffect, useMemo, useState } from 'react'
import { addNote, deleteNote, editNote, getAllNotes } from '../services/indexDb'

export const AppContext = createContext({})

export const AppProvider = ({ children }) => {
    const [allNotes, setAllNotes] = useState([])
    const [filterValue, setFilterValue] = useState('')
    const [activeItem, setActiveItem] = useState('')
    const [statusPlusButton, setStatusButton] = useState(false)
    const [statusEditNote, setStatusEditNote] = useState(false)

    useEffect(() => {
        getAllNotes().then(setAllNotes)
    }, [])

    const changeFilterValue = e => {
        setFilterValue(e.target.value)
    }

    const filteredItems = useMemo(() => {
        return allNotes.filter(note => {
            return note.title.includes(filterValue)
        })
    }, [allNotes, filterValue])

    const handleAddNote = (titleValue, textareaValue) => {
        return addNote(titleValue, textareaValue).then(newNotes => {
            setAllNotes(newNotes)
            setActiveItem(null)
        })
    }

    const handleDeleteNote = id => {
        return deleteNote(id)
            .then(setAllNotes)
            .finally(() => setActiveItem(null))
    }

    const handleEditNote = () => {
        return editNote(activeItem.id, activeItem).then(newNotes => {
            setAllNotes(newNotes)
            setStatusEditNote(prevState => !prevState)
        })
    }

    const handleItemClick = noteItem => {
        setActiveItem(noteItem)
        setStatusButton(false)
    }

    const togglePlusStatus = () => {
        setStatusButton(!statusPlusButton)
        setActiveItem('')
    }

    const contextValue = {
        handleItemClick,
        handleDeleteNote,
        statusPlusButton,
        togglePlusStatus,
        handleEditNote,
        activeItem,
        changeFilterValue,
        filterValue,
        filteredItems,
        addNote,
        statusEditNote,
        setActiveItem,
        handleAddNote
    }

    return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
}
