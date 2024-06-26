import { useEffect, useState } from 'react'
import './App.css'
import Search from './components/Search'
import Add from './components/Add'
import Numbers from './components/Numbers'
import personService from './services/persons'
import Notification from './components/Notification'

const App = () => {

  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSeacrh] = useState('')
  const [notification, setNotification] = useState(false)
  const [message, setMessage] = useState('')
  const [negative, setNegative] = useState(true)

  useEffect(() => {
    personService
      .getAll()
      .then(response => setPersons(response.data)
      )
  }, [])



  const handleSubmit = (event) => {
    event.preventDefault()
    if (!newName || !newNumber) {
      alert('Enter both the fields')
      return;
    }

    setMessage(`Added ${newName} to the list`)

    let newPerson = {
      name: newName,
      number: newNumber
    }

    const numberExist = persons.some((eachPerson) => eachPerson.number === newPerson.number)
    const replaceNumber = persons.some((eachPerson) => eachPerson.number !== newPerson.number && eachPerson.name === newPerson.name)
    if (replaceNumber) {
      const person = persons.find((p) => p.name === newName)
      const changedPerson = { ...person, number: newNumber }
      if (window.confirm('Do you want to replace number?')) {
        
        personService
          .update(person.id, changedPerson)
          .then(response => setPersons(persons.map((eachPerson) => eachPerson.id === person.id ? response.data : eachPerson)))
          .catch(() => {
            setNegative(true)
            setMessage(`Information of ${newName} has already been removed from the server.`)
          })
      }

    }
    else if (numberExist) alert(`${newPerson.number} already exist in this list.`)
    else {
      personService
        .create(newPerson)
        .then(response => setPersons(persons.concat(response.data)))
    }
    setNegative(false)
    setNewName('')
    setNewNumber('')
    setNotification(prevNotification => !prevNotification)
    setTimeout(() => {
      setNotification(prevNotification => !prevNotification)
    }, 5000)
  }

  const handleDelete = (id) => {
    if (window.confirm(`Do you really want to delete this?`)) {
      setNegative(true)
      setMessage(`Number deleted`)
      personService
        .deleteParticular(id)
        .then(
          setPersons(persons.filter((person) => person.id !== id))
        )
    }
  }

  const filteredPersons = persons.filter(person =>
    person.name.toLowerCase().includes(search.toLowerCase())
  )


  return (
    <div>
      <h2>Phonebook</h2>
      {notification && <Notification message={message} negative={negative} />}
      <Search search={search} setSeacrh={setSeacrh} />
      <Add handleSubmit={handleSubmit} setNewName={setNewName} newName={newName} setNewNumber={setNewNumber} newNumber={newNumber} />
      <Numbers filteredPersons={filteredPersons} handleDelete={handleDelete} />
    </div>
  )
}

export default App