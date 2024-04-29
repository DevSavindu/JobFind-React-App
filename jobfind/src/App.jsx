// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from './Components/NavBar/Navbar'
import Search from './Components/Search/Search'
import Jobs from './Components/Job/Jobs'
import Value from './Components/Value/Value'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div className='w-[85%] m-auto bg-white'>
      <Navbar/>
      <Search/>
      <Jobs/>
      <Value/>
      <Footer/>
    </div>
  )
}

export default App
