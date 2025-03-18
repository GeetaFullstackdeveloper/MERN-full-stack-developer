import React from 'react'
import { useState } from 'react' // react hook


const Basic = () => {
  const [count, setCount] = useState(0)
  const [message, setMessage] = useState('')
  console.log("Number = ", count)

  const handleOnNumber = () => {
    setCount(prevCount => {
      const newCount = prevCount + 1;
      if (newCount > 10) {
        console.log("Number is greater than 10");
        setMessage("Number is greater than 10");
      } else {
        console.log("Number is less than 10");
        setMessage("Number is less than 10");
      }
      return newCount;
    });
  }

  return (
    <>
      <h1>JavaScript</h1>
      <button onClick={handleOnNumber}>Click me</button>
      <p>Number = {count}</p>
      <p>{message}</p>
      

    
    </>
  )
}

  
export default Basic