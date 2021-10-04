import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark">
    <Container className='py-3'>
    <Navbar.Brand className='text-info fs-2'>Mia Bacchu</Navbar.Brand>
    <Nav className="me-auto">
      <NavLink  className='m-2 text-white text-decoration-none fs-3' to="/home" >Home</NavLink>
      <NavLink  className='m-2 text-white text-decoration-none fs-3' to="/services">Services</NavLink>
      <NavLink  className='m-2 text-white text-decoration-none fs-3' to="/about">About Us</NavLink>
      <NavLink  className='m-2 text-white text-decoration-none fs-3' to="/contact">Contact Us</NavLink>
    </Nav>
    </Container>
  </Navbar>
    );
};

export default Header;