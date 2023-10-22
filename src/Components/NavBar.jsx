import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <Link to="/"> Home </Link>
      <Link to="/counter"> Counter </Link>
      <Link to="/error"> Error </Link>
      <Link to="/errortest"> ErrorTest </Link>
    </nav>
  );
};

export default NavBar;
