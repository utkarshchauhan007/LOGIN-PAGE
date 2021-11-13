import React from 'react'
import {Route} from 'react-router'
import Login from './compnents/login.jsx'
import Hello from './compnents/hello.jsx'
import { Routes } from 'react-router';
import Register from './compnents/register'
import {BrowserRouter as Router} from "react-router-dom";
function App() {
  return (
    
    <>
     
      <Router>
       <Routes>
       <Route exact path='/' element={<Login/>}></Route>
       <Route exact path='/register' element={<Register/>}/>
       </Routes>
      
      </Router>
    </>
    //  </Router>
  )
}

export default App
