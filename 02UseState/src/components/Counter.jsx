import { useState } from "react"

const Counter = () => {
  const [counter, setCounter] = useState(5)

  function decrementCount(){
    // setCounter(counter - 1)
    setCounter((prevCount) => prevCount - 1)
  }

  function incrementCount(){
    // setCounter(counter + 1)
    setCounter((nextCount) => nextCount + 1)
  }

  return(
    <>
      <div>
        <h2>Counter : {counter}</h2>
        <button onClick={decrementCount}>-</button>
        <span>{counter}</span>
        <button onClick={incrementCount}>+</button>
      </div>  
    </>
  )
}

export default Counter