import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <Navbar bg="NavbarColor" variant="dark"
        sticky="top" expand="sm" collapseOnSelect>
        <Navbar.Brand>
          Upnature
        </Navbar.Brand>

        <Navbar.Toggle className="coloring" />
        <Navbar.Collapse>
          <Nav>
            <Nav.Link href="#Home">Home</Nav.Link>
            <NavDropdown title="AboutUs">
              <NavDropdown.Item href="#TheProject">The project</NavDropdown.Item>
              <NavDropdown.Item href="#Team">Team</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#contactus">Contact Us</Nav.Link>
            <Nav.link href="#actnow">Start now!</Nav.link>
          </Nav>
        </Navbar.Collapse>

      </Navbar>
      <div className="content">
        Here comes the content
      </div>
    </div>
  );
}

export default App;