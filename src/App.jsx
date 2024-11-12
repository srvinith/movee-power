import React, { useEffect } from 'react'
import Home from './Home'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Route, Routes } from 'react-router-dom';
import Science from './science';
import Blog2 from './Blog2';
import Blog3 from './Blog3';

const App = () => {

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    }, [])
  })
  return (
    <div className='app'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/science" element={<Science />} />
        <Route path="/nature" element={<Blog2 />} />
        <Route path="/ieee" element={<Blog3 />} />
      </Routes>

    </div>
  )
}

export default App