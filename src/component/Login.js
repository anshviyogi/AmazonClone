import React, { useState } from 'react'
import {Link,useHistory} from 'react-router-dom'
import './Login.css'
import {auth} from './firebase'

function Login(){
const history = useHistory()
const[email,setEmail] = useState('')
const[password,setPassword] = useState('')

  // Login logic
  const login = (e)=>{
e.preventDefault()

auth.signInWithEmailAndPassword(email,password)
    .then(auth =>{
      // History will push the page to localhost:3000/ if everything goes well
      history.push('/')
    })
    .catch(error => alert(error.message))
  }

  // Register logic
  const register = (e)=>{
    auth.createUserWithEmailAndPassword(email,password)
      .then((auth) =>{
        // successfully created a new user
        console.log(auth)
        if(auth){
          history.push('/')
        }
      })
      .catch(error => alert(error.message))
  }

return(
  <div className='login'>
  <Link to='/'>
  <img className='login__logo' src="http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG" alt=""/>
  </Link>
  <div className='login__container'>
  <h1>Sign In</h1>
    <form>
    
    <h5>Email</h5>
    <input type="text" onChange={e =>setEmail(e.target.value)} value={email}/>

    <h5>Password</h5>
    <input type="password" onChange={e =>setPassword(e.target.value)} value={password}/>

    <button className='login__signInButton' onClick={login}>Sign In</button>
    </form>

    <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
    <button className='login__registerButton' onClick={register}>Create your Amazon Account</button>
  </div>
</div>
)
}
export default Login