import React from 'react';
import { Navbar, Nav } from "react-bootstrap";
import logo from "../logo.svg";

const NavBar = () => (
        <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">
              <img
                alt="logo"
                src={logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
                />{' '}
              Weather
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#"></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
);

export default NavBar;
