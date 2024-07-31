import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

const NavBar = () => {
  return (
    <div> <Navbar bg="dark" data-bs-theme="dark">
    <Container className="navContainer d-flex justify-content-between">
      <Navbar.Brand href="#home">  <img
            src="/logo.png"  
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="Logo"
          /> ASUS</Navbar.Brand>
      <Nav className="ms-auto">
        <Nav.Link style={{color:'white'}}href="#home">Home</Nav.Link>
        <Nav.Link style={{color:'white'}}href="#About">About Us</Nav.Link>
        <Nav.Link style={{color:'red'}} href="#Product">Products</Nav.Link>
        <Nav.Link style={{color:'white'}}href="#Contact">Contact Us</Nav.Link>
      </Nav>
    </Container>
  </Navbar></div>
  )
}

export default NavBar