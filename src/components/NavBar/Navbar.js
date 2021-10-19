import React from 'react';
import NavBar from './Navbar.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';


function eNavBar() {
    return (
        <div className="NavBar">
            <Navbar variant="light" sticky="top" expand="sm" collapseOnSelect>
            <Navbar.Brand>
            <img src={''} alt="Favicon Logo Tree" width="40px" height="40px" />{' '}
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
                        <Nav.Link href="#contact-us">Contact Us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default eNavBar;
