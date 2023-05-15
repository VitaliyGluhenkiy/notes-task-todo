import { useContext } from 'react'

import './SelectedNote.scss'
import { AppContext } from '../../AppProvider'

const SelectedNote = () => {
    const { activeItem } = useContext(AppContext)

    const currentTime = activeItem.date
    const dateString = currentTime?.toDateString()
    const hours = currentTime?.getHours()
    const minutes = currentTime?.getMinutes()
    const seconds = currentTime?.getSeconds()

    return (
        <div>
            <p className="dateTime">{dateString + ' , ' + hours + ':' + minutes + ':' + seconds}</p>
            <h5>{activeItem.title}</h5>
            <p>{activeItem.text}</p>
        </div>
    )
}

export default SelectedNote
