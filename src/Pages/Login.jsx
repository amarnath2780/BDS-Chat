import React from 'react'

function Login() {
  return (
    <div className='form-container'>
      <div className="form-wrapper">

            <span className='logo'>BDS Chat</span>
            <span className='title'>Register</span>


        <form action="">
            <input type="email" placeholder='email'/>
            <input type="password" name="" id="" placeholder='Password'/>
            

            <button type='submit' className='btn-outline-primary'>Sign up</button>

            <p>You don't have an account ? Sign Up</p>
        </form>
      </div>
    </div>
  )
}

export default Login
