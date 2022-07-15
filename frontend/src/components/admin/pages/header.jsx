import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>ShoPay</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
              <LinkContainer to='/Admin/analysis'>
                <Nav.Link>
                <i class="fas fa-chart-bar"></i> Analysising
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to='/Admin/report'>
                <Nav.Link>
                  <i className='fas fa-calendar-day'></i> Quartly Report
                </Nav.Link>
              </LinkContainer>
             
              <LinkContainer to='/Admin/customer'>
                <Nav.Link>
                  <i className='fas fa-users'></i> Customer Detail
                </Nav.Link>
              </LinkContainer>

              <LinkContainer to="/logout">
                <Nav.Link>
                  <i className="fas fa-user"></i> Sign Out
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
