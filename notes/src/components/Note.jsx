const Note = ({ note, handleImportance }) => {
    const label = note.important ? `Mark as unimportant` : `Mark as important`
    return (
        <li>
            {note.content}
            <button onClick={handleImportance}>{label}</button>
        </li>
    )
}

export default Note