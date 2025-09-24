import React from "react";
import {Link} from "react-router-dom";
import {useState} from "react";
import "./stlyes/Navbar.css";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <nav className={`navbar ${isMenuOpen ? "active" : ""}` }>
            <div className="navbar-top">
                <Link to = '/' className="navbar-top-link">
                    <h7>HELP</h7>
                </Link>
                <h7>TH</h7>
                <h7>|</h7>
                <h7>EN</h7>
            </div>
            <div className ="navbar-main-container">

                <div className="navbar-left">
                    <Link to = '/' className="navbar-logo">
                        <img src="./Images/logope.png" alt=""/>
                    </Link>
                </div>

                <div className="navbar-right">
                    <Link to = '/' className="navbar-icon_cart">
                        <img src="./Images/bookstore.png" alt="icon ตะกล้า"/>
                    </Link>
                    <div className="navbar-user-dropdown">
                         <button className={`navbar-user-toggle ${isOpen ? "active" : ""}`} onClick={() => setIsOpen(!isOpen)}>
                            <img src="./Images/bookstore.png" alt="icon user"/>
                                <span className="navbar-username">Username</span>
                                    <img  src="./Images/chevron-down.png"
                                        alt="arrow"
                                        className={`navbar-arrow ${isOpen ? "open" : ""}`}
                                    />
                         </button>
                            {isOpen && (
                                <ul className="navbar-dropdown-menu">
                                   <li> 
                                    <Link to = '/' className="navbar-dropdown-item">Profile</Link>
                                   </li>
                                   <li> 
                                    <Link to = '/' className="navbar-dropdown-item">Profile</Link>
                                   </li>
                                   <li> 
                                    <Link to = '/' className="navbar-dropdown-item">Profile</Link>
                                   </li>
                                </ul>
                            )}
                    </div>
                    <div className="navbar-sell">
                        <Link to = '/' 
                         className="navbar-sell-button"
                        >ลงขายสินค้า
                        </Link>    
                    </div>
                </div>
            </div>
        </nav>
    );
};
export default Navbar;