import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const Header = () => {
  const {user,logout}=useAuth()
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
    <Container>
    <Navbar.Brand>Mia Bacchu General Hospital</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link as={Link} to="/home">Home</Nav.Link>
      <Nav.Link as={Link} to="/about">About Us</Nav.Link>
      <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
      <Nav.Link className='text-white' disabled>{user.email}</Nav.Link>
      <Nav.Link onClick={logout} as={Link} to="/login">{user.email ? 'Logout':'Login'}</Nav.Link>
    </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
    );
};

export default Header;