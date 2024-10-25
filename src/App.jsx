import { useState } from 'react'

import './App.css'
import NavBar from './Pages/NavBar'
import Home from "./Pages/Home"
import { Routes, Route } from 'react-router-dom'
import Blog from './Pages/Blog'
import SingleBlog from './Pages/SingleBlog'
import Footer from './Pages/Footer'
import ContactPage from './Pages/ContactPage'
import About from './Pages/About'
import CanvasAnimation from './components/HomePage/CanvasAnimation'
import Products from './Pages/Products'


function App() {
  const [count, setCount] = useState(0)

  return (
   <div className="w-full overflow-x-hidden   font-lato flex flex-col ">
    <CanvasAnimation/>
    {/* <NavBar/> */}
    <Routes>
      <Route path="/" element={<Home  />} />
      <Route  path='/contact' element={<ContactPage/>}/>
      <Route  path='/products' element={<Products/>}/>
      <Route  path='/about' element={<About/>}/>
      <Route  path='/blogs' element={<Blog/>}/>
      <Route path='/blog/:slug' element={<SingleBlog/>} />
    </Routes>

    <Footer/>
   </div>
  )
}

export default App




