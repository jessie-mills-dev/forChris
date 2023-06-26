import React from 'react'

import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Results from './Results'

function App() {

  return (
    <>
      <div className="app">
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/setup' element={<Results />} /> 
         
          </Routes>
      </div>
    </>
  )
}

export default App
