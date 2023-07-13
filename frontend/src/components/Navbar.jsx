import React, { useState } from "react";
import Logo from "../assets/product/logo.jpg";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "../styles/Navbar.css";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={Logo} />
      </div>
      <div className="rightSide">
        <Link to="/"> Home </Link>
        <Link to="/shop"> shop </Link>
        <Link to="/about"> About </Link>
        <Link to="/contact"> Contact </Link>
        <Link to="/login">Login</Link>
        <Link to="/register">sign up</Link>
        <Link to="/">Log out</Link>
        <Link to ='/cart'>shop<ShoppingCart size={28} /></Link>

        <button onClick={toggleNavbar}>
        </button>
      </div>
    </div>
  );
}

export default Navbar;

