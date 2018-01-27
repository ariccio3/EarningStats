import React, { Component } from "react";
import API from "../../utils/API";
import Article from "../../components/Article";
import Sidebar from "../../components/Sidebar";
import "./Home.css";

class Home extends Component {
  state = {
    watchList: []
  };

  componentDidMount() {
    window.scrollTo(0, 0);    
    this.loadWatchList();
  }

  loadWatchList = () => {
    API.getStocks()
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
    return arr; 
  };  

  render() { 
    console.log(this.state.watchList)
    let uniqueStocks = this.watchList();
    let list = uniqueStocks.map((result) => 
      <Sidebar key={result.toString()} stock={result} />
    ); 
    return (
      <div className="container">
        <ul className="list-group">Current Watchlist
          {list}
        </ul>
        <div className="article">
          <Article />
        </div>
      </div>
    );
  }
}

export default Home;