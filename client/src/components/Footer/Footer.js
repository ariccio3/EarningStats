import React from "react";
import "./Footer.css";
import EmailIcon from "./img/email-icon.png";
import TwitterIcon from "./img/twitter-icon.png";
import PayPal from "../../components/PayPal";
import { Link } from "react-router-dom";

const Footer = () =>
  <footer className="footer">
    <span className="footerText"><b>EarningStats 2003-2021&emsp;|&emsp;Contact: &nbsp;
    	<a href="mailto:info@earningstats.com"><img src={EmailIcon} alt="info@earningstats.com" className="icons" title="info@earningstats.com" /></a>&nbsp;
    	<a href="https://twitter.com/EarningStats" target="_blank" rel="noopener noreferrer"><img src={TwitterIcon} alt="www.twitter.com/EarningStats" className="icons" title="@EarningStats" /></a></b></span><br/><br/>
    <div className="paypal">
        <PayPal />
    </div>
    <div className="resourceText">
        <p><Link to="/earningscalendar">Earnings Calendar</Link></p>
        <p><Link to="/glossary">Stats Glossary</Link></p>
        <p><a href="https://start.tastyworks.com#/login?referralCode=6V6M2885JH" target="_blank" rel="noopener noreferrer">Open Brokerage Acct</a></p>
        <p><a href="https://www.tastytrade.com/tt/shows/step-up-to-options" target="_blank" rel="noopener noreferrer">New to Options?</a></p>
{/*     <p><Link to="/setup">Trade SetUp</Link></p>
        <p><Link to="/rank">EarningStats Rank</Link></p>
        <p><a href="http://www.earningstats.com/dashboard">EarningStats Dashboard</a></p>
*/}
    </div>
  </footer>;

export default Footer;
