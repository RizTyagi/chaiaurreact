import { useState } from 'react'


function App() {  

let [counter,setCounter]=useState(10)
 // let counter=13
const addValue =()=>{
  counter++
  console.log(counter,Math.random())
  setCounter(preState=>preState+1)
  setCounter(preState=>preState+1)
  setCounter(preState=>preState+1)
}
const removeValue =() =>{
  if(counter>0)
  {counter =counter-1}
  setCounter(counter);
  console.log(counter,Date.now())

}
  return (
    <>
    <div className='text-center'>
     <h1>Counter React demo</h1>
     <p>Value :{counter}</p>
     <button onClick={addValue}>Add Value </button>
     <br/>
     <button onClick={removeValue}>Remove value</button>
     <p>{counter}</p>
     </div>
     </>
  )
}

export default App
