import React from 'react';
import { useRef } from 'react';

const MakeAdmin = () => {
    const emailRef=useRef()
    const handleAdmin=()=>{
        const email=emailRef.current.value
        const user={email}
        fetch('http://localhost:5000/user/admin',{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data=>{
            if (data.matchedCount===1) {
                alert('congrats! admin added successfully!')
            }
            else{
                alert('user not exists, admin not added!')
            }
        })

    }
    return (
        <div className='m-9'>
            <input ref={emailRef} className='w-72 h-14' type="email" placeholder='enter email' />
            <button onClick={handleAdmin} className="text-white text-xl rounded-2xl bg-blue-600 p-3 m-5 hover:bg-blue-700">Make Admin</button>
        </div>
    );
};

export default MakeAdmin;