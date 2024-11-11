import React from 'react'
import {Routes, Route} from "react-router-dom"
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Services from './pages/Services'
import Projects from './pages/Projects'
import GraphicDesign from './pages/GraphicDesign'
import WebDesign from './pages/WebDesign'
import All from './pages/All'
import Video from './pages/Videos'
import Posters from './pages/Poster'


function App() {
    return  <Routes>
  
  <Route path='/' element={<Home/>} />
  
   
  
  <Route path='/contact' element={<Contact/>} />
  <Route path='/about' element={<About/>} />
  <Route path='/services' element={<Services/>} />
  <Route path='/projects' element={<Projects/>} />
  <Route path='/all' element={<All/>} />
  <Route path='/graphic' element={<GraphicDesign/>} />
  <Route path='/web' element={<WebDesign/>} />
  <Route path='/video' element={<Video/>} />
  <Route path='/posters' element={<Posters/>} />
    </Routes>
  
        
   
  }
  
  export default App
  