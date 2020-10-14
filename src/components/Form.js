import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Form = props => {
  const [enabledButton, setEnabledButton] = useState(false)
  
  useEffect(() => {
    props.input ? setEnabledButton(true) : setEnabledButton(false)
  }, [props.input])
  
  const inputHandler = event => {
    props.setInput(event.target.value)
  }
  
  const formHandler = async event => {
    event.preventDefault()
    
    const result = await axios.get(`https://api.chucknorris.io/jokes/random?category=${props.input}`)
    
    props.setJoke(result.data.value)
    
    props.setInput('')
  }
  
  return (
    <div className="col-lg-6 mt-5">
      <div className="card">
        <div className="card-header">
          Search for a word
        </div>
        <div className="card-body">
          <form onSubmit={formHandler}>
            <div className="form-group">
              <input onChange={inputHandler} className="form-control" type="text" value={props.input} />
            </div>
            <button className={`btn btn-primary ${enabledButton ? '' : 'disabled'}`} type="submit">Generete Joke</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Form