import React from 'react'

const Joke = props => {
  return (
    <div className="mt-5">
      <h2>Here is the Joke</h2>
      <p>{props.joke}</p>
    </div>
  )
}

export default Joke