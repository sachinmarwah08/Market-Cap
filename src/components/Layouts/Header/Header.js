import React from "react";
import headerLogo from "../../Images/logo.svg";
import "./Header.scss";

const Header = ({ heading }) => {
  return (
    <div className="header-wrapper">
      <div className="header-bg-image">
        <div className="Header-container">
          <div className="header-content">
            <div className="header-logo">
              <img className="logo" src={headerLogo} />
            </div>
            <div className="header-links">
              <a className="links" href="">
                About Us
              </a>
              <a className="links" href="">
                Membership
              </a>
              <a className="links" href="">
                Directory
              </a>
              <a className="links" href="">
                Resources
              </a>
              <a className="links" href="">
                Summit
              </a>
              <a className="links" href="">
                Marketplace
              </a>
            </div>
            <div className="header-btn">
              <button className="sign-up-btn">Sign Up</button>
              <button className="sign-in-btn">Sign In</button>
            </div>
          </div>

          <div className="header-main-content">
            <h1 className="header-heading">Top Companies by {heading} </h1>
            <p className="header-title">
              openbusinesscouncil Company Directory that makes part of our
              business
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
