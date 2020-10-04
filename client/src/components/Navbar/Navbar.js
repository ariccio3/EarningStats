import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import API from "../../utils/API";

class Navbar extends Component {
  // Setting the component's initial state
  state = {
    stocks: "",
    watchList: []
  }

  componentDidMount() {
    this.loadWatchList();
  }

  loadWatchList = () => {
    API.getWatchList()
    .then(res => this.setState({ watchList: res.data }))
    .catch(err => console.log(err));
  };  

  watchList = () => {
    let arr = [];
    for (let i = 0; i < this.state.watchList.length; i++) {
      if (arr.indexOf(this.state.watchList[i].stock) === -1){
        arr.push(this.state.watchList[i].stock);
      }
    }  
    let watchListArray = arr.reverse();
    return watchListArray; 
  }; 

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    let uniqueStocks = this.watchList();
    let userInput = this.state.stocks.toUpperCase();

    if (!this.state.stocks) {
      alert("Please enter a stock ticker you'd like to search for");
    } 

    if (userInput) {
      if (uniqueStocks.indexOf(userInput) !== -1) {
        window.location.href = "/results/" + this.state.stocks.toUpperCase();  
      } else if (uniqueStocks.indexOf(userInput) === -1){
        alert("Sorry that stock is not in the EarningStats watchlist"); 
      }
    } 
      this.setState({
        stocks: ""
      });
  };
  
  render() {
    return (
      <nav className="navbar navbar-dark bg-primary navbar-fixed-top">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              EarningStats
            </Link>
            
/*          <div className="formBox">
            <form>
              <div className="form-inline">
                <input
                  className="form-control"
                  value={this.state.stocks}
                  name="stocks"
                  onChange={this.handleInputChange}
                  type="text"
                  placeholder="Enter Stock Ticker"
                />
              </div>
              <button 
                className="btn btn-dark btn-md" 
                onClick={this.handleFormSubmit}><i className="fa fa-search" aria-hidden="true"></i>
              </button>
            </form>
          </div>
*/
        </div>
      </nav>
    )
  }
}

export default Navbar;