import React, { Component } from "react";
import "./EarningsCalendar.css";
import { Link } from "react-router-dom";

class EarningsCalendar extends Component {

  render() {
    return (
      <div className="tableContainer"> 
        <h4>EarningStats Watchlist Earnings Calendar</h4> 
        <table className="table table-striped table-hover table-bordered">
          <thead>
            <tr>
              <th className="stock">Stock</th>
              <th className="company">Company</th>
              <th className="date">Date</th>
              <th className="time">Time</th>
            </tr>
          </thead>
          <tbody>
            <tr className="passed">
              <td><Link to="/results/STZ">STZ</Link></td>
              <td>Constellation Brands</td>
              <td>1/5/2018</td>
              <td>bmo</td>
            </tr>
            <tr className="passed">
              <td><Link to="/results/JPM">JPM</Link></td>
              <td>JPMorgan Chase</td>
              <td>1/12/2018</td>
              <td>bmo</td>
            </tr>
            <tr className="passed">
              <td><Link to="/results/GS">GS</Link></td>
              <td>Goldman Sachs</td>
              <td>1/17/2018</td>
              <td>bmo</td>
            </tr>
            <tr className="passed">
              <td><Link to="/results/IBM">IBM</Link></td>
              <td>International Business Machines</td>
              <td>1/18/2018</td>
              <td>amc</td>
            </tr>            
            <tr>
              <td><Link to="/results/NFLX">NFLX</Link></td>
              <td>Netflix</td>
              <td>1/22/2018</td>
              <td>amc</td>
            </tr>
            <tr>
              <td><Link to="/results/CAT">CAT</Link></td>
              <td>Caterpiller</td>
              <td>1/25/2018</td>
              <td>bmo</td>
            </tr>
            <tr>
              <td><Link to="/results/CELG">CELG</Link></td>
              <td>Celgene</td>
              <td>1/25/2018</td>
              <td>bmo</td>
            </tr>
            <tr>
              <td><Link to="/results/MCD">MCD</Link></td>
              <td>McDonalds</td>
              <td>1/30/2018</td>
              <td>bmo</td>
            </tr>
            <tr>
              <td><Link to="/results/BA">BA</Link></td>
              <td>Boeing</td>
              <td>1/31/2018</td>
              <td>bmo</td>
            </tr>
            <tr>
              <td><Link to="/results/FB">FB</Link></td>
              <td>Facebook</td>
              <td>1/31/2018</td>
              <td>amc</td>
            </tr>
            <tr>
              <td><Link to="/results/AAPL">AAPL</Link></td>
              <td>Apple</td>
              <td>2/1/2018</td>
              <td>amc</td>
            </tr>
            <tr>
              <td><Link to="/results/AMGN">AMGN</Link></td>
              <td>Amgen</td>
              <td>2/1/2018</td>
              <td>amc</td>
            </tr>
            <tr>
              <td><Link to="/results/AMZN">AMZN</Link></td>
              <td>Amazon</td>
              <td>2/1/2018</td>
              <td>amc</td>
            </tr>
            <tr>
              <td><Link to="/results/BABA">BABA</Link></td>
              <td>Alibaba</td>
              <td>2/1/2018</td>
              <td>bmo</td>
            </tr>
            <tr>
              <td><Link to="/results/GOOG">GOOG</Link></td>
              <td>Google</td>
              <td>2/1/2018</td>
              <td>amc</td>
            </tr>
            <tr>
              <td><Link to="/results/UPS">UPS</Link></td>
              <td>United Parcel Service</td>
              <td>2/1/2018</td>
              <td>bmo</td>
            </tr>
            <tr>
              <td><Link to="/results/CMG">CMG</Link></td>
              <td>Chipotle Mexican Grill</td>
              <td>2/6/2018</td>
              <td>amc</td>
            </tr>
            <tr>
              <td><Link to="/results/DIS">DIS</Link></td>
              <td>Disney</td>
              <td>2/6/2018</td>
              <td>amc</td>
            </tr>
            <tr>
              <td><Link to="/results/GILD">GILD</Link></td>
              <td>Gilead Sciences</td>
              <td>2/6/2018/</td>
              <td>amc</td>
            </tr>
            <tr>
              <td><Link to="/results/NTES">NTES</Link></td>
              <td>NetEase</td>
              <td>2/7/2018</td>
              <td>amc</td>
            </tr>
            <tr>
              <td><Link to="/results/NVDA">NVDA</Link></td>
              <td>NVIDIA</td>
              <td>2/8/2018/</td>
              <td>amc</td>
            </tr>
            <tr>
              <td><Link to="/results/PEP">PEP</Link></td>
              <td>Pepsi</td>
              <td>2/13/2018</td>
              <td>bmo</td>
            </tr>
            <tr>
              <td><Link to="/results/HD">HD</Link></td>
              <td>Home Depot</td>
              <td>2/20/2018</td>
              <td>bmo</td>
            </tr>
            <tr>
              <td><Link to="/results/TSLA">TSLA</Link></td>
              <td>Tesla</td>
              <td>2/21/2018</td>
              <td>amc</td>
            </tr>
            <tr>
              <td><Link to="/results/BIDU">BIDU</Link></td>
              <td>Baidu</td>
              <td>2/22/2018</td>
              <td>amc</td>
            </tr>
            <tr>
              <td><Link to="/results/PCLN">PCLN</Link></td>
              <td>Priceline</td>
              <td>2/27/2018</td>
              <td>amc</td>
            </tr>
            <tr>
              <td><Link to="/results/AVGO">AVGO</Link></td>
              <td>Avago Technologies</td>
              <td>2/28/2018</td>
              <td>amc</td>
            </tr>
            <tr>
              <td><Link to="/results/COST">COST</Link></td>
              <td>Costco</td>
              <td>3/7/2018</td>
              <td>amc</td>
            </tr>
            <tr>
              <td><Link to="/results/ADBE">ADBE</Link></td>
              <td>Adobe</td>
              <td>3/15/2018</td>
              <td>amc</td>
            </tr>
            <tr>
              <td><Link to="/results/FDX">FDX</Link></td>
              <td>FedEx</td>
              <td>3/20/2018</td>
              <td>amc</td>
            </tr>
            <tr>
              <td><Link to="/results/NKE">NKE</Link></td>
              <td>Nike</td>
              <td>3/20/2018</td>
              <td>amc</td>
            </tr>
            <tr>
              <td><Link to="/results/LULU">LULU</Link></td>
              <td>lululemon</td>
              <td>TBD</td>
              <td>TBD</td>
            </tr>                                                                                                                                                                                                                                                            
          </tbody>            
       </table><br/>
      </div>         
    );
  }
}
          
export default EarningsCalendar;