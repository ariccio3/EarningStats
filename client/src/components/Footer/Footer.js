import React from "react";
import "./Footer.css";
import PayPal from "../../components/PayPal";

const Footer = () =>
  <footer className="footer">
    <span className="footerText"><b>EarningStats 2018&emsp;|&emsp;Contact: <a href="mailto:earningstats@yahoo.com">earningstats@yahoo.com</a></b></span><br/>
    <div className="paypal">
        <PayPal />
    </div>
  </footer>;

export default Footer;
