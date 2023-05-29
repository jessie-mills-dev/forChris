import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchFruits } from '../actions'

function App() {
  const fruits = useSelector((state) => state.fruits)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchFruits())
  }, [])

  return (
    <>
      <div className="app">
        <h1>Warhammer Mission generator</h1>

        {/* // 4 different battle sizes to choose from eg small medium large xl
        // Each has 6 missions
        // Select a size, and it'll auto generate a missions
        // It will need to display the deployment zone (image) and mission rules 
        Table mission {
          id increment
          points integer
          mission_number integer
          deployment_image text
          mission_rules text
        }
        */}
        <ul>
          {fruits.map((fruit) => (
            <li key={fruit}>{fruit}</li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App
