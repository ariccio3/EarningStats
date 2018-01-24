import React from "react";
import "./Footer.css";
import EmailIcon from "./img/email-icon.png";
import TwitterIcon from "./img/twitter-icon.png";
import PayPal from "../../components/PayPal";
import { Link } from "react-router-dom";

const Footer = () =>
  <footer className="footer">
    <span className="footerText"><b>EarningStats 2003-2018&emsp;|&emsp;Contact: &nbsp;
    	<a href="mailto:earningstats@yahoo.com"><img src={EmailIcon} alt="earningstats@yahoo.com" className="icons" title="earningstats@yahoo.com" /></a>&nbsp;
    	<a href="https://twitter.com/EarningStats" target="_blank" rel="noopener noreferrer"><img src={TwitterIcon} alt="www.twitter.com/EarningStats" className="icons" title="@EarningStats" /></a></b></span><br/><br/>
    <div className="paypal">
        <PayPal />
    </div>
    <div className="resourceText">
    	<p><Link to="/earningscalendar">Earnings Calendar</Link></p>
    </div>
  </footer>;

export default Footer;
