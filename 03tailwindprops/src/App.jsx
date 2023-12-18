import { useState } from 'react'
import './App.css'
import Card from './components/card'
function App() {
  const [count, setCount] = useState(0)

  let myObj1 ={
    name:"Tyagi",
    age:30
  }
  let myObj2 ={
    name:"Rizvi",
    age:30
  }
  let myObj3 ={
    name:"Anonymous",
    age:30
  }
  return (
    <>
    
      <h1 className='bg-green-400 text-black mb-2 rounded-xl'>Tailwind Demo</h1>
      
      <Card title="ChaiaurCode" someObj={myObj1} btnText="Visit Me"/>
      <Card title="ChaiaurCode" someObj={myObj2} btnText="Follow Me"/>
      <Card title="ChaiaurCode" someObj={myObj3} />
    </>
  )
}

export default App
