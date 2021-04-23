import React from "react";
import { Link, Route, useParams, useRouteMatch } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from "../../assets/images/DDO-logo-w.svg";

const MenuBar = () => {
  const { url, path } = useRouteMatch();

  return (
    <Navbar bg="dark" expand="lg" className="navbar navbar-expand-md navbar-expand-lg fixed-top navbar-dark bg-dark" aria-label="Main navigation"
    style={{'background': 'transparent !important'}}>
      <Navbar.Brand href="/">
        <img src={Logo} alt="" width="100%" className="mb-5" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="hamburger" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link className="right-margin" href="/">Home</Nav.Link>
          <Nav.Link className="right-margin" href="/about">About</Nav.Link>
          <Nav.Link className="right-margin" href="/podcast">Podcast</Nav.Link>
          <Nav.Link className="right-margin" href="/shop">Shop</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MenuBar;
