import React, { Component } from "react";
import "./Glossary.css";
// import { Link } from "react-router-dom";

class Glossary extends Component {
  componentDidMount () {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <div className="container">
        <h3>EarningStats Glossary<hr /></h3>
        <p><b>EarningStats Watch List (ES34)</b> – Are the current stocks that we follow for trading their earnings events. 
          We look for stocks that have liquid option markets as represented by reasonably tight bid-ask spreads and/or 
          higher priced underlings that offer more premium. If you would like to suggest a stock added to our watch list, 
          contact us via email or Twitter at the bottom of the page. Clicking on this link will show the annual expected 
          move stats for the EarningStats watch list.</p>
        <p><b>Total Earnings Reports Analyzed</b> – Shows how many earnings reports were analyzed for the selected stock and 
          the total in our EarningStats watch list. We have option price data that goes back to 2003 on many of the 
          stocks we follow. Stocks that came later we analyzed the earnings reports from the time options were traded 
          on the stock.</p>
        <p><b>Total # Up</b> – Shows the number of times a stock opened higher after the earnings report was released. 
          This is compared to the previous day’s closing price to determine if the stock price opened up or down. </p>
        <p><b>Total # Down</b> - Shows the number of times a stock opened lower after the earnings report was released. 
          This is compared to the previous day’s closing price to determine if the stock price opened up or down.</p>
        <p><b>Total % Up</b> – Shows what percentage of the time the stock and the EarningStats watch list opened higher 
          after the earnings report was released. Theoretically there should be a 50/50 random chance but as you 
          can see by looking at the EarningStats watch list total that the stock market has a positive drift over 
          time and many occurrences. Clicking on this link will show all the stocks in the EarningStats watch list 
          sorted by their total % up percentage.</p>
        <p><b>Total # Inside Expected Move</b> – Shows the number of times the stock and the EarningStats watch list has 
          landed inside of the expected range. An explanation on how the expected move is calculated can be found 
          on our homepage.</p>
        <p><b>Total # Outside Expected Move</b> - Shows the number of times the stock and the EarningStats watch list 
          has landed outside of the expected range. An explanation on how the expected move is calculated can 
          be found on our homepage.</p>
        <p><b>Total % Inside Expected Move</b> – Shows what percentage of time the stock and the EarningStats watch list 
          have closed inside the expected move. You can compare these results and quickly see if the stock has 
          closed inside the expected move more or less often than the EarningStats watchlist average. Clicking 
          on this link will show all the stocks in the EarningStats watch list sorted by their percent of 
          earnings trades that opened inside the expected move.</p>

        <p><b>Actual ≥ 2x Expected</b> – Shows the percentage of analyzed earnings reports that have had post-earnings 
          moves two times the expected move or greater. Clicking on this link will show all the stocks in the 
          EarningStats watch list sorted by their percent of post-earnings moves that opened two times their 
          expected move or greater.</p>
        <p><b>Actual ≤ 2x Expected</b> - Shows the percentage of analyzed earnings reports that have had overnight 
          post-earnings moves two times the expected move or less. Clicking on this link will show all the 
          stocks in the EarningStats watch list sorted by their percent of post-earnings moves that opened 
          less than two times the expected move.</p>
        <p><b>Actual ≤ 1.75x Expected</b> - Shows the percentage of analyzed earnings reports that have had overnight 
          post-earnings moves 1.75 times the expected move or less. Clicking on this link will show all the 
          stocks in the EarningStats watch list sorted by their percent of post-earnings moves that opened 
          less than 1.75 times the expected move.</p>
        <p><b>Actual ≤ 1.5x Expected</b> - Shows the percentage of analyzed earnings reports that have had overnight 
          post-earnings moves 1.5 times the expected move or less. Clicking on this link will show all the stocks 
          in the EarningStats watch list sorted by their percent of post-earnings moves that opened less than 
          1.5 times the expected move.</p>
        <p><b>Actual ≤ 1.25x Expected</b> - Shows the percentage of analyzed earnings reports that have had overnight 
          post-earnings moves 1.25 times the expected move or less. Clicking on this link will show all the 
          stocks in the EarningStats watch list sorted by their percent of post-earnings moves that opened 
          less than 1.25 times the expected move.</p>
        <p><b>≤ The Expected Move</b> - Shows the percentage of analyzed earnings reports that have had overnight 
          post-earnings moves exactly the expected move or less. Clicking on this link will show all the 
          stocks in the EarningStats watch list sorted by their percent of post-earnings moves that opened 
          less than or equal to the expected move.</p>
        <p><b>Actual ≤ .75x Expected</b> - Shows the percentage of analyzed earnings reports that have had overnight 
          post-earnings moves within the expected move by 0.75 or less. Clicking on this link will show all 
          the stocks in the EarningStats watch list sorted by their percent of post-earnings moves that 
          opened less than .75 times the expected move.</p>
        <p><b>Actual ≤ .5x Expected</b> - Shows the percentage of analyzed earnings reports that have had overnight 
          post-earnings moves within the expected move by 0.5 or less. Clicking on this link will show all 
          the stocks in the EarningStats watch list sorted by their percent of post-earnings moves that 
          opened less than .5 times the expected move.</p>
        <p><b># Double the Expected Move</b> – Shows the number of trades the stock has had where the price move 
          up or down double the expected move or greater. Also shows the total number of trades this occurred 
          for all the stocks in the EarningStats watch list. Clicking on this link will show all the stocks 
          in the EarningStats watch list sorted by the number of post-earnings moves that opened two times 
          their expected move or greater.</p>
        <p><b>% of Back-to-Back Outside Moves</b> – Any given stock has ≈68% chance of opening inside the expected 
          move and ≈32% chance of opening outside the expected move after the earnings report is released. 
          The probability of a stock landing outside its expected move over the next 2 earnings reports is 
          .32 × .32 ≈ 10.25%. This looks at the occurrences of back-to-back moves outside the expected move 
          divided by the total earnings reports analyzed to give us the percentage of earnings that have moved 
          outside the expected range back-to-back. It also shows the average probability for all the stocks in 
          the EarningStats watch list. Clicking on this link will show you how each stock in the EarningStats 
          watch list ranks in this category and the outcome of its last post-earnings move.</p>

        <p><b># Up</b> – Shows the number of times the stock opened higher after releasing its earnings report if the 
          move was outside the expected move.</p>
        <p><b>% Up</b> – Shows what percent of post-earnings moves that were outside the expected move to the upside. 
          Clicking on this link will show all the stocks in the EarningStats watch list sorted by the percent 
          of the time they opened up after a post-earnings move outside the expected move.</p>
        <p><b># Down</b> – Shows the number of times the stock opened lower after releasing its earnings report if 
          the move was outside the expected move.</p>
        <p><b>% Down</b> – Shows what percent of post-earnings moves that were outside the expected move to the 
          downside. Clicking on this link will show all the stocks in the EarningStats watch list sorted by the 
          percent of the time they opened down after a post-earnings move outside the expected move.</p>

        <p><b>Above Average % Expected Move % Inside</b> – This looks at all of the earnings occurrences where 
          the expected percent move was greater than average and shows what percent of those occurrences were 
          inside the expected move. Clicking on this link will show all the stocks in the EarningStats watch 
          list sorted by the percent of occurrences inside the expected move when the stock’s expected percent 
          move was above its average.</p>
        <p><b>Average % Expected Move</b> – Shows you the average percent expected move for the stock and the 
          EarningStats watch list. You could compare this to the current earnings you are considering trading 
          to see if the expected move is higher or lower than the average. You could compare this stat to the 
          Actual % Expected Move to see how much volatility is overstated on average. Clicking on this link will 
          show all the stocks in the EarningStats watch list sorted by its average percent expected move.</p>
        <p><b>Average % Actual Move</b> – Shows the average percent actual move for the stock and the EarningStats 
          watch list.</p>
        <p><b>Below Average % Expected Move % Inside</b> – This looks at all of the earnings occurrences where 
          the expected percent move was less than average and shows what percent of those occurrences were inside 
          the expected move. Clicking on this link will show all the stocks in the EarningStats watch list sorted 
          by the percent of occurrences inside the expected move when the stock’s expected percent move was below 
          its average.</p>

        <p><b>Q1 - % Inside Expected Move</b> – Shows the percent of Quarter 1 earnings that were inside the 
          expected move. Clicking on this link will show all the stocks in the EarningStats watch list sorted by 
          the percent of post-earnings moves that were inside the expected move.</p>
        <p><b>Q2 - % Inside Expected Move</b> - Shows the percent of Quarter 2 earnings that were inside the 
          expected move. Clicking on this link will show all the stocks in the EarningStats watch list sorted by 
          the percent of post-earnings moves that were inside the expected move.</p>
        <p><b>Q3 - % Inside Expected Move</b> - Shows the percent of Quarter 3 earnings that were inside the 
          expected move. Clicking on this link will show all the stocks in the EarningStats watch list sorted by 
          the percent of post-earnings moves that were inside the expected move.</p>
        <p><b>Q4 - % Inside Expected Move</b> - Shows the percent of Quarter 4 earnings that were inside the 
          expected move. Clicking on this link will show all the stocks in the EarningStats watch list sorted by 
          the percent of post-earnings moves that were inside the expected move.</p>
      </div>         
    );
  }
}
          
export default Glossary;