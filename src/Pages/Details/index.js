import React from "react";
import { useParams } from "react-router-dom";
import "./styles.css";

const getSymptoms = (log) => {
  const symptoms = [];
  if (log.visionImpairments) {
    symptoms.push("Vision Impairments");
  }
  if (log.sensitivityToSound) {
    symptoms.push("Sensitivity to Sound");
  }
  if (log.dizziness) {
    symptoms.push("dizziness");
  }
  if (log.lightHeadedness) {
    symptoms.push("Light-Headedness");
  }
  if (log.visionAuras) {
    symptoms.push("Vision Auras");
  }
  if (log.throbbingPulsing) {
    symptoms.push("Throbbing/Pulsing");
  }
  if (log.nausea) {
    symptoms.push("Nausea");
  }
  if (log.vomitting) {
    symptoms.push("Vomitting");
  }
  if (log.sensitivityToLight) {
    symptoms.push("Sensitivity to Light");
  }
  if (log.noSymptoms) {
    symptoms.push("None");
  }
  if (log.otherSymptomsBox) {
    symptoms.push(log.otherSymptoms);
  }
  return symptoms;
};

function Details() {
  const logs = localStorage.getItem("logs");
  const parseLogs = JSON.parse(logs);
  const { id } = useParams();

  const log = parseLogs.find((element) => (element = { id }));
  console.log(log);

  return (
    <div className="container">
      <h1 className="header">Migraine Details</h1>
      <div className="surveyInfo">
        <h3>Age: {log.Age}</h3>
        <h3>Date of Migraine: {log.dateOfMigraine}</h3>
        <h3>Time of Migraine: {log.timeOfMigraine}</h3>
        <h3>Location of Migraine: {log.locationOfMigraine}</h3>
        <h3>Location of Pain: {log.painOrigin}</h3>
        <h3>Severity of Pain: {log.painSeverity}</h3>
        <h3>Time of Migraine: {log.timeOfMigraine}</h3>
        <h3>Migraine Symptoms: {getSymptoms(log).join(", ")} </h3>
        <h3>Length of Migraine: {log.lengthOfMigraine}</h3>
        <h3>Medication: {log.medsForMigraine}</h3>
        <h3>Medication Helpful: {log.didMedsHelp}</h3>
        <h3>Full Recovery Time: {log.recoveryTime}</h3>
        <h3>Post-Migraine Symptoms:</h3>
        <h3>Pre-Migraine Symptoms:</h3>
        <h3>Day of Migraine Water Intake: {log.dayOfMigraineWater}</h3>
        <h3>Day of Migraine Alternate Drinks: {log.dayOfMigraineAltDrinks}</h3>
        <h3>Pre-Migraine Water Intake: {log.preMigraineWater}</h3>
        <h3>Pre-Migraine Alternate Drinks: {log.preMigraineAltDrinks}</h3>
        <h3>Day of Migraine Breakfast: {log.breakfast}</h3>
        <h3>Day of Migraine Lunch: {log.lunch}</h3>
        <h3>Day of Migraine Dinner: {log.dinner}</h3>
        <h3>Day of Migraine Snacks/Dessert: {log.snacksAndDessert}</h3>
        <h3>Date of Next Period: {log.dateOfNextPeriod}</h3>
        <h3>Extenuating Circumstances: </h3>
        <h3>Other Relevant Info: {log.otherMiscInfo}</h3>
      </div>
    </div>
  );
}

export default Details;
