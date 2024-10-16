import { useState } from 'react'

import './App.css'
import NavBar from './Pages/NavBar'
import Home from "./Pages/Home"
import { Routes, Route } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
   <div className="w-full overflow-x-hidden bg-[#10161E] min-h-screen font-lato flex flex-col ">
    <NavBar/>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
   </div>
  )
}

export default App




