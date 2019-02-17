// Dependencies
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Assets
import './../css/Header.css'

class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-light" style={{backgroundColor: "#bdc3c7"}}>
                <button className="navbar-toggler mr-2" type="button" data-toggle="collapse" data-target="#navbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <span className="navbar-brand d-flex flex-fill">TI React Test</span>
                <div className="navbar-collapse collapse" id="navbar">
                    <ul className="navbar-nav justify-content-center d-flex flex-fill">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">HOME</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/products">PRODUCTS</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/clients">CLIENTS</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">CONTACTS</Link>
                        </li>
                    </ul>
                </div>
                <div className="d-flex flex-fill"> </div>
            </nav>
        );
    }
}

export default Header;