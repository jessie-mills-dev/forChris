import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchIncursion } from '../actions'

function Incursion() {
  const incursion = useSelector((state) => state.incursion)
//   const singleMission = mission.filter((result) => result.battle_size === 'Incursion' ? result : null)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchIncursion())
  }, [])

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  
  console.log(getRandomInt(5));
  // Expected output: 0-5

  console.log(incursion)
  return (
    <>
      <div className="results_container">
        <h1>Results</h1>

        <div>{incursion.map((res, i) => (
            <div key = {i}>
                <p>{res.battle_size}</p>
                <img src={res.deployment_image}  alt="deployment"/>
            </div>
        ))}</div>
         
      </div>
      
    </>
  )
}

export default Incursion
