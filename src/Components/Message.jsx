import React from 'react'

function Message() {
  return (
    <div className='message'>
      <div className="messageInfo">
        <img src="https://images.pexels.com/photos/13377187/pexels-photo-13377187.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt="" />
        <span>just Now</span>
      </div>
      <div className="messageContent">
          <p>Hello</p>
          <img src="https://images.pexels.com/photos/13377187/pexels-photo-13377187.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt="" />
      </div>
    </div>
  )
}

export default Message
