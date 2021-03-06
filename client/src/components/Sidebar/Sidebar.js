import React from "react";
import "./Sidebar.css";

const Sidebar = props => (
  <div className="sidebar">
    <a href={"/results/"+ props.stock} className="list-group-item list-group-item-action">{props.stock}</a>
  </div>
);

export default Sidebar;