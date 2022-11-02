import React, { useEffect } from 'react'
import './App.css'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Header from './component/Header'
import Home from './component/Home'
import Checkout from './component/Checkout'
import Login from './component/Login'
import { useStateValue } from './component/StateProvider'
import {auth} from './component/firebase'

function App(){
  const [{user},dispatch] = useStateValue()

  useEffect(()=>{
    auth.onAuthStateChanged(authUser =>{
      
      // console.log("user is >>>",authUser)

      if(authUser){
        // user just logged in / the user was logged in

        dispatch({
          type:"SET_USER",
          user: authUser
        })

      }else{
        // user is logged out
        dispatch({
          type:"SET_USER",
          user: null
        })
        
      }
    })
  },[])
  
return(
  <Router>
  <div>
    <Switch>

      <Route path='/checkout'>
        <Header/>
        <Checkout/>
      </Route>
    
      <Route path='/login'>
        <Login/>
      </Route>

      <Route path='/'>
        <Header/>
        <Home/>
      </Route>
      
    </Switch>
  </div>
  </Router>
)
}
export default App