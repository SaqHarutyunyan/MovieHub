import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="header">
            <div className="container">
                <h1 className="logo">
                    <Link to="/">MovieHub</Link>
                </h1>
                <nav>
                    <ul className="nav-links">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
