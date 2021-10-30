import React from 'react';
import NavBar from './Navbar.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Nav, Navbar, NavDropdown, Container, Button, Form } from 'react-bootstrap';
import Favicon from '../../images/faviconUpnature.png';
import { Link } from 'react-router-dom';

const eNavBar = () => {
    return (
        <Navbar className='Navbar' variant="dark" expand="lg" sticky="top" >
            <Container>
               
                    <Navbar.Brand>
                    <Link className= 'navbar-brand' id='navbar-brandname' to='/'  >
                    <img alt="" src={Favicon} width="45" height="45" className="d-inline-block align-top"/>{' '}                             
                     Upnature 
                </Link>
                </Navbar.Brand>
                
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between" align="center">
                <Nav className="me-auto">
                    <Link to='/' className="nav-link">Home</Link>
                    
                    <NavDropdown title="About" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#Project">About the project</NavDropdown.Item>
                        <NavDropdown.Item href="#Team">About the team</NavDropdown.Item>
                        <NavDropdown.Item href="#Impressum">Impressum</NavDropdown.Item>
                    </NavDropdown>
                    <Link to='/contact' className="nav-link">Contact </Link>
                    <Link to='/form'> 

                        <Button variant="outline-success" className='button'>Start now!</Button>
                        </Link>
                    
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default eNavBar;

{/*<Navbar bg="light" expand="lg">
        <Container>
            <Navbar  variant="dark" sticky="top" expand="sm" collapseOnSelect>
                <Navbar.Brand className='navbar-logo'> 
                    <img src={Favicon} alt="Brand Favicon"/>

                    
                        <Link id='navbar-brandname' to='/'> Upnature </Link>
                    
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
                        <Link to='/form'>
                        <button className='button'> Start now!</button>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        );*/}
