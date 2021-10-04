import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand className='text-info'>Mia Bacchu</Navbar.Brand>
    <Nav className="me-auto">
      <NavLink  className='m-2 text-white' to="/home" >Home</NavLink>
      <NavLink  className='m-2 text-white' to="/services">Services</NavLink>
      <NavLink  className='m-2 text-white' to="/about">About Us</NavLink>
      <NavLink  className='m-2 text-white' to="/contact">Contact Us</NavLink>
    </Nav>
    </Container>
  </Navbar>
    );
};

export default Header;