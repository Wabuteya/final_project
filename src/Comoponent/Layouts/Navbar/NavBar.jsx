import React from "react";
import './NavBar.styles.css'
import { Link } from "react-router-dom";

const NavBar = ({darktheme})  => {
    return (
        <section className={`NavBar-container ${darktheme ? 'background-dark relative' : 'background-transparent'}`}>
             <div className="container flex justify-between align-center">
                <a href="#" className="logo">The <span className="text-primary">EastAfrican</span> literature</a>

                <nav className="nav-links-container">
                    <Link to='/' className="nav-links">Home</Link>
                    <Link to="/books" className="nav-links">Books</Link>
                    <Link to="/login" className="nav-links">Login</Link>
                    <Link to="signup" className="nav-links">Sign up </Link>
                </nav>
             </div>
        </section>
    );
  }
  
  export default NavBar;