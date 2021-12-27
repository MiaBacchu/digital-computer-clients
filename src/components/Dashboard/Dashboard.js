import React from 'react';
import { AiFillHome, AiOutlineLogout } from "react-icons/ai";
import { FaFirstOrder } from "react-icons/fa";
import {MdPayment, MdReviews } from "react-icons/md";
import {GiHomeGarage } from "react-icons/gi";
import {Link, Outlet} from "react-router-dom";
import useAuth from '../../Hooks/Context/useAuth';

const Dashboard = () => {
    const {user,admin,Logout}=useAuth()
    return (
        <div className='grid grid-cols-12'>
            <div className='col-span-3 mx-auto text-2xl'>
                <Link to="home" className='flex items-center my-5 hover:bg-gray-700 hover:text-white'><GiHomeGarage className='mr-2'/>Dashboard Home</Link>
                {!admin && <div>
                <Link to="myorder" className='flex items-center my-5 hover:bg-gray-700 hover:text-white'><FaFirstOrder className='mr-2'/>My Order</Link>
                <Link to="payment" className='flex items-center my-5 hover:bg-gray-700 hover:text-white'><MdPayment className='mr-2'/>Payment</Link>
                <Link to="review" className='flex items-center my-5 hover:bg-gray-700 hover:text-white'><MdReviews className='mr-2'/>Review</Link></div>}
                {admin && <div>
                    <Link to='manageallorders' className='flex items-center my-5 hover:bg-gray-700 hover:text-white'>Manage All Orders</Link>
                <Link to='addproduct' className='flex items-center my-5 hover:bg-gray-700 hover:text-white'>Add A Product</Link>
                <Link to='makeadmin' className='flex items-center my-5 hover:bg-gray-700 hover:text-white'>Make Admin</Link>
                <Link to='manageproduct' className='flex items-center my-5 hover:bg-gray-700 hover:text-white'>Manage Products</Link>
                    </div>}
                <Link to="/home" className='flex items-center my-5 hover:bg-gray-700 hover:text-white'><AiFillHome className='mr-2'/>Back to Home</Link>
                <Link onClick={Logout} to='/login' className='flex items-center my-5 hover:bg-gray-700 hover:text-white'><AiOutlineLogout className='mr-2'/>Log Out</Link>
            </div>
            <div className='bg-blue-100 col-span-9 text-center'>
                <div className='flex justify-between items-end text-4xl font-medium py-3 px-9 bg-blue-700 text-white'>
                    <p>Dashboard</p>
                    <div className='flex gap-2 items-end'>
                    <p style={user.photoURL ? {display:'block'} : {display:'none'}} className='w-8 h-8'><img className='w-full h-full rounded-lg' src={user.photoURL} alt="..."/></p>
                    <p className='min-w-56'>{user.displayName}</p>
                    </div> 
                  </div>
                <Outlet></Outlet>
                </div>
        </div>
    );
};

export default Dashboard;