import React from 'react'

export default function Register(props) {

  return (
    <div>
        <div>
            <h1>Register</h1>
        </div>
        <form>
            <div className='Block'>
                <label for= "name">Name</label><br/>
                <input type="text" name="name" placeholder='Enter your name' autoComplete='off'/>
            </div>
            <div className='Block'>
                <label for= "email">Email Address</label><br/>
                <input type="email" name="email" placeholder='Enter your email address' autoComplete='off'/>
            </div>
            <div className='Block'>
                <label for= "Username">Username</label><br/>
                <input type="text" name="username" placeholder='only alphanumeric allowed [a-z, A-Z, 0-9]' autoComplete='off'/>
                <p className='Description'>Once set, username cannot be changed</p> 
            </div>
            <div className='Block'>
                <label for= "password">Password</label><br/>
                <input type="password" name="password" placeholder='Enter your password'/>
            </div>
            <p className='Description Center'>By clicking register you are agreeing to all the user terms and service!</p>
            <button type="submit" className='Register'>Register</button>
        </form>
    </div>
  )
}
