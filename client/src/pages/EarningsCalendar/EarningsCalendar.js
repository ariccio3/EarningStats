import React, { Component } from "react";
import "./EarningsCalendar.css";
import { Link } from "react-router-dom";

class EarningsCalendar extends Component {
  componentDidMount () {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <div className="iframe-container">
        <iframe           
          class="responsive-iframe"
          title="Dashboard"
          src="https://app.powerbi.com/view?r=eyJrIjoiNzFiYzU1NzMtMTY0Ny00OTBlLTgwMmYtZWQxODA4ODAzOTIyIiwidCI6IjFiYjBiNTBjLWNlNDktNGVhNy05NzRjLTdhZmI4NmYzOGIwZCIsImMiOjZ9&pageName=ReportSection1df5f5b8c3f4dc662d86" 
          frameborder="0" 
          allowFullScreen="true">  
        </iframe>
      </div>

    );
  }
}
          
export default EarningsCalendar;