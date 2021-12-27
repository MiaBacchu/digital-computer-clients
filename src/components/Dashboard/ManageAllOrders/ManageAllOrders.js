import React, { useEffect } from 'react';
import { useState } from 'react';
const ManageAllOrders = () => {
    const [orders,setOrders]=useState([])
    useEffect(()=>{
        fetch('https://still-ravine-45870.herokuapp.com/order')
        .then(res=>res.json())
        .then(data=>setOrders(data))
    },[])

    const handleUpdate=(id)=>{
        fetch(`https://still-ravine-45870.herokuapp.com/order/${id}`,{
            method:'PUT'
        })
        .then(res=>res.json())
        .then(data=>{
            if (data.modifiedCount) {
                window.location.reload()
            }
        })
    }
    const handleDelete=(id)=>{
        if (window.confirm('are you sure?')) {
            fetch(`https://still-ravine-45870.herokuapp.com/order/${id}`, {
            method: 'DELETE',
            })
        .then(res =>res.json())
        .then(data =>{
            if (data.deletedCount===1) {
                const remainingorders=orders.filter(order=>order._id!==id)
                setOrders(remainingorders)
            }
        })
        }
    }
    return (
        <div>
            <table className='w-full my-8'>
            <tr className='bg-yellow-600'>
                    <th>Serial No.</th>
                    <th>User Name</th>
                    <th>email</th>
                    <th>order Name</th>
                    <th>order Price</th>
                    <th>order Status</th>
                    <th>Update</th>
                    <th>Delete</th>
                </tr>
            {orders.map((order,index)=>
                <tr key={order._id}>
                    <td>{index+1}</td>
                    <td>{order.userName}</td>
                    <td>{order.userEmail}</td>
                    <td>{order.orderName}</td>
                    <td>{order.orderPrice}</td>
                    <td>{order.status}</td>
                    <td><button onClick={()=>handleUpdate(order._id)} className='bg-green-600 hover:bg-green-700 rounded-lg p-1 text-white'>{order.status==='pending' ? 'Approve' : 'Approved' }</button></td>
                    <td><button onClick={()=>handleDelete(order._id)} className='bg-red-600 hover:bg-red-700 rounded-lg p-1 text-white'>Delete</button></td>
                </tr>
            )}
            </table>
        </div>
    );
};

export default ManageAllOrders;