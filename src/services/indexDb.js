import Dexie from 'dexie'

const db = new Dexie('notesApp')
db.version(1).stores({
    notes: '++id,title,text,date'
})

const { notes } = db

export const getAllNotes = () => notes.toArray()

export const editNote = (id, newItem) => {
    return notes.update(id, newItem).then(() => {
        return notes.toArray()
    })
}

export const deleteNote = id => {
    const confirmed = window.confirm('You should delete this note?')
    if (confirmed) {
        return notes.delete(id).then(() => notes.toArray())
    }
    return notes.toArray()
}

export const addNote = (title, text) => {
    return notes
        .add({
            title,
            text,
            date: new Date()
        })
        .then(() => notes.toArray())
}
