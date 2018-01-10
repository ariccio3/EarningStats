import React from "react";
import "./Article.css";

const Article = props => (
  <div>
  	<h3>
		Do you like to trade earnings events? 
	</h3>
	<p>
		Leading up to a company releasing its earnings report its stock’s implied volatility will usually increase to price in the uncertainty around this event. There is the potential for the stock price to have a big move after the announcement and EarningStats.com is a great resource to give you information about how the stock has behaved in the past. 
	</p>
	<p>
		We focus only on the stocks with the most liquid options markets and higher priced stocks whose options offer larger premiums.  We are most interested in the stock’s expected move vs. the actual move. 
	</p>
	<p>	
		<b>Expected Move: </b>There are three basic ways of calculating an expected range for an asset like stocks: the formula, the delta or the ballpark estimate using option prices.
	</p>
	<p>	
		<b>The Formula: </b>If you take the Price of the stock times the stock’s Implied Volatility (IV) multiplied by the square root of the Days until Expiration (DTE)/365 you will get the stocks expected range above and below the current price. 
	</p>
	<p className="formula">
		<b>Price × IV × √(DTE/365) = Expected Move</b>
	</p>
	<p>	
		<b>The Delta: </b>The one standard deviation area of a normal distribution curve is where given enough occurrences a stock price will fall within this range 68% of the time. In fact it usually falls within this range more often than theory suggests. So if you were trading a short strangle you would sell the 16 delta call and the 16 delta put. 
	</p>
	<p>	
		<b>The Ballpark: </b>When we go further back in history and the Implied Volatility and Delta aren’t available, you can use a percentage of the at-the-money straddle premium. We have found that this can be unique for each stock so for accuracy we take the recent 5 year average for weekly and monthly options for each stock when calculating the expected move further back in history.  
		
	</p>
	<p>
		Factors used to determine which stocks to follow:
	</p>
	<p>	
		<b>Liquidity: </b>Since the late-90’s option liquidity has gotten better with the rise of Online Brokerages. We define liquidity as a tight Bid-Ask spread and/or the ability to get our order filled at the mid-price. 
	</p>
	<p>	
		<b>High Implied Volatility Rank: </b>The innovative creators of tastytrade.com brought us IVR which is simply a stock’s Implied Volatility measured against itself over the last year. This gives us a way to quickly gauge if the option premium is high (preferable for option sellers) or low (preferable for option buyers). 
	</p>
	<p>	
		<b>Weekly vs. Monthly options: </b>Shortly after a stock reports its earnings the implied volatility will quickly fall especially if the stock price stays within its expected move. This phenomenon is what peaked our curiosity about how often individual stocks stay inside their expected move after their earnings are reported. We usually default to the weekly options for earnings trades when selling options because implied volatility is higher. Monthly options are good for getting further away from the current stock price. Sometimes we trade both.  
	</p>
	<p>	
		<b>Premiums: </b>IVR can give us an idea how rich the options premium is compared to the last year but we also need to consider the actual amount of premium available and if it’s worth the risk.
  	</p>
  </div>
);

export default Article;