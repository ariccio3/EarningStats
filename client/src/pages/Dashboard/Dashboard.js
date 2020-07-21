import React, { Component } from "react";
import API from "../../utils/API";
import "./Dashboard.css";

class Dashboard extends Component {
  render() {
    return (
      <div className="container">
        <iframe width="933" height="700"
         src="https://app.powerbi.com/view?r=eyJrIjoiNzFiYzU1NzMtMTY0Ny00OTBlLTgwMmYtZWQxODA4ODAzOTIyIiwidCI6IjFiYjBiNTBjLWNlNDktNGVhNy05NzRjLTdhZmI4NmYzOGIwZCIsImMiOjZ9" 
         frameborder="0" allowFullScreen="true">
        </iframe>
      </div>
    )  
  }
 }         
export default Dashboard;