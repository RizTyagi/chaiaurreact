import { useState } from 'react'

function App() {
  const [colore, setColore] = useState("olive")

  return (
  <>
   <div className='w-full h-screen animation-400'
   style={{backgroundColor:colore}}>
   </div>
   <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
    <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-2 py-2 rounded-xl'>
    
      <button onClick={()=>setColore("red")}
      className='outline-none px-4 py-1 rounded-full shadow-lg text-white' 
      style={{backgroundColor:"red"}}>Red</button>

      <button onClick={()=>setColore("green")}
      className='outline-none px-4 py-1 rounded-full shadow-lg text-white' 
     style={{backgroundColor:"green"}}>Green</button>

      <button onClick={()=>setColore("blue")}
      className='outline-none px-4 py-1 rounded-full shadow-lg text-white' 
     style={{backgroundColor:"blue"}}>Blue</button>

      <button onClick={()=>setColore("yellow")}
      className='outline-none px-4 py-1 rounded-full shadow-lg text-black' 
     style={{backgroundColor:"yellow"}}>Yellow</button>

      <button onClick={()=>setColore("black")}
      className='outline-none px-4 py-1 rounded-full shadow-lg text-white' 
     style={{backgroundColor:"black"}}>Black</button>
    
    <button onClick={()=>setColore("olive")}
      className='outline-none px-4 py-1 rounded-full shadow-lg text-white' 
     style={{backgroundColor:"olive"}}>Olive</button>

    <button onClick={()=>setColore("pink")}
      className='outline-none px-4 py-1 rounded-full shadow-lg text-white' 
     style={{backgroundColor:"pink"}}>Pink</button> 

    <button onClick={()=>setColore("maroon")}
      className='outline-none px-4 py-1 rounded-full shadow-lg text-white' 
     style={{backgroundColor:"maroon"}}>Maroon</button>
    
    </div>
   </div>
   </>
  )
}

export default App
