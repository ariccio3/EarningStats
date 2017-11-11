import React from "react";
// import {Thumbnail} from "react-bootstrap";
import "./NonCard.css";


const NonCard = props => (
  <div>
      <ul>
        <li className="text-center">
           <strong>{props.stock}</strong>
        </li>
        <div className="skill">
        <li>
          <strong>quarter: </strong>{props.quarter.replace(/,/g, ", ")}
        </li>
        <li>
          <strong>date:</strong> {props.date}, {props.state}
        </li>
        <li>
          <strong>priceBeforeEarnings:</strong> {props.priceBeforeEarnings}
        </li>
        <li>
          <strong>openPriceAfterEarnings:</strong> {props.openPriceAfterEarnings}
        </li>
        <li>
          <strong>expectedMove:</strong> {props.expectedMove}
        </li>
        <li>
          <strong>actualMove:</strong> {props.actualMove}
        </li>
        <li>
          <strong>absValActualMove:</strong> {props.absValActualMove}
        </li>
        <li>
          <strong>actualPercentOfExpectedMove:</strong> {props.actualPercentOfExpectedMove}
        </li>
        <li>
          <strong>insideOutside:</strong> {props.insideOutside}
        </li>
        <li>
          <strong>expectedPercentMove:</strong> {props.expectedPercentMove}
        </li>
        </div>
        <li><br></br>
          <strong>actualPercentMove:</strong> <em>{props.actualPercentMove}.</em>
        </li>
      </ul>
  </div>
);

export default NonCard;