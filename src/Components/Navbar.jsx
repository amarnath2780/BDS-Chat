import React from 'react'

function Navbar() {
  return (
    <div className='navbar'>
      <span className="logo">BDS Chat</span> 
      <div className="user">
        <img src="https://images.pexels.com/photos/10669816/pexels-photo-10669816.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"  />
        <span>John</span>
        <button>logout</button>
      </div>
       
    </div>
  )
}

export default Navbar
