import React from 'react'
import {NavItem} from 'react-bootstrap'
import {withRouter} from 'react-router'

const handleLink = (path ,history) => {
    history.push(path)
} 
const isActive = (path, location) => {
    return path === location ? true : false
}
const NavLinkIcon = ({ name }) => (
    <i className={'fa fa-' + name}></i>
)
const NavLinkGenerator = ({ ...props }) => (
    <NavItem onClick={() => handleLink(props.path, props.history)} active={isActive(props.path, props.location.pathname)}>
    <NavLinkIcon name={props.icon} />&nbsp;{ props.children }
    </NavItem>
)

const NavLinkRoute = withRouter(NavLinkGenerator)

export default NavLinkRoute