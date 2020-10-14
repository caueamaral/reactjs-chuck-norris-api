import React, { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import Info from './components/Info'
import Form from './components/Form'
import Joke from './components/Joke'

function App() {
  const [input, setInput] = useState('')
  const [joke, setJoke] = useState('')
  
  useEffect(() => {
    getJoke()
  }, [])
  
  const getJoke = async () => {
    const result = await axios.get('https://api.chucknorris.io/jokes/random')
    
    setJoke(result.data.value)
  }
  
  return (
    <div className="App">
      <div className="container mt-5">
        <div className="row">
          <Info />
          <Form
            input={input}
            setInput={setInput}
            setJoke={setJoke}
          />
        </div>
        <Joke joke={joke} />
      </div>
    </div>
  )
}

export default App