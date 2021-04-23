import React from "react";
// import { Link, Route, useParams, useRouteMatch } from "react-router-dom";
// import Container from 'react-bootstrap/Container';
// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Form from 'react-bootstrap/Form';
// import FormControl from 'react-bootstrap/FormControl';
// import Button from 'react-bootstrap/Button';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import Logo from "../../assets/images/DDO-logo-w.svg";

const MenuBarHTML = () => {

  return (
    <nav className="navbar navbar-expand-md navbar-expand-lg fixed-top navbar-dark bg-dark" aria-label="Main navigation"
    style={{'background': 'transparent !important'}}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">Daily Defying Odds</a>
        <button className="navbar-toggler p-0 border-0" type="button" data-bs-toggle="offcanvas" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon hamburger"></span>
        </button>
        <div className="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">HOME</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="./about">ABOUT</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="./shop">SHOP</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="./podcast">PODCAST</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="./contact">CONTACT</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="d-flex flex-row-reverse bd-highlight">
        <img src={Logo} width="150px" style={{marginLeft: '20px'}} alt="Daily Defying Odds" />
      </div>
    </nav>
  );
};

export default MenuBarHTML;
