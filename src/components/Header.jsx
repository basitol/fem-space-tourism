import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/shared/logo.svg";
import { CgMenuLeft } from "react-icons/cg";

const Header = () => {
  return (
    <>
      <header className="header flex flex-jc-sb w-full">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Space Tourism" title="Space Tourism" />
          </Link>
        </div>

        <nav className="navbar open">
          <ul>
            <li>
              <Link to="/">
                <span className="num">00</span>HOME
              </Link>
            </li>
            <li>
              <Link to="/destination">
                <span className="num">01</span>DESTINATION
              </Link>
            </li>
            <li>
              <Link to="/crew">
                <span className="num">02</span>CREW
              </Link>
            </li>
            <li>
              <Link to="/technology">
                <span className="num">03</span>TECHNOLOGY
              </Link>
            </li>
          </ul>
        </nav>
        <div className="micon">
          <button>
            <CgMenuLeft className="text-4xl" />
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
