import React from 'react';
import NavBar from './Navbar.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import Favicon from '../../images/faviconUpnature.png';
import { Link } from 'react-router-dom';

const eNavBar = () => {
    return (
        <Nav className='NavBar'>
            <Navbar  variant="dark" sticky="top" expand="sm" collapseOnSelect>
                <Navbar.Brand className='navbar-logo'> 
                    <img src={Favicon} alt="Brand Favicon"/>

                    <Nav.Link >
                        <Link id='navbar-brandname' to='/'> Upnature </Link>
                    </Nav.Link>
                </Navbar.Brand>
        

                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Nav className='navbar-dropdown'>
                        <Nav.Link>
                            <Link to='/'> Home </Link>
                        </Nav.Link>
                        <NavDropdown title="About">
                            <NavDropdown.Item href="#Teampage">Teampage</NavDropdown.Item>
                            <NavDropdown.Item href="#Theproject">The project</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link>
                        <Link to='/contact'> 
                        Contact
                        </Link>
                        </Nav.Link>
                        <button className='button'> Start now!</button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Nav>
    );
}

export default eNavBar;
