import React from 'react';
import NavBar from './Navbar.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import Favicon from '../../images/faviconUpnature.png';


function eNavBar() {
    return (
        <div className='NavBar'>
            <Navbar variant="dark" sticky="top" expand="sm" collapseOnSelect>
            <Navbar.Brand className='navbar-logo'> 
            <img src={Favicon} alt="Brand Favicon"/>
            Upnature
            </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Nav>
                        <Nav.Link href="#Home">Home</Nav.Link>
                        <NavDropdown title="About">
                            <NavDropdown.Item href="#Teampage">Teampage</NavDropdown.Item>
                            <NavDropdown.Item href="#Theproject">The project</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#startnow">Start now!</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default eNavBar;
