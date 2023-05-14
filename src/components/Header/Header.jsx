import { useContext } from 'react'

import { FaEdit, FaPlus, FaSearch, FaTrash } from 'react-icons/fa'

import { Context } from '../../App'

import './Header.scss'

const Header = () => {
	const {
		activeItem,
		deleteNote,
		togglePlusStatus,
		editNote,
		changeFilterValue,
		filterValue
	} = useContext(Context)
	return (
		<div className="header">
			<div className="functionPanel">
				<button onClick={() => togglePlusStatus()}>
					<FaPlus />
				</button>
				<button
					onClick={() => deleteNote(activeItem.id)}
					disabled={!activeItem.id}
				>
					<FaTrash />
				</button>
				<button onClick={() => editNote()} disabled={!activeItem.id}>
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

export default Header
