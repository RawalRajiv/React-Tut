import { useState } from 'react';
import './App.css'

function App() {

  let [counter, setCounter] = useState(0);

  const addValueByOne = () => {
    if (counter >= 20 ) {
      setCounter(0);  
    }
    else  {
    //console.log("Conter value before", counter)
    //counter += 1;
    setCounter(counter +1);
    //console.log("Counter value after", counter)
    }
  } //addValueByOne

  const substractValueByOne = () => {
    if (counter <= 0 ) {
      setCounter(0);  
    }
    else {
      //console.log("Conter value before", counter)
      //counter -= 1;
      setCounter(counter - 1);
      //console.log("Counter value after", counter)
    }
  } //substractValueByOne


  return (
    <>
     <h1>Second React Page</h1>
     <h2>Counter value: {counter}</h2>

      <button onClick={addValueByOne}> Increment counter Value: {counter}</button>
      <button onClick={substractValueByOne}> Decrement counter Value: {counter}</button>

    </>
  )
}

export default App
