import React from 'react';
import logo from '../../images/logo.png'
import './Header.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';

const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt="" />

            <Navbar bg="primary" variant="dark">
                <Nav className="mr-auto">
                    <Nav.Link href="/home">Home</Nav.Link>
                    <Nav.Link href="/features">Features</Nav.Link>
                    <Nav.Link href="/pricing">Pricing</Nav.Link>
                </Nav>
            </Navbar>
        </div>
    );
};

export default Header;