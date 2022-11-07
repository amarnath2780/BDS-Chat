import React from 'react'
import img from '../images/image.png';
import Attach from '../images/attach.png';


function Input() {
  return (
    <div className='input'>
      <input type="text" name="" id="" placeholder='Type something....' />
      <div className="send">
        <img src={Attach} alt="" />
        <input type="file" style={{display:"none"}} name="" id="file" />
        <label htmlFor="file">
          <img src={img} alt="" />
        </label>
        <button>Send</button>
      </div>
    </div>
  )
}

export default Input
