import React from "react";

const getCircumstances = (log) => {
  const circumstances = [];
  if (log.stress) {
    circumstances.push("Stress");
  }
  if (log.sickness) {
    circumstances.push("Sickness");
  }
  if (log.excessiveExercise) {
    circumstances.push("Excessive Exercise");
  }
  if (log.excessiveExertion) {
    circumstances.push("Excessive Exertion");
  }
  if (log.exposureToFlashingLights) {
    circumstances.push("Exposure to Flashing Lights");
  }
  if (log.changesToWeatherOrPressure) {
    circumstances.push("Changes to Weather/Pressure");
  }
  if (log.noCircumstances) {
    circumstances.push("None");
  }
  if (log.otherCircumstancesBox) {
    circumstances.push(log.otherCircumstances);
  }
  return circumstances;
};

export default getCircumstances;
