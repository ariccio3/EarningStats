import React, { Component } from "react";
// import Footer from "../../components/Footer";
import "./Home.css";
// import { Link } from "react-router-dom";

const placeHolderInput= window.location.href.split("#");
const queryInput = placeHolderInput[1]

class Home extends Component {
  // Setting the component's initial state
  state = {
    stocks: ""
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();


    if(queryInput) {
      window.location.href = "/results/nonuser/" + this.state.stocks 
    }
        
    if (!this.state.stocks) {
      alert("Please enter a stock you'd like to search for");
    } else {
      this.setState({
        stocks: ""
      });
    }
  };

  render() {
      // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
    <div>
      <p>Home Page</p>
    </div>  
    );
  }
}

export default Home;
