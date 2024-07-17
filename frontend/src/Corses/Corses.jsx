import React from 'react'
import Navbar from '../components/Navbar'
import Corse from '../components/Corse'
import Footer from '../components/Footer'
import list from "../../public/list.json"
function Corses() {
  return (
    <>
    <Navbar/>
    <div className='min-h-screen'>
    <Corse/>

    </div>
    
    <Footer/>
      
    </>
  )
}

export default Corses
