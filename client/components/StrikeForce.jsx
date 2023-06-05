// import React, { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'

// import { fetchMission } from '../actions'

// function Result() {
//   const mission = useSelector((state) => state.mission)
//   const singleMission = mission.filter((result) => result.battle_size === 'StrikeForce' ? result : null)
//   const dispatch = useDispatch()
//   useEffect(() => {
//     dispatch(fetchMission())
//   }, [])
//   return (
//     <>
//       <div className="results_container">
//         <h1>Results</h1>

//         <div>{singleMission.map((res, i) => (
//             <div key = {i}>
//                 <p>{res.battle_size}</p>
//                 <img src={res.deployment_image} alt="deployment" />
//             </div>
//         ))}</div>
         
//       </div>
      
//     </>
//   )
// }

// export default Result
