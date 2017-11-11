import React, { Component } from "react";
import API from "../../utils/API";
import NonCard from "../../components/NonCard";
import {Grid} from "react-bootstrap";
import {Row} from "react-bootstrap";
import {Col} from "react-bootstrap";
import "./cardStyle.css";
// import { Link } from "react-router-dom";

class NonResults extends Component {
  state = {
    stocks: []
  };

  componentDidMount() {
    this.loadResults();
  }

  componentDidUpdate() {
    this.loadResults();
  }

  loadResults = () => {
    API.getStats(this.props.match.params.stock)
    .then(res => this.setState({ stocks: res.data }))
    .catch(err => console.log(err));
  };

    render() {
      return (
        <div>
          <div className="container">
        </div>
        <Grid>
          <Row>
              {this.state.stocks.length ? (
                <div>
                {this.state.stocks.map(result => (
                  <Col xs={6} md={4} lg={3}>

                  <NonCard
                    key={result._id}
                    stock={result.stock}
                    quarter={result.quarter}
                    date={result.date}
                    priceBeforeEarnings={result.priceBeforeEarnings}
                    openPriceAfterEarnings={result.openPriceAfterEarnings}
                    expectedMove={result.expectedMove} 
                    actualMove={result.actualMove}
                    absValActualMove={result.absValActualMove}
                    actualPercentOfExpectedMove={result.actualPercentOfExpectedMove}
                    insideOutside={result.insideOutside}
                    expectedPercentMove={result.expectedPercentMove}
                    actualPercentMove={result.actualPercentMove}
                  /></Col>
                ))}
                </div>
            ) : (
              <h3>No earningStats for that stock yet!</h3>
            )}           
          </Row>
        </Grid>
        </div>
    );
  }
}
          
export default NonResults;