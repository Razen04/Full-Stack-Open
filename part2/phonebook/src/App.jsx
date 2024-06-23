import { useState } from 'react'
import './App.css'
import Search from './components/Search'
import Add from './components/Add'
import Numbers from './components/Numbers'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSeacrh] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!newName || !newNumber) {
      alert('Enter both the fields')
      return;
    }

    let newPerson = {
      name: newName,
      number: newNumber
    }

    const personExist = persons.some((eachPerson) => eachPerson.name === newPerson.name || eachPerson.number === newPerson.number)
    if (personExist) alert(`Either ${newPerson.name} or ${newPerson.number} already exist in this list.`)
    else setPersons([...persons, newPerson])
    setNewName('')
    setNewNumber('')

  }

  const filteredPersons = persons.filter(person =>
    person.name.toLowerCase().includes(search.toLowerCase())
  )


  return (
    <div>
      <h2>Phonebook</h2>
      <Search search={search} setSeacrh={setSeacrh} />
      <Add handleSubmit={handleSubmit} setNewName={setNewName} newName={newName} setNewNumber={setNewNumber} newNumber={newNumber} />
      <Numbers filteredPersons={filteredPersons} />
    </div>
  )
}

export default App