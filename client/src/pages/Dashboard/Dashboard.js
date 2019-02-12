import React, { Component } from "react";
import API from "../../utils/API";
import "./Dashboard.css";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <iframe width="800" height="600" 
          src="https://app.powerbi.com/view?r=eyJrIjoiYTVkOWQxOWQtMDI3YS00NmUwLWI1YjktNTJlMTI3MzY2NjlmIiwidCI6ImIwMGE1ZDU0LTI3MzAtNDA2OC04MGIwLTgxNTMwYjhhNDkwZiIsImMiOjJ9"
          frameborder="0" allowFullScreen="true">  
        </iframe>
      </div>
    )  
  }
 }         
export default Dashboard;