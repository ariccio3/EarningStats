import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const placeHolderInput= window.location.href.split("#");
const queryInput = placeHolderInput[1];
// console.log(queryInput)

class Navbar extends Component {
  // Setting the component's initial state
  state = {
    stocks: ""
  }

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  }

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

  if(queryInput) {
    window.location.href = "/results/nonuser/" + this.state.stocks + "/#" +  queryInput
  } else {
    window.location.href = "/results/" + this.state.stocks.toUpperCase() }

    if (!this.state.stocks) {
      alert("Please enter a stock you'd like to search for");
    } else {

      this.setState({
        stocks: ""
        
      });
    }
  }

  render() {
    return (
      <nav className="navbar navbar-dark bg-primary navbar-fixed-top">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              <strong>EarningStats</strong>
            </Link>
            <form>
              <div className="form-inline">
                <input
                  className="form-control"
                  value={this.state.stocks}
                  name="stocks"
                  onChange={this.handleInputChange}
                  type="text"
                  placeholder="Search for a Stock"
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