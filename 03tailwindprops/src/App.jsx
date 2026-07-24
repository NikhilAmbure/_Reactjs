import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  const myObj = {
    username: "Nick",
    age: 21
  }

  return (
    <>
      <h1 className="bg-green-400 p-4 text-black mb-4">Tailwind css</h1>
      {/* channel, ... goes as props */}
      <Card channel="chaiaurcode" anotherObject={myObj}/> 
      <Card channel="chai"/>
    </>
  )
}

export default App
