import React from "react";
import "./RankExp.css";

const RankExp = props => (
  <div>
	<p>
		EarningStats is great for giving you how often a stock in our watchlist has stayed within its Expected (1 standard deviation) Move for as far back as 2003. 
		It also looks at this data from a few different angles and sorts the stocks so you can put context around where it ranks among the other stocks in the watchlist. 
		The Pros & Cons page will show you which of the stats that the stock ranks in the Top 10 and the Bottom 10 so you can quickly see its stengths and/or its weaknesses.
	</p>
	<p>
		This information can be interesting to stock and option traders for any strategy. Long/short stock, long/short/neutral options. Its good to know that if you were 
		thinking of selling a straddle or tight strangle in NFLX, it has only stayed inside its expected range 40% of the time after earnings. Or if you were thinking of 
		buying a call in JNJ as an earnings trade, that stock has stayed within its expected move over 90% of the time.
	</p>	  
	<p>
		The EarningStats Predicatability Rank goes a step further and weights each of the statistics that are listed below and then ranks each stock in each of these categories relative 
		to all the other stocks in the EarningStats watchlist. The result is the list you see to the left that is sorted by the stocks that have historically stayed inside 
		their expected moves at the top and those that have not at the bottom. The fact that the ranking is sorted this way is not important because you can use this list a number of 
		different ways depending on your trading style. 
		<br /><br />
	</p>
		<ul className="criteria">
			<li>Actual ≤ 2x Expected</li>
			<li>Actual ≤ 1.75x Expected</li>
			<li>Actual ≤ 1.5x Expected</li>
			<li>Actual ≤ 1.25x Expected</li>
			<li>≤ The Expected Move</li>
			<li>Actual ≤ .75x Expected</li>
			<li>Actual ≤ .5x Expected</li>
			<li>% of Back-to-Back Outside Moves</li>
			<li>Above Avg % Expected Move % Inside</li>
			<li>Below Avg % Expected Move % Inside</li>
			<li>Actual Move vs. Expected Move % Difference</li>
			<li># of Occurences</li>
			<li>Average Stock Volume</li>
			<li>Stock Price</li>
			<li><a href="https://www.tastyworks.com/technology.html" className="link" target="_blank" rel="noopener noreferrer">
			<b><font color="black">tasty</font><font color="gray">works</font><font color="crimson">.</font></b></a> Option Liquidity Rank</li>
			<br />
		</ul>
	
	<p>
		One way to use this information is for <i>position sizing</i> similar to the Kelly criterion. If you like to sell options during an earnings event because you think 
		the volatility is overstated maybe increase your size on the stocks toward the top of the list and reduce your trade size on the stocks at the bottom of the list. 
	</p>
	<p>	
		 If you want to share how you use the EarningStats Predicatability Rank, please contact us by email or Twitter at the bottom of the page. We would love to hear from you. 
		 This ranking will be updated 4 times per year at the end of each earnings season. It was last updated 4/5/2020. 
	</p>
	<h3><i>ENJOY!!</i></h3>
  </div>
);

export default RankExp;