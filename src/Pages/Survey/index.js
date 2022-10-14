import { useState } from "react";

import General from "./General";
import Symptoms from "./Symptoms";
import LengthAndMeds from "./LengthAndMeds";
import Experience from "./Experience";
import FoodWater from "./FoodWater";
import Misc from "./Misc";

import "./styles.css";

// const steps = [
//   { id: "General" },
//   { id: "Symptoms" },
//   { id: "LengthAndMeds" },
//   { id: "Experience" },
//   { id: "FoodWater" },
//   { id: "submit"}
// ];

const Survey = () => {
  const [step, setStep] = useState(0);

  const goBack = () => setStep(step - 1);
  const goForward = () => setStep(step + 1);

  switch (step) {
    case 0:
      return <General goBack={goBack} goForward={goForward} />;
    case 1:
      return <Symptoms goBack={goBack} goForward={goForward} />;
    case 2:
      return <LengthAndMeds goBack={goBack} goForward={goForward} />;
    case 3:
      return <Experience goBack={goBack} goForward={goForward} />;
    case 4:
      return <FoodWater goBack={goBack} goForward={goForward} />;
    case 5:
      return <Misc goBack={goBack} goForward={goForward} />;
    default:
      return null;
  }
};

export default Survey;
