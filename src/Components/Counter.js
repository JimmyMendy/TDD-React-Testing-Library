import React, { useState } from 'react'
import './Counter.css'

const Counter = () => {
  const [counterValue, setCounterValue] = useState(0);
  const [inputValue, setInputValue] = useState(1);

  const addToCounter = () => {
    setCounterValue(counterValue + inputValue)
  }

  const subFromCounter = () => {
    setCounterValue(counterValue - inputValue)
  }

  const color = (count) => {
    if (count >= 100) {
      return 'green'
    } else if (count <= -100) {
      return ' red'
    }
  }

  return (
    <div>
      <h1 data-testid="header">My Counter</h1>
      <h2 
        data-testid='counter'
        className={color(counterValue)}
      >
        {counterValue}
      </h2>
      <button 
        data-testid="sub-btn"
        onClick={subFromCounter}
      >
        -
      </button>
      <input 
        className="text-center" 
        data-testid="input" 
        type="number" 
        value={inputValue}
        onChange={(e) => {
          setInputValue(parseInt(e.target.value))
        }}
      />
      <button 
        data-testid="add-btn"
        onClick={addToCounter}
      >
        +
      </button>
    </div>
  )
}

export default Counter

