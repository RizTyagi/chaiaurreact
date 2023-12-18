
import { useState,useEffect } from 'react'
import './App.css'
import { ThemeProvider } from './contexts/theme'
import ThemeBtn from './components/Themebtn'
import Card from './components/Card'

function App() {
const [themeMode,setThemeMode] = useState('light')
const darkTheme = () => {
  setThemeMode("dark")
}
const lightTheme =() => {
  setThemeMode("light")
}
//use actudal change

useEffect(() =>{
document.querySelector('html').classList.remove("light","dark")
document.querySelector('html').classList.add(themeMode)}
  ,[themeMode])

  return (
    <ThemeProvider value={{themeMode,lightTheme,darkTheme}}>      
<div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        {/* theme btn */}
                        <ThemeBtn />
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       {/* card */}
                       <Card />
                    </div>
                </div>
            </div>

    </ThemeProvider>
  )
}

export default App
