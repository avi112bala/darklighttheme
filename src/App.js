
import { useEffect, useState } from 'react'
import './App.css'
import Login from './component/Login'
import Profile from './component/Profile'
import { ThemeProvider } from './component/Themse'
import UserContextProvider from './context/UserContextProvider'
import ThemeBtn from './component/ThemeButton'
import Card from './component/Card'

function App() {
const [themeMode,setThemeMode]=useState('light')
const lighttheme=()=>{
  setThemeMode('light')
}
const darktheme=()=>{
  setThemeMode('dark')
}

useEffect(()=>{
  document.querySelector('html').classList.remove("light","dark")
  document.querySelector('html').classList.add(themeMode)
},[themeMode])

  return (
    // <UserContextProvider>
    //   <h1>React with Chai and share is important</h1>
    //   <Login />
    //   <Profile />
    // </UserContextProvider>
    <>
      <ThemeProvider value={{themeMode,lighttheme,darktheme}}>
        <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
              <ThemeBtn/>
            </div>

            <div className="w-full max-w-sm mx-auto">
                <Card/>
            </div>
          </div>
        </div>
      </ThemeProvider>

    </>
  )
}

export default App