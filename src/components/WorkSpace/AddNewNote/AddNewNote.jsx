import './AddNewNote.scss'

const AddNewNote = ({ titleValue, textareaValue, handleSetTitle, handleSetText, onAddNote }) => {
    return (
        <div className="addNewNote">
            <input
                placeholder="Enter your note title "
                value={titleValue}
                onChange={handleSetTitle}
            />
            <textarea
                placeholder="enter tasks..."
                value={textareaValue}
                onChange={handleSetText}
                cols="30"
                rows="10"
            />
            <button onClick={onAddNote}>Add</button>
        </div>
    )
}

export default AddNewNote
