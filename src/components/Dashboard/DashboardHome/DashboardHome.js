import React from 'react';
import useFirebase from '../../../Hooks/useFirebase/useFirebase';

const DashboardHome = () => {
    const {user}=useFirebase()
    return (
        <div className='m-5'>
            <p className='text-4xl m-5'>Welcome {user.displayName} to your Dashboard!</p>
            <p className='text-3xl'>You Can Explore your data in your dashboard.</p>
        </div>
    );
};

export default DashboardHome;