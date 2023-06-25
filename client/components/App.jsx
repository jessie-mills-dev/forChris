import React from 'react'

import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Primary from './primary_missions'
import Secondary from './secondary_missions'
import Deployment from './deployment_zones'
import Rules from './mission_rules'
import Gambits from './gambits'

function App() {

  return (
    <>
      <div className="app">
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/primary_missions' element={<Primary />} /> 
            <Route exact path='/secondary_missions' element={<Secondary />} />
            <Route exact path= '/deployment_zones' element= {<Deployment />} />
            <Route exact path= '/mission_rules' element= {<Rules />} />
            <Route exact path= '/gambits' element= {<Gambits />} />
          </Routes>
      </div>
    </>
  )
}

export default App
