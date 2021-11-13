import React  from 'react'
import Coder from './coder.png'
import './login.css'
import { NavLink } from 'react-router-dom'
export default class Login extends React.Component {
    state={
        email:'',
        pwd:''
    } 
    handleSubmit=(e)=>{
       e.preventDefault() ;
    }
     handleChange=(e)=>{
       const {name,value} = e.target
       this.setState({[name]:value}) ;
    }
    render(){
    return (
       <div className='box'>
       
            <div className='logo'>
                <img src={Coder} alt="" />
            </div>
            
            <div>
                <form action="" onSubmit={this.handleSubmit}>
                    <input type="email" name='email' placeholder='email...' required onChange/>
                    <input type="password" name='pwd' placeholder='password...' required onChange/>
                    <button onSubmit={this.hadleChange}>Log In</button>
                    <NavLink to="/register" className='newAc'>Create Account</NavLink>
                </form>
            </div>
       
       </div>
    )
    }
}


