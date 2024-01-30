import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

const NavbarComponent = () => {
  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <Navbar.Brand href="/">Adiwiyata</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <NavItem>
            <Nav.Link href="/">Beranda</Nav.Link>
          </NavItem>
          <NavItem>
            <Nav.Link href="/gallery">Gallery</Nav.Link>
          </NavItem>
          <NavItem>
            <Nav.Link href="/hari-besar">Hari Besar</Nav.Link>
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;