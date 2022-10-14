import { useForm, Controller } from "react-hook-form";
import {
  TextField,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Button,
} from "@mui/material";
import React from "react";
import "./styles.css";
import { useState } from "react";

function Experience() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const [checked, setChecked] = useState(false);
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const onSubmit = (data) => {
    console.log(data);
    console.log(errors);
    if (Object.keys(errors).length === 0) {
      window.location.assign("/FoodWater");
    }
  };

  const onClick = () => {
    window.location.assign("/LengthAndMeds");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="ExperienceInfo">
        <h1>Experience</h1>
        <p className="postsympt">
          After the Migraine, did you experience any of the following?
        </p>
        <Controller
          name="experience"
          control={control}
          defaultValue=""
          render={({
            field: { onChange, value, onBlur },
            fieldState: { error },
          }) => (
            <FormGroup
              required
              onChange={onChange}
              value={value}
              onBlur={onBlur}
              error={error}
            >
              <div className="gridContainer">
                <div className="col">
                  <FormControlLabel control={<Checkbox />} label="Confusion" />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Feeling Drained"
                  />
                  <FormControlLabel control={<Checkbox />} label="Dizziness" />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Pain when moving head"
                  />
                </div>

                <div className="col">
                  <FormControlLabel control={<Checkbox />} label="Elation" />
                  <FormControlLabel control={<Checkbox />} label="Sadness" />
                  <FormControlLabel control={<Checkbox />} label="None" />
                  <FormControlLabel
                    control={
                      <Checkbox checked={checked} onChange={handleChange} />
                    }
                    label="Other"
                  />
                </div>
              </div>
            </FormGroup>
          )}
          rules={{ required: "Must select at least one." }}
        />
        {checked && (
          <>
            <p>If you selected "other", please describe your experience:</p>
            <Controller
              name="otherExperience"
              control={control}
              defaultValue=""
              render={({
                field: { onChange, value, onBlur },
                fieldState: { error },
              }) => (
                <TextField
                  required
                  label="Other"
                  sx={{ width: 150 }}
                  size="small"
                  onChange={onChange}
                  onBlur={onBlur}
                  value={value}
                  error={!!error}
                  helperText={error ? error.message : null}
                />
              )}
              rules={{
                required: "This field is required if 'other' is selected.",
              }}
            />
          </>
        )}
        <p>
          Leading up to the Migraine, did you experience any of the following?
        </p>
        <Controller
          name="experience"
          control={control}
          defaultValue=""
          render={({
            field: { onChange, value, onBlur },
            fieldState: { error },
          }) => (
            <FormGroup
              required
              onChange={onChange}
              value={value}
              onBlur={onBlur}
              error={error}
            >
              <div className="gridContainer">
                <div className="col">
                  <FormControlLabel control={<Checkbox />} label="Poor Sleep" />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Constipation"
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Mood Changes"
                  />
                </div>

                <div className="col">
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Increased Urination"
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Fluid Retention"
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Frequent Yawning"
                  />
                </div>

                <div className="col">
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Neck Stiffness"
                  />
                  <FormControlLabel control={<Checkbox />} label="None" />
                  <FormControlLabel
                    control={
                      <Checkbox checked={checked} onChange={handleChange} />
                    }
                    label="Other"
                  />
                </div>
              </div>
            </FormGroup>
          )}
          rules={{ required: "Must select at least one." }}
        />
        {checked && (
          <>
            <p>If you selected "other", please describe your pre-symptoms:</p>
            <Controller
              name="otherExperience"
              control={control}
              defaultValue=""
              render={({
                field: { onChange, value, onBlur },
                fieldState: { error },
              }) => (
                <TextField
                  required
                  label="Other"
                  sx={{ width: 150 }}
                  size="small"
                  onChange={onChange}
                  onBlur={onBlur}
                  value={value}
                  error={!!error}
                  helperText={error ? error.message : null}
                />
              )}
              rules={{
                required: "This field is required if 'other' is selected.",
              }}
            />
          </>
        )}
        <div className="buttons">
          <Button
            onClick={onClick}
            className="button"
            variant="contained"
            sx={{
              marginTop: 5,
              marginRight: 1,
              backgroundColor: "primary",
              width: 125,
              "&:hover": { backgroundColor: "secondary" },
            }}
          >
            Previous
          </Button>
          <Button
            type="submit"
            className="button"
            variant="contained"
            sx={{
              marginTop: 5,
              marginLeft: 1,
              backgroundColor: "primary",
              width: 125,
              "&:hover": { backgroundColor: "secondary" },
            }}
          >
            Next
          </Button>
        </div>
      </div>
    </form>
  );
}

export default Experience;
