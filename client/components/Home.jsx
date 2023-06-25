import React from 'react'

function Home() {

  return (
    <>
      <div className="Home_container">
        <h1>Warhammer Mission generator</h1>

        <a href="/setup"><button>Generate Mission</button></a>

        <a href="/secondaries"><button>Generate Secondaries</button></a>

        <a href="/gambits"><button>Generate Gambit</button></a>
         
      </div>
      
    </>
  )
}

export default Home
