import React from 'react'

import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Incursion from './Incursion'
import StrikeForce from './StrikeForce'
import Onslaught from './Onslaught'

function App() {

  return (
    <>
      <div className="app">
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/incursion' element={<Incursion />} /> 
            <Route exact path='/strikeForce' element={<StrikeForce />} />
            <Route exact path= '/onslaught' element= {<Onslaught />} />
          </Routes>
      </div>
    </>
  )
}

export default App
