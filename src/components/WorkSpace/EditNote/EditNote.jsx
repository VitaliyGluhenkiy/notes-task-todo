import { useContext } from 'react'

import { AppContext } from '../../AppProvider'

import './EditNote.scss'

const EditNote = () => {
    const { handleEditNote, activeItem, setActiveItem } = useContext(AppContext)

    const handleInputChange = e => {
        const { name, value } = e.target
        setActiveItem(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    return (
        <div className="editBlock">
            <input type="text" name="title" value={activeItem.title} onChange={handleInputChange} />
            <textarea rows="5" name="text" value={activeItem.text} onChange={handleInputChange} />
            <button onClick={handleEditNote}>Ok</button>
        </div>
    )
}

export default EditNote
