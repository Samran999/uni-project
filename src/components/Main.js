import React , {useState} from 'react'
import img from './logo.svg'
import Signin from './Signin'
import Register from './Register'


export default function MainBox() {
    const [signin, setSignin] = useState(true)
    // const [register, setRegister] = useState(false)
    
    return (
    <div className='Main'>
        <img src={img}/>
        <div className='Wrapper'>
            <div className='WrapperSwitch'>
                <h6>Authentication</h6>
                <div className='SwitchCase'>
                <button className='Switch' onClick={() => setSignin(true)}>Sign In</button>
                <button className='Switch' onClick={() => setSignin(!signin)}>Register</button>
                </div>
            </div>
            {signin ? <Signin/> : <Register/>}
            
            
        </div>
    </div>
  )
}
