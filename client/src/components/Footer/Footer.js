import React from "react";
import "./Footer.css";
import PayPal from "../../components/PayPal";


	let username = "earningstats";
	let hostname = "yahoo.com";
	let linktext = username + "@" + hostname ;

const Footer = () =>
  <footer className="footer">
    <span className="footerText"><b>EarningStats 2018&emsp;|&emsp;Contact: <a href="mailto:{linktext}">{linktext}</a></b></span><br/>
    <div className="paypal">
        <PayPal />
    </div>
  </footer>;

export default Footer;
