import React, { Component } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav, Container } from "react-bootstrap";

class AdminNavbar extends Component {
  state = {};
  render() {
    return (
      <header>
        <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
          <Container>
            <Navbar.Brand>ShoPay</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <LinkContainer to="/admin/dashboard">
                  <Nav.Link>Dashboard</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/admin/addcategory">
                  <Nav.Link>
                    <i class="fas fa-plus"></i> Add Category
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to="/admin/viewcategory">
                  <Nav.Link>
                    <i class="fas fa-table"></i> View Category
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to="/admin/addproduct">
                  <Nav.Link>
                    <i class="fas fa-plus"></i>Add Product
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to="/admin/viewproduct">
                  <Nav.Link>
                    <i class="fas fa-table"></i> View Product
                  </Nav.Link>
                </LinkContainer>
                
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    );
  }
}

export default AdminNavbar;
