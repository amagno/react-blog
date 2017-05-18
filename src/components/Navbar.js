import React from 'react'
import {Navbar, Nav, Button} from 'react-bootstrap'
import NavLinkRoute from './NavLinkRoute'


const UserNavButtons = () => (
  <Navbar.Form pullRight>
    <Button>Login</Button>
    &nbsp;&nbsp;
    <Button bsStyle="info">Registre-se</Button>
  </Navbar.Form>
)
const UserNavButtonsToggle = ({ show }) => {
  return show ? <UserNavButtons /> : <div />
}

const NavbarComponent = ({ ...props }) => (
  <Navbar fluid className={props.className} fixedTop>
    <Navbar.Header>
      <Navbar.Brand>
      </Navbar.Brand>
      <Navbar.Toggle/>
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavLinkRoute path="/" icon="home">{!props.affix ? ' Home' : false}</NavLinkRoute>
        <NavLinkRoute path="/posts" icon="bookmark">{!props.affix ? ' Posts' : false}</NavLinkRoute>
        <NavLinkRoute path="/palestra" icon="clone">{!props.affix ? ' Palestra' : false}</NavLinkRoute>
        <NavLinkRoute path="/about" icon="question-circle">{!props.affix ? ' Sobre' : false}</NavLinkRoute>
      </Nav>
      <UserNavButtonsToggle show={false} />
    </Navbar.Collapse>
  </Navbar>
)



export default NavbarComponent