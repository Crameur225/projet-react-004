import React from 'react'
import NavBar from './components/NavBar'
import Header from './components/Header'
import Mains from './components/Mains'
import Footer from './components/Footer'
import Button from './components/Button'

const App = () => {
  return (
    <div className="w-full h-full m-0 p-0 box-border">
      <NavBar/>
      <Header/>
        <div className='w-4/5 max-h-full m-auto '>
            <Mains/>
            <Button/>
        </div>
        <Footer/>
    </div>
  )
}

export default App
