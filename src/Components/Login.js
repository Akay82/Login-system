import React, { useState } from 'react'
import msgImg from '../Assets/msg.png'
import lockImg from '../Assets/lock.png'
import leftImg from '../Assets/left-image.png'
import './Login.css'
import { Link } from 'react-router-dom/dist/umd/react-router-dom.development'
function Login() {
  const [email, setEmail]=useState();
  const[password, setPassword]=useState();
  return (
    <div className="login">
        <div className="login-container">

            {/*left image */}
            <div className="login-left-img">
             <img src={leftImg} alt='img' />
            </div>

           {/* right side */}
            <div className="login-right-side">
                <div className="login-text">Please Login</div>

                <form className='login-form'>
                   
                <input type="text"  className='login-email' value={email} placeholder='Email' />
              
                <img src={msgImg} className='msg-icon' alt='msg'/>
                
                    
               <input type="text" className='login-password' value={password} placeholder='Password' />
               <img src={lockImg} className='lock-icon' alt='lock' />
               <button className="login-button">
           Login
               </button>
               <Link to='/signup' style={{textDecoration:'none'}}>
               <div  className="create-account" > Create an account ?</div>
               </Link>
            </form>
            </div>
             
        </div>

    </div>
  )
}

export default Login