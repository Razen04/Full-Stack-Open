import { useState } from 'react'
import './App.css'

const Button = ({ handleClick, text }) => {
  return (
    <button className='btn' onClick={handleClick}>{text}</button>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]



  const [selected, setSelected] = useState(0)

  const [vote, setVote] = useState(Array(8).fill(0));


  const randomNumber = Math.floor(Math.random() * anecdotes.length);

  function handleClick() {
    setSelected(randomNumber)
  }

  function handleVote() {
    const copy = [...vote]
    copy[selected]++;
    setVote(copy)
  }

  const highestVotes = Math.max(...vote)
  const winningAnecdote = vote.indexOf(highestVotes)

  return (
    <div className='flex'>
      <h1>Anecdote of the Day</h1>
      {anecdotes[selected]}
      <div>
        {vote[selected]} votes
      </div>

      <Button handleClick={handleClick} text='Next Anecdote' />
      <button className='btn' onClick={handleVote}>
        Vote
      </button>
      <div>
        <h1>Anecdote with highest Vote</h1>
        <p>
          {anecdotes[winningAnecdote]}
        </p>
        <p>{vote[winningAnecdote]} votes</p>

      </div>
    </div>
  )
}

export default App