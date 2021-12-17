import React, { useState, useEffect } from 'react';

const ManageProduct = () => {
    const [products,setProducts]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/bike')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])

    const handleDeleteBike=(id)=>{
        if (window.confirm('are you sure?')) {
            fetch(`http://localhost:5000/bike/${id}`,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            if (data.deletedCount===1) {
                const remainingBike=products.filter(product=>product._id!==id)
                setProducts(remainingBike)
            }
        })
        }
    }
    return (
        <div>
            <table className='w-full my-8'>
            <tr className='bg-yellow-600'>
                    <th>Serial No.</th>
                    <th>Product Name</th>
                    <th>Image</th>
                    <th>Price</th>
                    <th>Button</th>
                </tr>
            {products.map((product,index)=>
                <tr key={product._id}>
                    <td>{index+1}</td>
                    <td>{product.name}</td>
                    <td><img className='w-9 mx-auto' src={product.img} alt="" /></td>
                    <td>{product.price}</td>
                    <td><button onClick={()=>handleDeleteBike(product._id)} className='bg-blue-600 hover:bg-blue-700 rounded-lg p-1 text-white'>Delete</button></td>
                </tr>
            )}
            </table>
        </div>
    );
};

export default ManageProduct;