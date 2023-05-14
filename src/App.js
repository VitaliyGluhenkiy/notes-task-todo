import React, { createContext, useEffect, useState } from 'react'
import Dexie from 'dexie'
import { useLiveQuery } from 'dexie-react-hooks'

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

	const [activeItem, setActiveItem] = useState({})
	const [statusPlusButton, setStatusButton] = useState(false)
	const [statusEditNote, setStatusEditNote] = useState(false)

	useEffect(() => {
		notes.toArray().then(setAllNotes)
	}, [])

	const changeFilterValue = e => {
		setFilterValue(e.target.value)
	}

	const filteredItems = allNotes.filter(note => {
		return note.title.includes(filterValue)
	})

	const addNote = async (titleValue, textareaValue) => {
		await notes
			.add({
				title: titleValue,
				text: textareaValue,
				date: new Date()
			})
			.then(() => {
				notes.toArray().then(setAllNotes)
			})
	}

	const deleteNote = async id => {
		const confirmed = window.confirm('You should delete this note?')
		if (confirmed) {
			await notes.delete(id).then(() => {
				notes.toArray().then(setAllNotes)
			})
			setActiveItem([])
		}
	}

	const editNote = () => {
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
				filterValue
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
					/>
				</div>
			</div>
		</Context.Provider>
	)
}

export default App
