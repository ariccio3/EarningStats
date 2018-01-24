import React from "react";
import "./PayPal.css";
import DonateIcon from "./img/paypal-donate-button.png";

const PayPal = props => (
  <div>
  	<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank" rel="noopener noreferrer">
		<input type="hidden" name="cmd" value="_s-xclick" />
		<input type="hidden" name="hosted_button_id" value="HWSKSSJM4Q5U6" />
		<input type="image" src={DonateIcon} id="icon" name="submit" alt="PayPal - The safer, easier way to pay online!" />
		<img alt="" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
	</form>
  </div>
);

export default PayPal;