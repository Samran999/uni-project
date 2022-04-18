import React from 'react'

export default function Signin(props) {
  return (
    <div>
        <div>
            <h1>Sign In</h1>
        </div>
        <form>
            <div className='Block'>
                <label for= "name">Email/UserName</label><br/>
                <input type="text" name="name/email"  autoComplete='off'/>
            </div>
            <div className='Block'>
                <label for= "password">Password</label><br/>
                <input type="password" name="password"/>
            </div>
            <p className='Description'>Forgot your Password</p>
            <button type="submit" className='Register'>Sign In</button>
        </form>
    </div>
  )
}
