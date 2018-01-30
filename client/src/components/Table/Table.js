import React from "react";
import "./Table.css";

const Table = props => (
  <div className="table">
    <td className="list-group-item list-group-item-action">{props[1]}</td>
    <td className="list-group-item list-group-item-action">{props.stock}</td>
  </div>
);

export default Table;