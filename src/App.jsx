import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Login from './pages/auth/Login'
import Games from './pages/games/Gamex'
// import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className='min-h-screen w-full bg-gray-200'>
        
      {/* <Login /> */}
      <Games />
      </div>
    </>
  )
}

export default App
