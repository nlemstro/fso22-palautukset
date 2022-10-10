import { useLayoutEffect, useState } from 'react'

const Display = ({ feedBack }) => {
  return (
    <div>{feedBack}</div>
  )
}

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const StatisticLine = ({ text, value }) => {
  return (
    <div>{text} {value}</div>
  )
}
const Statistics = ({ good, neutral, bad }) => {

  const total = good + neutral + bad
  const average = (good - bad) / total
  const positive = good / total * 100

  if (total === 0) {
    return ("No feedback given")
  }
  else {
    return (
      <div>
        <table>
          <tbody>
            <tr><td><StatisticLine text="good" value={good} /></td></tr>
            <tr><td><StatisticLine text="neutral" value={neutral} /></td></tr>
            <tr><td><StatisticLine text="bad" value={bad} /></td></tr>
            <tr><td><StatisticLine text="all" value={total} /></td></tr>
            <tr><td><StatisticLine text="average" value={average} /></td></tr>
            <tr><td><StatisticLine text="positive" value={positive} /></td></tr>
          </tbody>
        </table>
      </div>
    )
  }
}
const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const increaseGood = () => { setGood(good + 1) }
  const increaseNeutral = () => { setNeutral(neutral + 1) }
  const increaseBad = () => { setBad(bad + 1) }
  return (
    <div>
      <h2>Give feedback</h2>
      <Button handleClick={increaseGood} text="good" />
      <Button handleClick={increaseNeutral} text="neutral" />
      <Button handleClick={increaseBad} text="bad" />

      <h2>Statistics</h2>

      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>


  )
}

export default App