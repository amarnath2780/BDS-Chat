import React from 'react'
import Sidebar from '../Components/Sidebar'
import Chat from '../Components/Chat'

function Home() {
  return (
    <div className='home'>
      <div className="container">
        <Sidebar/>
        <Chat/>
      </div>
    </div>
  )
}

export default Home
