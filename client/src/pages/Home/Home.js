import React, { Component } from "react";
// import Footer from "../../components/Footer";
import "./Home.css";
// import { Link } from "react-router-dom";

const placeHolderInput= window.location.href.split("#");
const queryInput = placeHolderInput[1]

class Home extends Component {
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
    event.preventDefault();

    if(queryInput) {
      window.location.href = "/results/" + this.state.stocks 
    }
        
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
    <div>
      <p>Home Page</p>
    </div>  
    );
  }
}

export default Home;
