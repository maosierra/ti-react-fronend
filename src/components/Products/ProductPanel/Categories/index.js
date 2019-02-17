import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './../../../Global/css/ProductPanel.css';

class Categories extends Component {
    render() {
        return (
            <nav className="navbar navbar-light padding-0">
                <ul className="navbar-nav w-100">
                    <li className="nav-item border-bottom">
                        <Link className="nav-link text-left text-dark ml-3" to="/products">
                            <i className="fas fa-list mr-3"></i>
                            All
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-left text-dark ml-3" to="/products/tech">
                            <i className="fas fa-laptop mr-3"></i>
                            Tech
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-left text-dark ml-3" to="/products/services">
                            <i className="fas fa-wrench mr-3"></i>
                            Services
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-left text-dark ml-3" to="/products/office">
                            <i className="fas fa-folder mr-3"></i>
                            Office
                        </Link>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Categories;