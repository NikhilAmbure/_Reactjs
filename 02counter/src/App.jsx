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
    // setCounter(counter);
    // console.log("clicked", counter);

    // setCounter(counter);
    // setCounter(counter);
    // setCounter(counter);
    // setCounter(counter);

    // It will show 16 in op not 19 


    // setCounter(prevCounter => prevCounter + 1);
    // setCounter(prevCounter => prevCounter + 1);
    // setCounter(prevCounter => prevCounter + 1);
    // setCounter(prevCounter => prevCounter + 1);

    // It will get the prev state and update it correctly. 
    // So the final value will be 19 in op.

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
