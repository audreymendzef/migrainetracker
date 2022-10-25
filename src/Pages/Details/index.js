import React from "react";
import { useParams } from "react-router-dom";
import getSymptoms from "SymptomChecker/Symptoms";
import getPostExperience from "SymptomChecker/PostExperience";
import getPreExperience from "SymptomChecker/PreExperience";
import getCircumstances from "SymptomChecker/Circumstances";
import "./styles.css";

function Details() {
  const logs = localStorage.getItem("logs");
  const parseLogs = JSON.parse(logs);
  const { id } = useParams();

  const log = parseLogs.find((element) => (element = { id }));
  console.log(log);

  return (
    <div className="container">
      <h1 className="header">Migraine Details</h1>
      <div className="surveyInfoContainer">
        <div className="question">
          <h3>Age:</h3>
        </div>
        <div className="answer">
          <h3>{log.Age}</h3>
        </div>
        <div className="question">
          <h3>Date of Migraine:</h3>
        </div>
        <div className="answer">
          <h3>{log.dateOfMigraine}</h3>
        </div>
        <div className="question">
          <h3>Time of Migraine:</h3>
        </div>
        <div className="answer">
          <h3>{log.timeOfMigraine}</h3>
        </div>
        <div className="question">
          <h3>Location of Migraine:</h3>
        </div>
        <div className="answer">
          <h3>{log.locationOfMigraine}</h3>
        </div>
        <div className="question">
          <h3>Location of Pain:</h3>
        </div>
        <div className="answer">
          <h3>{log.painOrigin}</h3>
        </div>
        <div className="question">
          <h3>Severity of Pain:</h3>
        </div>
        <div className="answer">
          <h3>{log.painSeverity}</h3>
        </div>
        <div className="question">
          <h3>Time of Migraine:</h3>
        </div>
        <div className="answer">
          <h3>{log.timeOfMigraine}</h3>
        </div>
        <div className="question">
          <h3>Migraine Symptoms:</h3>
        </div>
        <div className="answer">
          <h3>{getSymptoms(log).join(", ")} </h3>
        </div>
        <div className="question">
          <h3>Length of Migraine:</h3>
        </div>
        <div className="answer">
          <h3>{log.lengthOfMigraine}</h3>
        </div>
        <div className="question">
          <h3>Medication:</h3>
        </div>
        <div className="answer">
          <h3>{log.medsForMigraine}</h3>
        </div>
        <div className="question">
          <h3>Medication Helpful:</h3>
        </div>
        <div className="answer">
          <h3>{log.didMedsHelp}</h3>
        </div>
        <div className="question">
          <h3>Full Recovery Time:</h3>
        </div>
        <div className="answer">
          <h3>{log.recoveryTime}</h3>
        </div>
        <div className="question">
          <h3>Post-Migraine Symptoms:</h3>
        </div>
        <div className="answer">
          <h3>{getPostExperience(log).join(", ")}</h3>
        </div>
        <div className="question">
          <h3>Pre-Migraine Symptoms:</h3>
        </div>
        <div className="answer">
          <h3>{getPreExperience(log).join(", ")}</h3>
        </div>
        <div className="question">
          <h3>Day of Migraine Water Intake (oz):</h3>
        </div>
        <div className="answer">
          <h3>{log.dayOfMigraineWater}</h3>
        </div>
        <div className="question">
          <h3>Day of Migraine Alternate Drinks:</h3>
        </div>
        <div className="answer">
          <h3>{log.dayOfMigraineAltDrinks}</h3>
        </div>
        <div className="question">
          <h3>Pre-Migraine Water Intake (oz):</h3>
        </div>
        <div className="answer">
          <h3>{log.preMigraineWater}</h3>
        </div>
        <div className="question">
          <h3>Pre-Migraine Alternate Drinks:</h3>
        </div>
        <div className="answer">
          <h3>{log.preMigraineAltDrinks}</h3>
        </div>
        <div className="question">
          <h3>Day of Migraine Breakfast:</h3>
        </div>
        <div className="answer">
          <h3>{log.breakfast}</h3>
        </div>
        <div className="question">
          <h3>Day of Migraine Lunch:</h3>
        </div>
        <div className="answer">
          <h3>{log.lunch}</h3>
        </div>
        <div className="question">
          <h3>Day of Migraine Dinner:</h3>
        </div>
        <div className="answer">
          <h3>{log.dinner}</h3>
        </div>
        <div className="question">
          <h3>Day of Migraine Snacks/Dessert:</h3>
        </div>
        <div className="answer">
          <h3>{log.snacksAndDessert}</h3>
        </div>
        <div className="question">
          <h3>Date of Next Period:</h3>
        </div>
        <div className="answer">
          <h3>{log.dateOfNextPeriod}</h3>
        </div>
        <div className="question">
          <h3>Extenuating Circumstances:</h3>
        </div>
        <div className="answer">
          <h3>{getCircumstances(log).join(", ")}</h3>
        </div>
        <div className="question">
          <h3>Other Relevant Info:</h3>
        </div>
        <div className="answer">
          <h3>{log.otherMiscInfo}</h3>
        </div>
      </div>
    </div>
  );
}

export default Details;
