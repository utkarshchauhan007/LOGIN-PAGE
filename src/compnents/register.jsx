import React  from 'react'
import Coder from './coder.png'
import './login.css'
import { NavLink } from 'react-router-dom'
export default class Login extends React.Component {
    state={
        name:'',
        username:'',
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
       
            
            
            <div>
                <form action="" onSubmit={this.handleSubmit}>
                <input type="name" name='name' placeholder='Username...' required onChange/>
                <input type="username" name='username' placeholder='Handle...' required onChange/>
                    <input type="email" name='email' placeholder='Email...' required onChange/>
                    <input type="password" name='pwd' placeholder='Password...' required onChange/>
                    
                    
                    <button onSubmit={this.hadleChange}>Signup</button>
                    <NavLink to="/" className='newAc2'>Already have account</NavLink>
                </form>
            </div>
       
       </div>
    )
    }
}


