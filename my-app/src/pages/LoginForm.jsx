import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';

function LoginForm() {
    const[email,setemail]=useState('');
    const[password,setpassword]=useState('')
    const navigate=useNavigate();
    function handlesubmit(e){
        e.preventDefault()
        axios.post('http://localhost:3001/Login',{email,password})
        .then(result=>{console.log(result)
          if(result.data=='success'){
            navigate('/home')
          }
       
        })
        .catch(err=>console.log(err))

    }
    
  return (
    <div>
        <h2>
            <form onSubmit={(e)=>handlesubmit(e)} >
      
        <label>Enter your Email:</label>
        <input type='email' placeholder='your email'  style={{fontSize:'30px'}} onChange={(e)=>setemail(e.target.value)}></input>
        <br></br>
        <label>Enter your Password:</label>
        <input type='password' placeholder='your Password'  style={{fontSize:'30px'}} onChange={(e)=>setpassword(e.target.value)}></input>
        <br></br>
        <button>Login</button>
        </form>
        </h2>
     
    </div>
  )
}

export default LoginForm;