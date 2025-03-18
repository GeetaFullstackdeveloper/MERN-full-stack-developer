import React, { useState } from 'react' // Combined import

const Arithmatic = () => {
  const [Firstno, setFirstno] = useState(0)
  const [Secondno, setSecondno] = useState(0)
  const [result, setResult] = useState(null)

  const Submithandle = () => {
    const sum = Number(Firstno) + Number(Secondno)
    setResult(sum)
  }

  return (
    <div>
      <h1>Arithmetic Operations</h1>
      
      <input
        type='number'
        placeholder="Enter First Number"
        onChange={(e) => setFirstno(e.target.value)}
        value={Firstno}
      />
      <br />
      <br />
      
      <input
        type='number'
        placeholder="Enter Second Number"
        onChange={(e) => setSecondno(e.target.value)}
        value={Secondno}
      />
      <br />
      <br />
      
      <button onClick={Submithandle}>Submit</button>
      
      <p>First Number: {Firstno}</p>
      <p>Second Number: {Secondno}</p>
      {result !== null && <p>Sum: {result}</p>}
    </div>
  )
}

export default Arithmatic
