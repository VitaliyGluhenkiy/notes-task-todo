import NoteItem from './NoteItem/NoteItem'

import './Sidebar.scss'

const Sidebar = ({ filteredItems }) => {
	return (
		<div className="sidebar">
			{filteredItems?.map(noteItem => (
				<NoteItem noteItem={noteItem} key={noteItem.id} />
			))}
		</div>
	)
}

export default Sidebar
