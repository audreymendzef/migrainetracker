import { useForm, Controller } from "react-hook-form";
import {
  TextField,
  Slider,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Button,
  Link,
} from "@mui/material";
import React from "react";
import "./styles.css";
import { useState } from "react";

function Symptoms({ goBack, goForward }) {
  const {
    control,
    handleSubmit,
    watch,
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
      window.location.assign("/LengthAndMeds");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="symptoms">
        <h1>Symptoms</h1>
        <p>Where did the pain originate in your head?</p>
        <Controller
          name="painOrigin"
          control={control}
          defaultValue=""
          render={({
            field: { onChange, value, onBlur },
            fieldState: { error },
          }) => (
            <TextField
              sx={{ m: 1, witdh: 150 }}
              required
              size="small"
              type="text"
              label="Location"
              variant="outlined"
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              error={!!error}
              helperText={error ? error.message : null}
            />
          )}
          rules={{ required: "Location is required." }}
        />
        <p>How severe was the level of pain?</p>
        <Controller
          name="severity"
          control={control}
          defaultValue=""
          render={({
            field: { onChange, value, onBlur },
            fieldState: { error },
          }) => (
            <Slider
              required
              sx={{ width: 200 }}
              aria-label="Severity"
              defaultValue={1}
              valueLabelDisplay="auto"
              step={1}
              marks
              min={1}
              max={10}
              onChange={onChange}
              onBlur={onBlur}
              error={error}
            />
          )}
        />
        <p>What symptoms aside from pain did you experience?</p>
        <Controller
          name="altSymptoms"
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
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Vision Impairments"
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Sensitivity to Sound"
                  />
                  <FormControlLabel control={<Checkbox />} label="Dizziness" />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Light-headedness"
                  />
                </div>

                <div className="col">
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Vision Auras"
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Throbbing/Pulsing"
                  />
                  <FormControlLabel control={<Checkbox />} label="Nausea" />
                  <FormControlLabel control={<Checkbox />} label="Vomitting" />
                </div>

                <div className="col">
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Sensitivity to Light"
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
            <p>If you selected "other", please describe your symptoms:</p>
            <Controller
              name="otherSymptoms"
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
            type="submit"
            className="button"
            variant="contained"
            sx={{
              marginTop: 3,
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
              marginTop: 3,
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

export default Symptoms;
