import { useState,useCallback,useEffect,useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password,setPassword] =useState("")

  
  
  const passwordRef = useRef(null)
  const passwordGenrator = useCallback(()=>{
let pass=""
let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuwxyz"
if(numberAllowed) str+="01234566789"
if(charAllowed) str+="~!@#$%^&*()_<>{}"

for (let index = 1; index < length; index++) {
 let char = Math.floor(Math.random() * str.length+1) 
pass +=   str.charAt(char)
}
setPassword(pass)
            },[length,numberAllowed,charAllowed])
const copyPasswordtoClipboard = useCallback(()=>{
passwordRef.current?.select()
passwordRef.current?.setSelectionRange(0,8)
  window.navigator.clipboard.readText(password)
},[password])
useEffect(()=>{
  passwordGenrator()
},[length,numberAllowed,charAllowed,passwordGenrator])

  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounde-lg bg-gray-700 px-4 my-8 text-orange-500'>    
       <h1 className='text-4xl text-center text-white mx-4 my-2'>Password Generator</h1>
       <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input type='text'
          value={password}
          className='outline-none w-full py-1 px-1'
          placeholder="Password" 
          readOnly  ref={passwordRef}>

          </input>

          <button onClick={copyPasswordtoClipboard} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
          </div>
          <div className='flex item-center gap-x-1'>
          <div className='flex item-center gap-x-1'>
          <input type='range' 
          min={6}
          max={99}
          value={length}
          className='cursor-pointer'
          onChange={(e)=>{setLength(e.target.value)}}
          ></input>
          <label>Length :{length}</label>
          </div>
          <div className='flex item-center gap-x-1'>
          <input type='checkbox'
          id="NumberCheck"
          defaultChecked={numberAllowed}
          className='cursor-pointer'
          onChange={()=>{setNumberAllowed((prev) => !prev)}}
          ></input>
          <label htmlFor='NumberCheck'>Number</label>
          </div>
          <div className='flex item-center gap-x-1'>
          <input type='checkbox'
          id="charCheck"
          defaultChecked={charAllowed}
          className='cursor-pointer'
          onChange={()=>{setCharAllowed((prev) => !prev)}}
          ></input>
          <label htmlFor='charCheck'>Charecter</label>
          </div>
        </div>
       </div>
      

    </>
  )
}

export default App
