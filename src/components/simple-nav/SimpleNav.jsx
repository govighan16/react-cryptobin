import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./SimpleNav.css";

const NavbarSimple = () => {
  return (
    <div className="nav-container">
      <Link to="/">
        <h1>CryptoBin</h1>
      </Link>
    </div>
  );
};

export default NavbarSimple;
