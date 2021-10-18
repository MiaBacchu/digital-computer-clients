import React from 'react';

const Schedule = () => {
    return (
        <div className='d-sm-flex align-items-center bg-primary text-white'>
            <div className='w-50'>
                <h1 className='App mb-3 text-dark'>WORKING HOURS</h1>
                <h4 className='App mb-3'>We are Ready to Provide service in Working Hour</h4>
                <div  className="d-flex justify-content-around">
                <div>
                    <p>Monday - Thursday:</p>
                    <p>Friday:</p>
                    <p>Saturday:</p>
                    <p>Sunday:</p>
                    </div>
                <div>
                    <p>10:00 am - 2:00 pm</p>
                    <p>12:00 am - 3:00 pm</p>
                    <p>13:00 am - 3:00 pm</p>
                    <p>10:00 am - 2:00 pm</p>
                </div>
                </div>
            </div>
            <div className='w-50'><img className='w-100' src="https://d3n8a8pro7vhmx.cloudfront.net/lifeandhope/pages/274/attachments/original/1470420181/Engaging-Physicians.jpg?1470420181" alt="" /></div>
        </div>
    );
};

export default Schedule;