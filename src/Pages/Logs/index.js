import React from "react";
import "./styles.css";

function Logs() {
  return (
    <div className="logPage">
      <h1 className="header">Migraine History</h1>
      <div className="gridContainer">
        <div className="gridInfo1">Date of Migraine</div>
        <div className="gridInfo2">Information</div>
        <div className="gridInfo">10/21/22</div>
        <div className="gridInfo">
          <a href="/Details">Details</a>
        </div>
      </div>
    </div>
  );
}

export default Logs;
