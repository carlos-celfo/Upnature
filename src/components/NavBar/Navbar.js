import React from 'react';
import NavBarStyling from './Navbar.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import Favicon from '../../images/faviconUpnature.png';

const eNavBar = () => {
    return (
            <Navbar className='NavBar' variant="dark" sticky="top" expand="sm" collapseOnSelect>
                <Navbar.Brand className='navbar-logo'> 
                    <img src={Favicon} alt="Brand Favicon"/>
                    <Nav.Link href='#Home' id='navbar-brandname'> Upnature </Nav.Link>
                </Navbar.Brand> 

            
                <Navbar.Toggle />
                <Navbar.Collapse className='justify-content-end'>
                    <Nav className='navbar-dropdown'>
                        <Nav.Link href="#Home">Home</Nav.Link>
                        <NavDropdown title="About" variant="light">
                            <NavDropdown.Item href="#Teampage">Teampage</NavDropdown.Item>
                            <NavDropdown.Item href="#Theproject">The project</NavDropdown.Item>
                        </NavDropdown>
                        <button className='button'href="#startnow">Start now!</button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        
    );
}

export default eNavBar;
