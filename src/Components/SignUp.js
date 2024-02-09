import React, { useState } from 'react'
import './Signup.css'
import cartoonImg from '../Assets/cartoon.png'
import msgImg from '../Assets/msg.png'
import lockImg from '../Assets/lock.png'
import { Link } from 'react-router-dom/dist/umd/react-router-dom.development'
import axios from 'axios'
function SignUp() {

const[email, setEmail]=useState();
const[password, setPassword]=useState();
const[confirmPassword, setConfirmPassword]=useState();

const handleSubmit=(e)=>{
     e.preventDefault();
     axios.post('mongodb+srv://ajay82:Ajay11@cluster0.ps7boem.mongodb.net/?retryWrites=true&w=majority', {email, password, confirmPassword})
     .then(result=>console.log(result))
     .catch(err=>console.log(err))
}
  return (
    <div className="signup">
      
      
      {/* right side */}

      <div className="right-container">
        <div className="signup-text">Please SignUp </div>
          <img src={cartoonImg} className="signup-cartoon" alt="img" />
       
       <form className="signup-form" onSubmit={handleSubmit}>
      
       <input type="text"  className='signup-email' value={email} placeholder='Email' onChange={(e)=> setEmail(e.target.value)} />
       <img src={msgImg} className='signup-msg-icon' alt='msg'/>

       <input type="text"  className='signup-password' value={password} placeholder='Password' onChange={(e)=> setPassword(e.target.value)} />
       <img src={lockImg} className='signup-lock-icon' alt='msg'/>

       <input type="text"  className='signup-password' value={confirmPassword} placeholder='Confirm-Password' onChange={(e)=> setConfirmPassword(e.target.value)} />
       <img src={lockImg} className='signup-lock-icon' alt='msg'/>

       <button className="signup-button" type='submit'>
           Sign-Up
               </button>
               <Link to='/' style={{textDecoration:'none'}}>
               <div  className="signup-create-account" > Already have an Account ?</div>
               </Link>

       </form>
      </div>

      </div>
  )
}

export default SignUp