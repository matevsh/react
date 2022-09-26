import {useState} from "react"

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <>
        <h1>Hello react world!</h1>
        <p>Counter is {counter}</p>
        <button onClick={()=> setCounter(counter+1)}>Increase counter by one</button>
    </>
  )
}

export default App
