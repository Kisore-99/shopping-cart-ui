import React from 'react'
import {Link} from 'react-router-dom';

import './Navbar.css';


export default function Navbar() {
    return (
        <div>
            <header className="header">
            <Link to="/" className="logo">ShopIt</Link>
                    <ul className="main-nav">
                        
                        <Link to="/product" className="list-item">Product</Link>
                        <Link to="/login" className="list-item">Login</Link>
                        <Link to="/cart" className="list-item">Cart</Link>
                    </ul>
            </header>
        </div>
    )
}
