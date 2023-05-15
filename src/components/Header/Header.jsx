import { useContext } from 'react'

import { FaEdit, FaPlus, FaSearch, FaTrash } from 'react-icons/fa'

import { AppContext } from '../AppProvider'

import './Header.scss'

export const Header = () => {
    const {
        activeItem,
        handleDeleteNote,
        togglePlusStatus,
        changeFilterValue,
        filterValue,
        handleEditNote
    } = useContext(AppContext)

    return (
        <div className="header">
            <div className="functionPanel">
                <button onClick={togglePlusStatus}>
                    <FaPlus />
                </button>
                <button onClick={() => handleDeleteNote(activeItem?.id)} disabled={!activeItem?.id}>
                    <FaTrash />
                </button>
                <button onClick={handleEditNote} disabled={!activeItem?.id}>
                    <FaEdit />
                </button>
            </div>
            <div className="search">
                <FaSearch />
                <input
                    type="text"
                    placeholder="Search..."
                    value={filterValue}
                    onChange={changeFilterValue}
                />
            </div>
        </div>
    )
}
