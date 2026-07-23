import { useState, useEffect, useCallback } from 'react' // Hook : for ui updation
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  // Using hook
  let [counter, setCounter] = useState(15)

  // let counter = 15

  const addValue = () => {
    counter = counter + 1;
    setCounter(counter);
    console.log("clicked", counter);
  }

  const removeValue = () => {
    setCounter(counter - 1);
  }
  
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter Value: {counter}</h2>

      <button
      onClick={addValue}
      >Add value {counter}</button>
      <br />
      <button
      onClick={removeValue}
      >Remove value {counter}</button>
      <p>footer : {counter}</p>
    </>
  )
}

export default App
