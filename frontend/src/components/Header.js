import React from "react";
import {Nav,Navbar, Container } from "react-bootstrap";
//import { ReactComponent as ShopaySvg } from '../assets/shopy.svg'; 

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
        <Container>
        {/*<Navbar.Brand href="/"><ShopaySvg/></Navbar.Brand>*/}   
        <Navbar.Brand href="/">Shopay</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto py-auto">
              <Nav.Link href="/cart"><i className="fas fa-shopping-cart"></i>Cart</Nav.Link>
              <Nav.Link href="/login"><i className="fas fa-user"></i>Sign in</Nav.Link>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
