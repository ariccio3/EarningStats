import React, { Component } from "react";
import "./EarningsCalendar.css";
import { Link } from "react-router-dom";

class EarningsCalendar extends Component {
  componentDidMount () {
    window.scrollTo(0, 0)
  }

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
            <tr>
              <td><Link to="/results/FDX">FDX</Link></td>
              <td>FedEx</td>
              <td>3/20/2018</td>
              <td>amc</td>
            </tr>
            <tr>
              <td><Link to="/results/NKE">NKE</Link></td>
              <td>Nike</td>
              <td>3/22/2018</td>
              <td>amc</td>
            </tr>
            <tr>
              <td><Link to="/results/LULU">LULU</Link></td>
              <td>lululemon</td>
              <td>3/27/2018</td>
              <td>amc</td>
            </tr> 
            <tr>
              <td><Link to="/results/STZ">STZ</Link></td>
              <td>Constellation Brands</td>
              <td>3/29/2018</td>
              <td>bmo</td>
            </tr>
            <tr>
              <td><Link to="/results/C">C</Link></td>
              <td>CitiGroup</td>
              <td>4/13/2018</td>
              <td>bmo</td>
            </tr>
            <tr>
              <td><Link to="/results/JPM">JPM</Link></td>
              <td>JPMorgan Chase</td>
              <td>4/13/2018</td>
              <td>bmo</td>
            </tr>
            <tr>
              <td><Link to="/results/NFLX">NFLX</Link></td>
              <td>Netflix</td>
              <td>4/16/2018</td>
              <td>amc</td>
            </tr>
            <tr>
              <td><Link to="/results/GS">GS</Link></td>
              <td>Goldman Sachs</td>
              <td>4/17/2018</td>
              <td>bmo</td>
            </tr>
            <tr>
              <td><Link to="/results/IBM">IBM</Link></td>
              <td>International Business Machines</td>
              <td>4/17/2018</td>
              <td>amc</td>
            </tr>
            <tr>
              <td><Link to="/results/JNJ">JNJ</Link></td>
              <td>Johnson &amp; Johnson</td>
              <td>4/17/2018</td>
              <td>bmo</td>
            </tr>
            <tr>
              <td><Link to="/results/AXP">AXP</Link></td>
              <td>American Express</td>
              <td>4/18/2018</td>
              <td>amc</td>
            </tr> 
            <tr>
              <td><Link to="/results/V">V</Link></td>
              <td>Visa</td>
              <td>4/19/2018</td>
              <td>amc</td>
            </tr>
            <tr>
              <td><Link to="/results/GOOG">GOOG</Link></td>
              <td>Google</td>
              <td>4/23/2018</td>
              <td>amc</td>
            </tr>
            <tr>
              <td><Link to="/results/CAT">CAT</Link></td>
              <td>Caterpillar</td>
              <td>4/24/2018</td>
              <td>bmo</td>
            </tr>
            <tr>
              <td><Link to="/results/CMG">CMG</Link></td>
              <td>Chipotle Mexican Grill</td>
              <td>4/24/2018</td>
              <td>amc</td>
            </tr>
            <tr>
              <td><Link to="/results/WYNN">WYNN</Link></td>
              <td>Wynn Resorts</td>
              <td>4/24/2018</td>
              <td>bmo</td>
            </tr>
            <tr>
              <td><Link to="/results/BA">BA</Link></td>
              <td>Boeing</td>
              <td>4/25/2018</td>
              <td>bmo</td>
            </tr>
            <tr>
              <td><Link to="/results/CELG">CELG</Link></td>
              <td>Celgene</td>
              <td>4/26/2018</td>
              <td>bmo</td>
            </tr>
            <tr>
              <td><Link to="/results/AMGN">AMGN</Link></td>
              <td>Amgen</td>
              <td>4/26/2018</td>
              <td>amc</td>
            </tr>
            <tr>
              <td><Link to="/results/AMZN">AMZN</Link></td>
              <td>Amazon</td>
              <td>4/26/2018</td>
              <td>amc</td>
            </tr>
            <tr>
              <td><Link to="/results/BIDU">BIDU</Link></td>
              <td>Baidu</td>
              <td>4/26/2018</td>
              <td>amc</td>
            </tr>
            <tr>
              <td><Link to="/results/MSFT">MSFT</Link></td>
              <td>MicroSoft</td>
              <td>4/26/2018</td>
              <td>amc</td>
            </tr>
            <tr>
              <td><Link to="/results/PEP">PEP</Link></td>
              <td>Pepsi</td>
              <td>4/26/2018</td>
              <td>bmo</td>
            </tr>
            <tr>
              <td><Link to="/results/UPS">UPS</Link></td>
              <td>United Parcel Service</td>
              <td>4/26/2018</td>
              <td>bmo</td>
            </tr> 
            <tr>
              <td><Link to="/results/CVX">CVX</Link></td>
              <td>Cheveron</td>
              <td>4/27/2018</td>
              <td>bmo</td>
            </tr>
            <tr>
              <td><Link to="/results/XOM">XOM</Link></td>
              <td>Exxon Mobil</td>
              <td>4/27/2018</td>
              <td>bmo</td>
            </tr>
            <tr>
              <td><Link to="/results/MCD">MCD</Link></td>
              <td>McDonalds</td>
              <td>4/30/2018</td>
              <td>bmo</td>
            </tr>
            <tr>
              <td><Link to="/results/AAPL">AAPL</Link></td>
              <td>Apple</td>
              <td>5/1/2018</td>
              <td>amc</td>
            </tr>
            <tr>
              <td><Link to="/results/FB">FB</Link></td>
              <td>Facebook</td>
              <td>5/2/2018</td>
              <td>amc</td>
            </tr>
            <tr>
              <td><Link to="/results/GILD">GILD</Link></td>
              <td>Gilead Sciences</td>
              <td>5/2/2018</td>
              <td>amc</td>
            </tr>
            <tr>
              <td><Link to="/results/TSLA">TSLA</Link></td>
              <td>Tesla</td>
              <td>5/2/2018</td>
              <td>amc</td>
            </tr> 
            <tr>
              <td><Link to="/results/DIS">DIS</Link></td>
              <td>Disney</td>
              <td>5/8/2018</td>
              <td>amc</td>
            </tr>
            <tr>
              <td><Link to="/results/BKNG">BKNG</Link></td>
              <td>Booking</td>
              <td>5/9/2018</td>
              <td>amc</td>
            </tr>
            <tr>
              <td><Link to="/results/NTES">NTES</Link></td>
              <td>NetEase</td>
              <td>5/9/2018</td>
              <td>amc</td>
            </tr>
            <tr>
              <td><Link to="/results/NVDA">NVDA</Link></td>
              <td>NVIDIA</td>
              <td>5/10/2018/</td>
              <td>amc</td>
            </tr>
            <tr>
              <td><Link to="/results/HD">HD</Link></td>
              <td>Home Depot</td>
              <td>5/15/2018</td>
              <td>bmo</td>
            </tr>
            <tr>
              <td><Link to="/results/TGT">TGT</Link></td>
              <td>Target</td>
              <td>5/16/2018</td>
              <td>bmo</td>
            </tr>
            <tr>
              <td><Link to="/results/ADSK">ADSK</Link></td>
              <td>Autodesk</td>
              <td>5/17/2018</td>
              <td>amc</td>
            </tr>
            <tr>
              <td><Link to="/results/BABA">BABA</Link></td>
              <td>Alibaba</td>
              <td>5/17/2018</td>
              <td>bmo</td>
            </tr>
            <tr>
              <td><Link to="/results/CRM">CRM</Link></td>
              <td>SalesForce</td>
              <td>5/17/2018</td>
              <td>amc</td>
            </tr>        
            <tr>
              <td><Link to="/results/WMT">WMT</Link></td>
              <td>Walmart</td>
              <td>5/17/2018</td>
              <td>bmo</td>
            </tr>
            <tr>
              <td><Link to="/results/DE">DE</Link></td>
              <td>Deere &amp; Company</td>
              <td>5/18/2018</td>
              <td>bmo</td>
            </tr>
            <tr>
              <td><Link to="/results/COST">COST</Link></td>
              <td>Costco</td>
              <td>5/31/2018</td>
              <td>amc</td>
            </tr>
            <tr>
              <td><Link to="/results/AVGO">AVGO</Link></td>
              <td>Avago Technologies</td>
              <td>5/31/2018</td>
              <td>amc</td>
            </tr>
            <tr>
              <td><Link to="/results/ADBE">ADBE</Link></td>
              <td>Adobe</td>
              <td>TBD</td>
              <td>amc</td>
            </tr>                                                                                                                                                                                                                                            
          </tbody>            
       </table><br/>
      </div>         
    );
  }
}
          
export default EarningsCalendar;