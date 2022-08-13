import React from "react";
import "./footer.css";

const Footer = () => (
  <div className="pyramid__footer section__padding">
    <div className="pyramid__footer-links">
      <div className="pyramid__footer-links_div">
        <h4>Links</h4>
        <p>Privacy Policy</p>
        <p>Terms of Service</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="pyramid__footer-links_div">
        <h4>Credit and Debit Cards Accepted</h4>
        <p>VISA </p>
        <p>Mastercard</p>
        <p>American Expresss</p>
      </div>
      <div className="pyramid__footer-links_div">
        <h4>Contact</h4>
        <p>Twitter</p>
        <p>Instagram</p>
        <p>Email</p>
      </div>
    </div>

    <div className="pyramid__footer-copyright">
      <p>@2022 Pyramid. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
