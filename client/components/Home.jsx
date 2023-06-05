import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchMission } from '../actions'

function Home() {
  const mission = useSelector((state) => state.mission)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchMission())
  }, [])

  return (
    <>
      <div className="Home_container">
        <h1>Warhammer Mission generator</h1>

        <a href="/incursion"><button>Incursion</button></a>

        <a href="/strikeforce"><button>Strike Force</button></a>

        <a href="/onslaught"><button>Onslaught</button></a>
         
      </div>
      
    </>
  )
}

export default Home
