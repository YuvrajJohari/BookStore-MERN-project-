import React from 'react'
import './index.css';
import Home from './Home/Home';
import {Route ,Routes} from "react-router-dom"
import Corses from './Corses/Corses';
import Signup from './components/Signup';

function App() {
  return (
    <>
  <div className='dark:bg-slate-900 dark:text-white'>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/Course"element={<Corses/>}/>
    <Route path="/signup"element={<Signup/>}/>
    </Routes>
  </div>
   
   
   
    </>
  )
}

export default App
