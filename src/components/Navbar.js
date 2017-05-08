import React from 'react'
import {Navbar, Nav, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import NavLinkRoute from './NavLinkRoute'

const NavbarComponent = () => (
  <Navbar collapseOnSelect fixedTop>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to="/">Alexandre Magno</Link>
      </Navbar.Brand>
      <Navbar.Toggle/>
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavLinkRoute path="/" icon="home">Home</NavLinkRoute>
        <NavLinkRoute path="/posts" icon="bookmark">Posts</NavLinkRoute>
        <NavLinkRoute path="/palestra" icon="clone">Palestra</NavLinkRoute>
        <NavLinkRoute path="/about" icon="question-circle">Sobre</NavLinkRoute>
      </Nav>
      <Navbar.Form pullRight>
        <Button>Login</Button>
        &nbsp;&nbsp;
        <Button bsStyle="info">Registre-se</Button>
      </Navbar.Form>
    </Navbar.Collapse>
  </Navbar>
)

export default NavbarComponent