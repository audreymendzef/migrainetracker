import React from "react";

const getPostExperience = (log) => {
  const postexperience = [];
  if (log.confusion) {
    postexperience.push("Confusion");
  }
  if (log.feelingDrained) {
    postexperience.push("Feeling Drained");
  }
  if (log.dizzinessAfter) {
    postexperience.push("Dizziness");
  }
  if (log.painWhenMovingHead) {
    postexperience.push("Pain when moving head");
  }
  if (log.elation) {
    postexperience.push("Elation");
  }
  if (log.sadness) {
    postexperience.push("Sadness");
  }
  if (log.noSymptomsAfter) {
    postexperience.push("None");
  }
  if (log.otherSymptomsAfterBox) {
    postexperience.push(log.otherSymptomsAfter);
  }
  return postexperience;
};

export default getPostExperience;
