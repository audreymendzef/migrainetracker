import { useForm } from "react-hook-form";

function Survey() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <p>How old are you?</p>
      <input type="number" {...register("age", { min: "5", max: "99" })} />
      <p>What was the date of the Migraine?</p>
      <input type="date" {...register("date", { valueAsDate: true })} />
      <p>What time of day was the Migraine?</p>
      <select {...register("time")}>
        <option value="early morning">early morning</option>
        <option value="late morning">late morning</option>
        <option value="around noon">around noon</option>
        <option value="early afternoon">early afternoon</option>
        <option value="mid afternoon">mid afternoon</option>
        <option value="late afternoon">late afternoon</option>
        <option value="early evening">early evening</option>
        <option value="late evening">late evening</option>
        <option value="other">other</option>
      </select>
      <p>Where were you when you had the Migraine?</p>
      <input type="text" {...register("location")} />
      <p>Where did the pain originate in your head?</p>
      <input type="text" {...register("painLoc")} />
      <p>How severe was the level of pain?</p>
      <input type="range" {...register("severity", { min: "0", max: "10" })} />
      <p>What symptoms aside from pain did you experience?</p>
      <label>
        <input type="checkbox" {...register("symptoms")} />
        Vision Impairments/Auras
      </label>
      <label>
        <input type="checkbox" {...register("symptoms")} />
        Dizziness
      </label>
      <label>
        <input type="checkbox" {...register("symptoms")} />
        Light-headedness
      </label>
      <label>
        <input type="checkbox" {...register("symptoms")} />
        Throbbing/Pulsing
      </label>
      <label>
        <input type="checkbox" {...register("symptoms")} />
        Nausea
      </label>
      <label>
        <input type="checkbox" {...register("symptoms")} />
        Vomiting
      </label>
      <label>
        <input type="checkbox" {...register("symptoms")} />
        Sensitivity to Light or Sound
      </label>
      <label>
        <input type="checkbox" {...register("symptoms")} />
        Other
      </label>
      <p>If you selected "other", please describe your symptoms:</p>
      <input type="text" {...register("symptoms")} />

      <p>How long did the Migraine Last?</p>
      <input type="text" {...register("length")} />

      <p>How long did it take to feel 100% recovered?</p>
      <select {...register("recovery")}>
        <option value="less than an hour">less than an hour</option>
        <option value="+1 hour">+1 hour</option>
        <option value="+2 hours">+2 hours</option>
        <option value="+3 hours">+3 hours</option>
        <option value="+4 hours">+4 hours</option>
        <option value="+5 hours">+5 hours</option>
        <option value="+6 hours">+6 hours</option>
        <option value="+7 hours">+7 hours</option>
        <option value="+8 hours">+8 hours</option>
        <option value="+9 hours">+9 hours</option>
        <option value="+10 hours">+10 hours</option>
        <option value="+11 hours">+11 hours</option>
        <option value="+12 hours">+12 hours</option>
        <option value="over 24 hours">over 24 hours</option>
        <option value="over 48 hours">over 48 hours</option>
      </select>

      <p>After the Migraine, did you experience any of the following?</p>
      <label>
        <input type="checkbox" {...register("postSymptoms")} />
        Confusion
      </label>
      <label>
        <input type="checkbox" {...register("postSymptoms")} />
        Feeling Drained
      </label>
      <label>
        <input type="checkbox" {...register("postSymptoms")} />
        Pain when moving your head quickly
      </label>
      <label>
        <input type="checkbox" {...register("postSymptoms")} />
        Elation
      </label>
      <label>
        <input type="checkbox" {...register("postSymptoms")} />
        Sadness
      </label>
      <label>
        <input type="checkbox" {...register("postSymptoms")} />
        Other
      </label>

      <p>If you selected "other", please describe your symptoms:</p>
      <input type="text" {...register("postSymptoms")} />

      <p>Leading up to the Migraine, did you notice any of the following?</p>
      <label>
        <input type="checkbox" {...register("preSymptoms")} />
        Poor Sleep
      </label>
      <label>
        <input type="checkbox" {...register("preSymptoms")} />
        Constipation
      </label>
      <label>
        <input type="checkbox" {...register("preSymptoms")} />
        Mood changes: from drepression to euphoria
      </label>
      <label>
        <input type="checkbox" {...register("preSymptoms")} />
        Neck Stiffness
      </label>
      <label>
        <input type="checkbox" {...register("preSymptoms")} />
        Increased Urination
      </label>
      <label>
        <input type="checkbox" {...register("preSymptoms")} />
        Fluid Retention
      </label>
      <label>
        <input type="checkbox" {...register("preSymptoms")} />
        Frequent Yawning
      </label>
      <label>
        <input type="checkbox" {...register("preSymptoms")} />
        Other
      </label>
      <p>If you selected "other", please describe your symptoms:</p>
      <input type="text" {...register("preSymptoms")} />

      <p>List any medications you took for the Migraine:</p>
      <input type="text" {...register("medication")} />

      <p>Did the medication help the pain level?</p>
      <input type="text" {...register("medHelpfulness")} />

      <p>How much water did you consume on the day of the Migraine?</p>
      <input type="number" {...register("dayOfWater")} />

      <p>
        How much water were you drinking on the days leading up to the migraine?
      </p>
      <input type="number" {...register("preWater")} />

      <p>What did you eat on the day of the migraine?</p>
      <label>
        <input type="text" {...register("food")} />
        Breakfast
      </label>
      <label>
        <input type="text" {...register("food")} />
        Lunch
      </label>
      <label>
        <input type="text" {...register("food")} />
        Dinner
      </label>
      <label>
        <input type="text" {...register("food")} />
        Snacks/Dessert
      </label>

      <p>If applicable, when is your next period?</p>
      <input type="date" {...register("period")} />

      <p>Were there any extenuating circumstances?</p>
      <label>
        <input type="checkbox" {...register("circumstances")} />
        Under large amounts of stress
      </label>
      <label>
        <input type="checkbox" {...register("circumstances")} />
        Sick
      </label>
      <label>
        <input type="checkbox" {...register("circumstances")} />
        High levels of exertion/exercise
      </label>
      <label>
        <input type="checkbox" {...register("circumstances")} />
        Exposure to flashing lights
      </label>
      <label>
        <input type="checkbox" {...register("circumstances")} />
        Changes to weather/pressure
      </label>
      <label>
        <input type="checkbox" {...register("circumstances")} />
        Other
      </label>
      <p>If you selected "other", please describe your symptoms:</p>
      <input type="text" {...register("circumstances")} />

      <p>Any other remaining information that might be relevant?</p>
      <input type="textarea" {...register("relatedInfo")} />

      <input type="submit" />
    </form>
  );
}

export default Survey;
