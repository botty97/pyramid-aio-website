import React from "react";
import "./footer.css";

const Footer = () => (
  <div className="pyramid__footer section__padding">
    <div className="pyramid__footer-links">
      <div className="pyramid__footer-links_div">
        <h4>Links</h4>
        <p className="pyramid__footer-links_clickable">Privacy Policy</p>
        <p className="pyramid__footer-links_clickable">Terms of Service</p>
      </div>
      <div className="pyramid__footer-links_div">
        <h4>Credit and Debit Cards Accepted</h4>
        <p>VISA </p>
        <p>Mastercard</p>
        <p>American Expresss</p>
      </div>
      <div className="pyramid__footer-links_div">
        <h4>Contact</h4>
        <p className="pyramid__footer-links_clickable">
          <a
            href="https://twitter.com/pyramidaio"
            target="_blank"
            rel="noreferrer"
          >
            Twitter
          </a>
        </p>
        <p className="pyramid__footer-links_clickable">
          <a
            href="https://instagram.com/pyramidaio"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
        </p>
        <p className="pyramid__footer-links_clickable">Email</p>
      </div>
    </div>

    <div className="pyramid__footer-copyright">
      <p>@2022 Pyramid. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
