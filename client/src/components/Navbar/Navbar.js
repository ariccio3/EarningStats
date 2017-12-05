import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
// import {Alert} from "react-bootstrap";

class Navbar extends Component {
  // Setting the component's initial state
  state = {
    stocks: ""
  }

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    });
  }

  handleFormSubmit = event => {
    event.preventDefault();

    if (!this.state.stocks) {
      alert("Please enter a stock ticker you'd like to search for");
    } else {
      window.location.href = "/results/" + this.state.stocks.toUpperCase()
    }
      this.setState({
        stocks: ""
      });
  }
  
  render() {
    return (
      <nav className="navbar navbar-dark bg-primary navbar-fixed-top">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              EarningStats
            </Link>
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
      </nav>
    )
  }
}

export default Navbar;