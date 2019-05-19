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
              <td><Link to="/results/HD">HD</Link></td>
              <td>Home Depot</td>
              <td>5/21/2019</td>
              <td>bmo</td>
            </tr>                         
            <tr>
              <td><Link to="/results/LOW">LOW</Link></td>
              <td>Lowe's</td>
              <td>5/22/2019</td>
              <td>bmo</td>
            </tr>   
            <tr>
              <td><Link to="/results/TGT">TGT</Link></td>
              <td>Target</td>
              <td>5/22/2019</td>
              <td>bmo</td>
            </tr>  
            <tr>
              <td><Link to="/results/ADSK">ADSK</Link></td>
              <td>Autodesk</td>
              <td>5/23/2019</td>
              <td>amc</td>
            </tr>   
          </tbody>
        </table>

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
              <td><Link to="/results/COST">COST</Link></td>
              <td>Costco</td>
              <td>5/30/2019</td>
              <td>amc</td>
            </tr>    
            <tr>
              <td><Link to="/results/LULU">LULU</Link></td>
              <td>lululemon</td>
              <td>5/30/2019</td>
              <td>amc</td>
            </tr>  
            <tr>
              <td><Link to="/results/ULTA">ULTA</Link></td>
              <td>Ulta Beauty</td>
              <td>5/30/2019</td>
              <td>amc</td>
            </tr>   
          </tbody>
        </table>

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
              <td><Link to="/results/CRM">CRM</Link></td>
              <td>SalesForce</td>
              <td>6/4/2019</td>
              <td>amc</td>
            </tr>                
            <tr>
              <td><Link to="/results/AVGO">AVGO</Link></td>
              <td>Broadcom</td>
              <td>6/6/2019</td>
              <td>amc</td>
            </tr>   
          </tbody>
        </table>

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
              <td><Link to="/results/ADBE">ADBE</Link></td>
              <td>Adobe</td>
              <td>6/18/2019</td>
              <td>amc</td>
            </tr>    
          </tbody>
        </table>

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
              <td>6/25/2019</td>
              <td>amc</td>
            </tr>           
            <tr>
              <td><Link to="/results/ACN">ACN</Link></td>
              <td>accenture</td>
              <td>6/27/2019</td>
              <td>bmo</td>
            </tr>           
            <tr>
              <td><Link to="/results/NKE">NKE</Link></td>
              <td>Nike</td>
              <td>6/27/2019</td>
              <td>amc</td>
            </tr>   
          </tbody>            
       </table><br/>

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
              <td><Link to="/results/STZ">STZ</Link></td>  
              <td>Constellation Brands</td>
              <td>7/4/2019</td>
              <td>bmo</td>
            </tr>  
            <tr>
              <td><Link to="/results/JPM">JPM</Link></td>
              <td>JPMorgan Chase</td>
              <td>7/12/2019</td>
              <td>bmo</td>
            </tr>          
            <tr>
              <td><Link to="/results/C">C</Link></td>
              <td>CitiGroup</td>
              <td>7/15/2019</td>
              <td>bmo</td>
            </tr>    
            <tr>
              <td><Link to="/results/GS">GS</Link></td>
              <td>Goldman Sachs</td>
              <td>7/15/2019</td>
              <td>bmo</td>
            </tr>   
            <tr>
              <td><Link to="/results/JNJ">JNJ</Link></td>
              <td>Johnson &amp; Johnson</td>
              <td>7/16/2019</td>
              <td>bmo</td>
            </tr>   
            <tr>
              <td><Link to="/results/UNH">UNH</Link></td>
              <td>United Health</td>
              <td>7/16/2019</td>
              <td>bmo</td>
            </tr> 
            <tr>
              <td><Link to="/results/NFLX">NFLX</Link></td>
              <td>Netflix</td>
              <td>7/16/2019</td>
              <td>amc</td>
            </tr>  
            <tr>
              <td><Link to="/results/IBM">IBM</Link></td>
              <td>International Business Machines</td>
              <td>7/16/2019</td>
              <td>amc</td>
            </tr> 
            <tr>
              <td><Link to="/results/PEP">PEP</Link></td>
              <td>Pepsico</td>
              <td>7/17/2019</td>
              <td>amc</td>
            </tr> 
            <tr>
              <td><Link to="/results/AXP">AXP</Link></td>
              <td>American Express</td>
              <td>7/18/2019</td>
              <td>bmo</td>
            </tr> 
            <tr>
              <td><Link to="/results/BIIB">BIIB</Link></td>
              <td>Biogen</td>
              <td>7/23/2019</td>
              <td>bmo</td>
            </tr>        
            <tr>
              <td><Link to="/results/TXN">TXN</Link></td>
              <td>Texas Instruments</td>
              <td>7/23/2019</td>
              <td>amc</td>
            </tr>     
            <tr>
              <td><Link to="/results/BA">BA</Link></td>
              <td>Boeing</td>
              <td>7/24/2019</td>
              <td>bmo</td>
            </tr>  
            <tr>
              <td><Link to="/results/CAT">CAT</Link></td>
              <td>Caterpillar</td>
              <td>7/24/2019</td>
              <td>bmo</td>
            </tr>    
            <tr>
              <td><Link to="/results/DPZ">DPZ</Link></td>
              <td>Dominos Pizza</td>
              <td>7/24/2019</td>
              <td>bmo</td>
            </tr>   
            <tr>
              <td><Link to="/results/CMG">CMG</Link></td>
              <td>Chipotle Mexican Grill</td>
              <td>7/24/2019</td>
              <td>amc</td>
            </tr>   
            <tr>
              <td><Link to="/results/FB">FB</Link></td>
              <td>Facebook</td>
              <td>7/24/2019</td>
              <td>amc</td>
            </tr>             
            <tr>
              <td><Link to="/results/MSFT">MSFT</Link></td>
              <td>Microsoft</td>
              <td>7/24/2019</td>
              <td>amc</td>
            </tr>   
            <tr>
              <td><Link to="/results/PYPL">PYPL</Link></td>
              <td>PayPal</td>
              <td>7/24/2019</td>
              <td>amc</td>
            </tr>       
            <tr>
              <td><Link to="/results/TSLA">TSLA</Link></td>
              <td>Tesla</td>
              <td>7/24/2019</td>
              <td>amc</td>
            </tr>  
            <tr>
              <td><Link to="/results/V">V</Link></td>
              <td>Visa</td>
              <td>7/24/2019</td>
              <td>amc</td>
            </tr>  
            <tr>
              <td><Link to="/results/MA">MA</Link></td>
              <td>Mastercard</td>
              <td>7/25/2019</td>
              <td>bmo</td>
            </tr>    
            <tr>
              <td><Link to="/results/UPS">UPS</Link></td>
              <td>United Parcel Service</td>
              <td>7/25/2019</td>
              <td>bmo</td>
            </tr> 
            <tr>
              <td><Link to="/results/AMZN">AMZN</Link></td>
              <td>Amazon</td>
              <td>7/25/2019</td>
              <td>amc</td>
            </tr>   
            <tr>
              <td><Link to="/results/SBUX">SBUX</Link></td>
              <td>Starbucks</td>
              <td>7/25/2019</td>
              <td>amc</td>
            </tr>   
            <tr>
              <td><Link to="/results/CVX">CVX</Link></td>
              <td>Cheveron</td>
              <td>7/26/2019</td>
              <td>bmo</td>
            </tr>   
            <tr>
              <td><Link to="/results/XOM">XOM</Link></td>
              <td>Exxon Mobil</td>
              <td>7/26/2019</td>
              <td>bmo</td>
            </tr>               
            <tr>
              <td><Link to="/results/GOOGL">GOOGL</Link></td>
              <td>Google</td>
              <td>7/29/2019</td>
              <td>amc</td>
            </tr> 
            <tr>
              <td><Link to="/results/MCD">MCD</Link></td>
              <td>McDonalds</td>
              <td>7/30/2019</td>
              <td>bmo</td>
            </tr> 
            <tr>
              <td><Link to="/results/AMGN">AMGN</Link></td>
              <td>Amgen</td>
              <td>7/30/2019</td>
              <td>amc</td>
            </tr>      
            <tr>
              <td><Link to="/results/AAPL">AAPL</Link></td>
              <td>Apple</td>
              <td>7/30/2019</td>
              <td>amc</td>
            </tr>  
            <tr>
              <td><Link to="/results/QCOM">QCOM</Link></td>
              <td>QualComm</td>
              <td>7/31/2019</td>
              <td>amc</td>
            </tr>    
            <tr>
              <td><Link to="/results/ADP">ADP</Link></td>
              <td>ADP</td>
              <td>8/1/2019</td>
              <td>bmo</td>
            </tr>     
            <tr>
              <td><Link to="/results/SQ">SQ</Link></td>
              <td>Square</td>
              <td>8/1/2019</td>
              <td>amc</td>
            </tr>              
            <tr>
              <td><Link to="/results/AGN">AGN</Link></td>
              <td>Allergan</td>
              <td>8/7/2019</td>
              <td>bmo</td>
            </tr>               
            <tr>
              <td><Link to="/results/EA">EA</Link></td>
              <td>Electronic Arts</td>
              <td>8/7/2019</td>
              <td>amc</td>
            </tr>                
            <tr>
              <td><Link to="/results/ROKU">ROKU</Link></td>
              <td>Roku</td>
              <td>8/7/2019</td>
              <td>amc</td>
            </tr>  
            <tr>
              <td><Link to="/results/DIS">DIS</Link></td>
              <td>Disney</td>
              <td>8/8/2019</td>
              <td>amc</td>
            </tr>  
            <tr>
              <td><Link to="/results/BKNG">BKNG</Link></td>
              <td>Booking</td>
              <td>8/9/2019</td>
              <td>amc</td>
            </tr> 
            <tr>
              <td><Link to="/results/WYNN">WYNN</Link></td>
              <td>Wynn Resorts</td>
              <td>8/9/2019</td>
              <td>amc</td>
            </tr>             
            <tr>
              <td><Link to="/results/TTWO">TTWO</Link></td>
              <td>Take-Two Interactive</td>
              <td>8/13/2019</td>
              <td>amc</td>
            </tr>     
            <tr>
              <td><Link to="/results/BABA">BABA</Link></td>
              <td>Alibaba</td>
              <td>8/15/2019</td>
              <td>bmo</td>
            </tr>  
            <tr>
              <td><Link to="/results/NTES">NTES</Link></td>
              <td>NetEase</td>
              <td>8/15/2019</td>
              <td>amc</td>
            </tr> 
            <tr>
              <td><Link to="/results/WMT">WMT</Link></td>
              <td>Walmart</td>
              <td>8/16/2019</td>
              <td>bmo</td>
            </tr>  
            <tr>
              <td><Link to="/results/BIDU">BIDU</Link></td>
              <td>Baidu</td>
              <td>8/16/2019</td>
              <td>amc</td>
            </tr>  
            <tr>
              <td><Link to="/results/NVDA">NVDA</Link></td>
              <td>NVIDIA</td>
              <td>8/16/2019</td>
              <td>amc</td>
            </tr>   
            <tr>
              <td><Link to="/results/DE">DE</Link></td>
              <td>Deere &amp; Company</td>
              <td>8/17/2019</td>
              <td>bmo</td>
            </tr>  
          </tbody>
        </table>

      </div>         
    );
  }
}
          
export default EarningsCalendar;