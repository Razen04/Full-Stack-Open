
const Add = ({handleSubmit, setNewName, newName, setNewNumber, newNumber}) => {
    return (
        <div>
            <h2>Add a new Name</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    name: <input type='text' onChange={(event) => setNewName(event.target.value)} value={newName} />
                    number: <input type='number' onChange={(event) => setNewNumber(event.target.value)} value={newNumber} />
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
        </div>
    )
}

export default Add
