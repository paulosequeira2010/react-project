import React from "react";
import "../App.css";
import { Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from 'react-router-dom';


export default function App() {
    return (
        <Navbar collapseOnSelect expand="xxl" bg="dark" variant="dark" sticky="top" className="navbar-boostrap">
            <div className="bootstrap-menu-header">
                <NavLink activeClassName='active' className="link2" to="/" >
                    <Navbar.Brand href="#home">
                        <img src="../../Media/guilimaShopLogoWhiteSm.png" />
                    </Navbar.Brand>
                </NavLink>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            </div>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <NavLink activeClassName='active' className="link2" to="/skateboards" >
                        <Nav.Link href="#features" className="link-bootstrap">Skateboards</Nav.Link>
                    </NavLink>
                    <NavLink activeClassName='active' className="link2" to="/bmx">
                        <Nav.Link href="#features" className="link-bootstrap">BMX</Nav.Link>
                    </NavLink>
                    <NavLink activeClassName='active' className="link2" to="/trucks">
                        <Nav.Link href="#features" className="link-bootstrap">Trucks</Nav.Link>
                    </NavLink>

                    <NavLink activeClassName='active' className="link2" to="/shoes">
                        <Nav.Link href="#features" className="link-bootstrap">Shoes</Nav.Link>
                    </NavLink>
                    <NavLink activeClassName='active' className="link2" to="/products">
                        <Nav.Link href="#features" className="link-bootstrap">Marketplace</Nav.Link>
                    </NavLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}


{/* <NavLink activeClassName='active' className="link2" to="/skateboards" >Skateboards</NavLink> */ }