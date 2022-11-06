import React from 'react'
import image from '../images/image.png'

function Signup() {
  return (
    <div className='form-container'>
      <div className="form-wrapper">

            <span className='logo'>BDS Chat</span>
            <span className='title'>Register</span>


        <form action="">
            <input type="text" name="" id="" placeholder='Display name'/>
            <input type="email" placeholder='email'/>
            <input type="password" name="" id="" placeholder='Password'/>
            <input style={{display:"none"}} type="file" name="" id="file" />
            <label htmlFor="file">
                <img src={image} alt="" />
                <span>Add an avathar</span>
            </label>

            <button type='submit' className='btn-outline-primary'>Sign up</button>

            <p>You do have an account ? Login</p>
        </form>
      </div>
    </div>
  )
}

export default Signup
