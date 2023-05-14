import React, { createContext, useEffect, useState } from 'react'
import Dexie from 'dexie'

import Sidebar from './components/Sidebar/Sidebar'
import WorkSpace from './components/WorkSpace/WorkSpace'
import Header from './components/Header/Header'

import './App.scss'

const db = new Dexie('notesApp')
db.version(1).stores({
	notes: '++id,title,text,date'
})

export const Context = createContext('')

const { notes } = db

function App() {
	const [allNotes, setAllNotes] = useState([])
	const [filterValue, setFilterValue] = useState('')

	const [activeItem, setActiveItem] = useState('')

	const [statusPlusButton, setStatusButton] = useState(false)
	const [statusEditNote, setStatusEditNote] = useState(false)

	useEffect(() => {
		notes.toArray().then(setAllNotes)
	}, [])

	const handleInputChange = event => {
		const { name, value } = event.target
		setActiveItem(prevState => ({
			...prevState,
			[name]: value
		}))
	}

	const changeFilterValue = e => {
		setFilterValue(e.target.value)
	}

	const filteredItems = allNotes.filter(note => {
		return note.title.includes(filterValue)
	})

	const addNote = (titleValue, textareaValue) => {
		notes
			.add({
				title: titleValue,
				text: textareaValue,
				date: new Date()
			})
			.then(() => {
				notes.toArray().then(setAllNotes)
			})
	}

	const deleteNote = id => {
		const confirmed = window.confirm('You should delete this note?')
		if (confirmed) {
			notes.delete(id).then(() => {
				notes.toArray().then(setAllNotes)
			})
			setActiveItem([])
		}
	}

	const editNote = () => {
		notes.update(1, activeItem).then(() => {
			notes.toArray().then(setAllNotes)
		})
		setStatusEditNote(!statusEditNote)
	}

	const handleItemClick = noteItem => {
		setActiveItem(noteItem)
		setStatusButton(false)
	}

	const togglePlusStatus = () => {
		setStatusButton(!statusPlusButton)
		setActiveItem([])
	}

	return (
		<Context.Provider
			value={{
				handleItemClick,
				deleteNote,
				statusPlusButton,
				togglePlusStatus,
				editNote,
				activeItem,
				changeFilterValue,
				filterValue,
				handleInputChange
			}}
		>
			<div className="App">
				<Header />
				<div className="main">
					<Sidebar filteredItems={filteredItems} />
					<WorkSpace
						addNote={addNote}
						editNote={editNote}
						statusEditNote={statusEditNote}
						activeItem={activeItem}
					/>
				</div>
			</div>
		</Context.Provider>
	)
}

export default App
