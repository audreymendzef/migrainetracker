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
import { useNavigate, Link } from "react-router-dom";

function Experience({ store, setStore }) {
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ mode: "onBlur", defaultValues: store });
  let navigate = useNavigate();

  const onSubmit = (data) => {
    setStore({
      ...store,
      ...data,
    });
    if (Object.keys(errors).length === 0) {
      navigate("/FoodWater");
    }
  };

  const isOtherSymptomsAfterBox = watch("otherSymptomsAfterBox");
  const isOtherSymptomsBeforeBox = watch("otherSymptomsBeforeBox");

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="ExperienceInfo">
        <h1>Experience</h1>
        <p className="postsympt">
          After the Migraine, did you experience any of the following?
        </p>
        <div className="gridContainer">
          <div className="col">
            <Controller
              name="confusion"
              control={control}
              render={({
                field: { onChange, value, onBlur },
                fieldState: { error },
              }) => (
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        onChange={onChange}
                        checked={value}
                        onBlur={onBlur}
                        error={error}
                      />
                    }
                    label="Confusion"
                  />
                </FormGroup>
              )}
            />

            <Controller
              name="feelingDrained"
              control={control}
              render={({
                field: { onChange, value, onBlur },
                fieldState: { error },
              }) => (
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        onChange={onChange}
                        checked={value}
                        onBlur={onBlur}
                        error={error}
                      />
                    }
                    label="Feeling Drained"
                  />
                </FormGroup>
              )}
            />

            <Controller
              name="dizzinessAfter"
              control={control}
              render={({
                field: { onChange, value, onBlur },
                fieldState: { error },
              }) => (
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        onChange={onChange}
                        checked={value}
                        onBlur={onBlur}
                        error={error}
                      />
                    }
                    label="Dizziness"
                  />
                </FormGroup>
              )}
            />

            <Controller
              name="painWhenMovingHead"
              control={control}
              render={({
                field: { onChange, value, onBlur },
                fieldState: { error },
              }) => (
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        onChange={onChange}
                        checked={value}
                        onBlur={onBlur}
                        error={error}
                      />
                    }
                    label="Pain when moving head"
                  />
                </FormGroup>
              )}
            />
          </div>

          <div className="col">
            <Controller
              name="elation"
              control={control}
              render={({
                field: { onChange, value, onBlur },
                fieldState: { error },
              }) => (
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        onChange={onChange}
                        checked={value}
                        onBlur={onBlur}
                        error={error}
                      />
                    }
                    label="Elation"
                  />
                </FormGroup>
              )}
            />

            <Controller
              name="sadness"
              control={control}
              render={({
                field: { onChange, value, onBlur },
                fieldState: { error },
              }) => (
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        onChange={onChange}
                        checked={value}
                        onBlur={onBlur}
                        error={error}
                      />
                    }
                    label="Sadness"
                  />
                </FormGroup>
              )}
            />

            <Controller
              name="noSymptomsAfter"
              control={control}
              render={({
                field: { onChange, value, onBlur },
                fieldState: { error },
              }) => (
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        onChange={onChange}
                        checked={value}
                        onBlur={onBlur}
                        error={error}
                      />
                    }
                    label="None"
                  />
                </FormGroup>
              )}
            />

            <Controller
              name="otherSymptomsAfterBox"
              control={control}
              render={({
                field: { onChange, value, onBlur },
                fieldState: { error },
              }) => (
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        onChange={onChange}
                        checked={value}
                        onBlur={onBlur}
                        error={error}
                      />
                    }
                    label="Other"
                  />
                </FormGroup>
              )}
            />
          </div>
        </div>
        {isOtherSymptomsAfterBox && (
          <>
            <p>If you selected "other", please describe your experience:</p>
            <Controller
              name="otherSymptomsAfter"
              control={control}
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
        <div className="gridContainer">
          <div className="col">
            <Controller
              name="poorSleep"
              control={control}
              render={({
                field: { onChange, value, onBlur },
                fieldState: { error },
              }) => (
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        onChange={onChange}
                        checked={value}
                        onBlur={onBlur}
                        error={error}
                      />
                    }
                    label="Poor Sleep"
                  />
                </FormGroup>
              )}
            />

            <Controller
              name="constipation"
              control={control}
              render={({
                field: { onChange, value, onBlur },
                fieldState: { error },
              }) => (
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        onChange={onChange}
                        checked={value}
                        onBlur={onBlur}
                        error={error}
                      />
                    }
                    label="Constipation"
                  />
                </FormGroup>
              )}
            />

            <Controller
              name="moodChanges"
              control={control}
              render={({
                field: { onChange, value, onBlur },
                fieldState: { error },
              }) => (
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        onChange={onChange}
                        checked={value}
                        onBlur={onBlur}
                        error={error}
                      />
                    }
                    label="Mood Changes"
                  />
                </FormGroup>
              )}
            />
          </div>

          <div className="col">
            <Controller
              name="increasedUrination"
              control={control}
              render={({
                field: { onChange, value, onBlur },
                fieldState: { error },
              }) => (
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        onChange={onChange}
                        checked={value}
                        onBlur={onBlur}
                        error={error}
                      />
                    }
                    label="Increased Urination"
                  />
                </FormGroup>
              )}
            />

            <Controller
              name="fluidRetention"
              control={control}
              render={({
                field: { onChange, value, onBlur },
                fieldState: { error },
              }) => (
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        onChange={onChange}
                        checked={value}
                        onBlur={onBlur}
                        error={error}
                      />
                    }
                    label="Fluid Retention"
                  />
                </FormGroup>
              )}
            />

            <Controller
              name="frequentYawning"
              control={control}
              render={({
                field: { onChange, value, onBlur },
                fieldState: { error },
              }) => (
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        onChange={onChange}
                        checked={value}
                        onBlur={onBlur}
                        error={error}
                      />
                    }
                    label="Frequent Yawning"
                  />
                </FormGroup>
              )}
            />
          </div>

          <div className="col">
            <Controller
              name="neckStiffness"
              control={control}
              render={({
                field: { onChange, value, onBlur },
                fieldState: { error },
              }) => (
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        onChange={onChange}
                        checked={value}
                        onBlur={onBlur}
                        error={error}
                      />
                    }
                    label="Neck Stiffness"
                  />
                </FormGroup>
              )}
            />

            <Controller
              name="noSymptomsBefore"
              control={control}
              render={({
                field: { onChange, value, onBlur },
                fieldState: { error },
              }) => (
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        onChange={onChange}
                        checked={value}
                        onBlur={onBlur}
                        error={error}
                      />
                    }
                    label="None"
                  />
                </FormGroup>
              )}
            />

            <Controller
              name="otherSymptomsBeforeBox"
              control={control}
              render={({
                field: { onChange, value, onBlur },
                fieldState: { error },
              }) => (
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        onChange={onChange}
                        checked={value}
                        onBlur={onBlur}
                        error={error}
                      />
                    }
                    label="Other"
                  />
                </FormGroup>
              )}
            />
          </div>
        </div>

        {isOtherSymptomsBeforeBox && (
          <>
            <p>If you selected "other", please describe your pre-symptoms:</p>
            <Controller
              name="otherSymptomsBefore"
              control={control}
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
          <Link to="/LengthAndMeds">
            <Button
              className="button"
              variant="contained"
              sx={{
                marginTop: 4,
                marginRight: 1,
                marginBottom: 2,
                backgroundColor: "primary",
                width: 125,
                "&:hover": { backgroundColor: "secondary" },
              }}
            >
              Previous
            </Button>
          </Link>
          <Button
            type="submit"
            className="button"
            variant="contained"
            sx={{
              marginTop: 4,
              marginLeft: 1,
              marginBottom: 2,
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
