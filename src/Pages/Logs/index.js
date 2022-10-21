import React from "react";
import "./styles.css";

function Logs() {
  const logs = localStorage.getItem("logs");
  const parseLogs = JSON.parse(logs);
  console.log("parseLogs", parseLogs);

  return (
    <div className="logPage">
      <h1 className="header">Migraine History</h1>
      <div className="gridContainer">
        <div className="gridInfo1">Date of Migraine</div>
        <div className="gridInfo2">Information</div>
        <div className="gridInfo">
          {Array.isArray(parseLogs) &&
            parseLogs.map(({ id, dateOfMigraine }) => (
              <h4 key={id}>{dateOfMigraine}</h4>
            ))}
        </div>
        <div className="gridInfo">
          <a href="/Details">Details</a>
        </div>
      </div>
    </div>
  );
}

export default Logs;
