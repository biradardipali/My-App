import React from 'react';
// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Form from 'react-bootstrap/Form';
// import FormControl from 'react-bootstrap/FormControl';
// import Button from 'react-bootstrap/Button';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

export default class NavigationBar extends React.Component {


  render() {
    return (
      <div >
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">

            </Nav>
            <Nav>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/">Home</Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}