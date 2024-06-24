import { useEffect, useState } from 'react'
import axios from "axios";
import './App.css'
import Search from './components/Search'
import Add from './components/Add'
import Numbers from './components/Numbers'

const App = () => {

  useEffect(() => {
    console.log('effect running')
    axios
      .get('http://localhost:3001/persons')
      .then(response => setPersons(response.data)
      )
  }, [])

  const [persons, setPersons] = useState([])
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