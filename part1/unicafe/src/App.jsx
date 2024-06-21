import { useState } from 'react'
import './App.css'

const Feedback = ({ setGood, setNeutral, setBad }) => {
  return (
    <div>
      <h1>Give Feedback</h1>
      <div className="btn">
        <button onClick={() => setGood(prevCount => prevCount + 1)}>Good</button>
        <button onClick={() => setNeutral(prevCount => prevCount + 1)}>Neutral</button>
        <button onClick={() => setBad(prevCount => prevCount + 1)}>Bad</button>
      </div>
    </div>
  )
}

const StatisticsLine = ({ text, stats }) => {
  if(text === 'Positive') return (
    <tbody>
      <tr>
        <td>{text}</td>
        <td>{stats}%</td>
      </tr>
    </tbody>
      
  )
  else return (
    <tbody>
      <tr>
        <td>{text}</td>
        <td>{stats}</td>
      </tr>
    </tbody>
  )
}

const Statistics = ({ good, neutral, bad }) => {
  return (
    <div>
      <h1>Statistics</h1>
      {good || neutral || bad ? <table>
        <StatisticsLine text='Good' stats={good} />
        <StatisticsLine text='Neutral' stats={neutral} />
        <StatisticsLine text='Bad' stats={bad} />
        <StatisticsLine text='Total' stats={good + bad + neutral} />
        <StatisticsLine text='Average' stats={(good + bad) / 2} />
        <StatisticsLine text='Positive' stats={(good / (good + bad + neutral)) * 100} />
      </table> : <h2>No feedback given.</h2>}

    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Feedback setGood={setGood} setNeutral={setNeutral} setBad={setBad} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App