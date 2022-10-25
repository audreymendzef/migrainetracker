import React from "react";

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

export default getSymptoms;
