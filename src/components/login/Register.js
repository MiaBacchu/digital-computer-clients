import React,{ useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../Hooks/Context/useAuth';

const Register = () => {
    const navigate=useNavigate()
    const location=useLocation()
    const {error,emailRegister}=useAuth()
    const [loginData,setLogindata]=useState({})
    
    const handleChange=(e)=>{
        const field=e.target.name
        const value=e.target.value
        const newLoginData={...loginData}
        newLoginData[field]=value
        setLogindata(newLoginData)
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        if (loginData.password!==loginData.password2) {
            alert("password did't match")
            return
        }
        emailRegister(loginData.email,loginData.password,loginData.name,navigate,location)
    }
    return (
        <div className='text-center my-16'>
           <form onSubmit={handleSubmit} className='text-center'>
      <input 
       onBlur={handleChange} name='name' className='w-96 h-14 border-solid border-2 border-gray-500 rounded-md text-2xl' required placeholder='Enter Your Name' type="name"/>
      <br/>
      <br/>
      <input onBlur={handleChange} name='email' className='w-96 h-14 border-solid border-2 border-gray-500 rounded-md text-2xl' required placeholder='Enter Your Email' type="email"/>
      <br/>
      <br/>
      <input onBlur={handleChange} name='password' className='w-96 h-14 border-solid border-2 border-gray-500 rounded-md text-2xl' required placeholder='Enter Your Password' type="password"/>
      <br/>
      <br/>
      <input onBlur={handleChange} name="password2" className='w-96 h-14 border-solid border-2 border-gray-500 rounded-md text-2xl' required placeholder='Re-type Your Password' type="password"/>
      <br/>
      <br/>
      <input className='w-96 h-14 bg-blue-700 text-white text-3xl focus:ring-2 hover:bg-blue-800 rounded-md text-2xl' 
      type='submit' value='Register'/>
      <br/>
      <br/>
    </form>
    <div className='text-3xl'> Already Registered ? <Link className='text-3xl text-blue-800' to='/login'>please Login</Link></div>
    <br/>
      <br/>
      {error}
        </div>
    );
};

export default Register;