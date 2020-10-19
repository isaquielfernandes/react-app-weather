import React from 'react';
import { Navbar, Nav } from "react-bootstrap";

const NavBar = () => (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">Weather</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#features">Custon api</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
);

export default NavBar;