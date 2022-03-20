import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/shared/logo.svg";

const Header = () => {
  return (
    <>
      <header className="header">
        <div>
          <Link to="/">
            <img src={logo} alt="Space Tourism" title="Space Tourism" />
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
