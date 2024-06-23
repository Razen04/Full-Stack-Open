
const Numbers = ({filteredPersons}) => {
    return (
        <div>
            <h2>Numbers</h2>
            {
                filteredPersons.map((eachPerson, i) => {
                    return (
                        <div key={i} className='flex'>
                            <p className='name'>{eachPerson.name}</p>
                            <p>{eachPerson.number}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Numbers
