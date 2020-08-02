import React, { Component } from "react";
//import API from "../../utils/API";
import "./Dashboard.css";

class Dashboard extends Component {
  render() {
    return (
      <div className="iframe-container">
        <iframe 
          class="responsive-iframe"
          title="Dashboard"
          src="https://app.powerbi.com/view?r=eyJrIjoiNzFiYzU1NzMtMTY0Ny00OTBlLTgwMmYtZWQxODA4ODAzOTIyIiwidCI6IjFiYjBiNTBjLWNlNDktNGVhNy05NzRjLTdhZmI4NmYzOGIwZCIsImMiOjZ9"  
          frameborder="0" 
          allowFullScreen="true">
        </iframe>
      </div>
    )  
  }
 }         
export default Dashboard;
