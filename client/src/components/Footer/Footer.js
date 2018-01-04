import React from "react";
import "./Footer.css";
import PayPal from "../../components/PayPal";

const contact = () => {
	let username = "earningstats";
	let hostname = "yahoo.com";
	let linktext = username + "@" + hostname ;

	return linktext;
};

const Footer = () =>
  <footer className="footer">
    <span className="footerText"><b>EarningStats 2018&emsp;|&emsp;Contact: <a href="mailto:{contact()}">{contact()}</a></b></span>
    <div className="paypal">
        <PayPal />
    </div>
    <hr/>
  </footer>;

export default Footer;
