import { useContext } from 'react'

import NoteItem from './NoteItem/NoteItem'
import { AppContext } from '../AppProvider'

import './Sidebar.scss'

export const Sidebar = () => {
    const { filteredItems } = useContext(AppContext)

    return (
        <div className="sidebar">
            {filteredItems?.map(noteItem => (
                <NoteItem noteItem={noteItem} key={noteItem.id} />
            ))}
        </div>
    )
}
