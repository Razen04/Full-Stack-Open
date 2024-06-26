
const Numbers = ({ filteredPersons, handleDelete }) => {
    return (
        <div>
            <h2>Numbers</h2>
            {
                filteredPersons.map((eachPerson) => {
                    return (
                        <div key={eachPerson.id} className='flex'>
                            <p className='name'>{eachPerson.name}</p>
                            <p>{eachPerson.number}</p>
                            <button onClick={() => handleDelete(eachPerson.id)}>Delete</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Numbers
