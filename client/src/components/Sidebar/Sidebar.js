import React from "react";
// import {Button} from "react-bootstrap";
import "./Sidebar.css";

const Sidebar = props => (
  <div>
      <a href={"/results/"+ props.stock} className="list-group-item list-group-item-action">{props.stock}</a>
  </div>
);

export default Sidebar;