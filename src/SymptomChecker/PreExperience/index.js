import React from "react";

const getPreExperience = (log) => {
  const preexperience = [];
  if (log.poorSleep) {
    preexperience.push("Poor Sleep");
  }
  if (log.constipation) {
    preexperience.push("Constipation");
  }
  if (log.moodChanges) {
    preexperience.push("Mood Changes");
  }
  if (log.increasedUrination) {
    preexperience.push("Increased Urination");
  }
  if (log.fluidRetention) {
    preexperience.push("Fluid Retention");
  }
  if (log.frequentYawning) {
    preexperience.push("Frequent Yawning");
  }
  if (log.neckStiffness) {
    preexperience.push("Neck Stiffness");
  }
  if (log.noSymptomsBefore) {
    preexperience.push("None");
  }
  if (log.otherSymptomsBeforeBox) {
    preexperience.push(log.otherSymptomsBefore);
  }
  return preexperience;
};

export default getPreExperience;
