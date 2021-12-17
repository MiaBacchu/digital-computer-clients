import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import useFirebase from '../../Hooks/useFirebase/useFirebase';

const Login = () => {
    const {error,emailLogin,signInWithGoogle,signInWithGithub,signInWithFacebook}=useFirebase()
    const [email,setEmail]=useState()
    const [password,setPassword]=useState()
    const handleEmail=(e)=>{
        setEmail(e.target.value)
    }
    const handlePassword=(e)=>{
        setPassword(e.target.value)
    }
    const handleSubmit=(e)=>{
        emailLogin(email,password)
        e.preventDefault()
    }
    return (
        <div className='text-center my-16'>
            <form onSubmit={handleSubmit} className='text-center'>
      <input onBlur={handleEmail} className='w-96 h-14 border-solid border-2 border-gray-500 rounded-md text-2xl' required placeholder='Enter Your Email' type="email"/>
      <br/>
      <br/>
      <input onBlur={handlePassword} className='w-96 h-14 border-solid border-2 border-gray-500 rounded-md text-2xl' required placeholder='Enter Your Password' type="password"/>
      <br/>
      <br/>
      <input className='w-96 h-14 bg-blue-700 text-white text-3xl focus:ring-2 hover:bg-blue-800 rounded-md text-2xl' type="submit" value='Log In' />
      <br/>
      <br/>
    </form>
    <div className='text-3xl'> new user ? <Link className='text-3xl text-blue-800' to='/register'>please Register</Link></div>
    <br/>
      <br/>
            <button onClick={signInWithGoogle} className='text-2xl text-white p-3 rounded-lg bg-blue-700 focus:ring-2 hover:bg-blue-800'>Google Sign In</button>
            <br/>
            <br/>
            <button disabled onClick={signInWithGithub} className='text-2xl text-white p-3 rounded-lg bg-blue-700 focus:ring-2 hover:bg-blue-800'>Github Login</button>
            <br/>
            <br/>
            <button disabled onClick={signInWithFacebook} className='text-2xl text-white p-3 rounded-lg bg-blue-700 focus:ring-2 hover:bg-blue-800'>Facebook Login</button>
            <br/>
            <h1>{error}</h1>
        </div>
    );
};

export default Login;