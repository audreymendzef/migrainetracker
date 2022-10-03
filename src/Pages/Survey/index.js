import { useState } from "react";

import General from "./General";
import Symptoms from "./Symptoms";
import LengthAndMeds from "./LengthAndMeds";
import Experience from "./Experience";
import FoodWater from "./FoodWater";
import Misc from "./Misc";

import "./styles.css";

const Survey = () => {
  const [step, setStep] = useState(0);

  const goBack = () => setStep(step - 1);
  const goForward = () => setStep(step + 1);

  switch (step) {
    case 0:
      return <General goBack={goBack} goForward={goForward} />;
    // case "address":
    //   return <Address {...props} />;
    // case "contact":
    //   return <Contact {...props} />;
    // case "review":
    //   return <Review {...props} />;
    // case "submit":
    //   return <Submit {...props} />;
    default:
      return null;
  }
};

export default Survey;
