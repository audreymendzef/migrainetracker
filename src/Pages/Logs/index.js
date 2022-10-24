import React from "react";
import "./styles.css";

function Logs() {
  const logs = localStorage.getItem("logs");
  const parseLogs = JSON.parse(logs);
  console.log("parseLogs", parseLogs);

  return (
    <div className="logPage">
      <h1 className="header">Migraine History</h1>
      <div className="container">
        <div className="titleContainer">
          <div className="dateOfMigraineTitle">Date of Migraine</div>
          <div className="detailInfoTitle">Information</div>
        </div>
        <div className="dateAndLink">
          {Array.isArray(parseLogs) &&
            parseLogs.map(({ id, dateOfMigraine }) => (
              <div className="storeInfo">
                <h4 className="dateFromStore" key={id}>
                  {dateOfMigraine}
                </h4>
                <a className="detailsLink" href="/Details" key={id}>
                  Details
                </a>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Logs;
