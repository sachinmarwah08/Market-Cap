import React from "react";
import "./Footer.scss";
import footerLogo from "../../Images/footer-logo.png";
import facebookLogo from "../../Images/facebook-logo.svg";
import twitterLogo from "../../Images/twitterLogo.svg";
import linkdInLogo from "../../Images/linkdIn.svg";
import youtubeLogo from "../../Images/Youtube.svg";
import companyLogo from "../../Images/zstudium.svg";
import allLogo from "../../Images/all-logos.svg";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-container">
        <img className="footer-logo" src={footerLogo} />
        <div className="footer-content">
          <div className="footer-left">
            <h1 className="footer-about">About</h1>
            <p className="footer-about-title">
              The leading digital business Directory and unique Integrated App,
              Communication and Marketplace for Companies, SMEs, startups and
              entrepreneurs.
            </p>
          </div>
          <div className="footer-right">
            <h1 className="footer-contact">Contact Us</h1>
            <p className="footer-email">openbusinesscouncil@ztudium.com</p>

            <div className="footer-social-logo">
              <img className="footer-social-icon" src={facebookLogo} />
              <img className="footer-social-icon" src={twitterLogo} />
              <img className="footer-social-icon" src={linkdInLogo} />
              <img className="footer-social-icon" src={youtubeLogo} />
            </div>
          </div>
        </div>

        <div className="footer-companies-logo">
          <h1 className="footer-company-logo-heading">Produced by</h1>
          <img src={companyLogo} />

          <h1 className="collaboration-heading">In collaboration with</h1>
          <img className="all-logos" src={allLogo} />
        </div>
      </div>
      <div className="footer-copyright">
        <div className="copyright-title">
          <p className="footer-copy-title">
            copyright 2022 © openbusinesscouncil powered by ztudium
          </p>
        </div>
        <div className="privacy">
          <p className="privacy-title">Privacy policy</p>
          <p className="privacy-title">Accessibility</p>
          <p className="privacy-title">Terms of service</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
