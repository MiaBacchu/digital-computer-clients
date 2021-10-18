import React from 'react';

const Footer = () => {
    return (
        <div className="d-flex bg-dark text-white justify-content-around py-5">
            <div>
                <h5 className='mb-5 text-primary'>WHO WE ARE</h5>
                <p>About us</p>
                <p>Clinics & Hospitals</p>
                <p>Awards & Achievements</p>
                <p>News & Media</p>
            </div>
            <div>
                <h5 className='mb-5 text-primary'>MEDICAL SERVICES</h5>
                <p>Cancer Care</p>
                <p>Heart Care</p>
                <p>Women's Health</p>
                <p>Emergency Services</p></div>
            <div>
                <h5 className='mb-5 text-primary'>PATIENTS & VISITORS</h5>
                <p>Advance Care Planning</p>
                <p>Billing and Insurance</p>
                <p>Pharmacy</p>
                <p>Patient Education</p></div>
        </div>
    );
};

export default Footer;