import { useForm, Controller } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import {
  TextField,
  Slider,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Button,
} from "@mui/material";
import React from "react";
import "./styles.css";

function Symptoms({ store, setStore }) {
  const {
    control,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur", defaultValues: store });
  let navigate = useNavigate();

  const onSubmit = (data) => {
    if (Object.keys(errors).length === 0) {
      setStore({
        ...store,
        ...data,
      });
      navigate("/LengthAndMeds");
    }
  };

  const isOtherSymptomsBox = watch("otherSymptomsBox");

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="symptoms">
        <h1>Symptoms</h1>
        <p>Where did the pain originate in your head?</p>
        <Controller
          name="painOrigin"
          control={control}
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
          name="painSeverity"
          control={control}
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
              value={value}
            />
          )}
        />
        <p>What symptoms aside from pain did you experience?</p>
        <div className="gridContainer">
          <div className="col">
            <Controller
              name="visionImpairments"
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
                    label="Vision Impairments"
                  />
                </FormGroup>
              )}
            />

            <Controller
              name="sensitivityToSound"
              control={control}
              render={({
                field: { onChange, value, onBlur },
                fieldState: { error },
              }) => (
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={value}
                        onChange={onChange}
                        onBlur={onBlur}
                        error={error}
                      />
                    }
                    label="Sensitivity to Sound"
                  />
                </FormGroup>
              )}
            />
            <Controller
              name="dizziness"
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
              name="lightHeadedness"
              control={control}
              defaultValue=""
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
                    label="Light-headedness"
                  />
                </FormGroup>
              )}
            />
          </div>

          <div className="col">
            <Controller
              name="visionAuras"
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
                    label="Vision Auras"
                  />
                </FormGroup>
              )}
            />

            <Controller
              name="throbbingPulsing"
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
                    label="Throbbing/Pulsing"
                  />
                </FormGroup>
              )}
            />
            <Controller
              name="nausea"
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
                    label="Nausea"
                  />
                </FormGroup>
              )}
            />
            <Controller
              name="vomitting"
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
                    label="Vomitting"
                  />
                </FormGroup>
              )}
            />
          </div>

          <div className="col">
            <Controller
              name="sensitivityToLight"
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
                    label="Sensitivity to Light"
                  />
                </FormGroup>
              )}
            />
            <Controller
              name="noSymptoms"
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
              name="otherSymptomsBox"
              control={control}
              render={({
                field: { onChange, value, onBlur },
                fieldState: { error },
              }) => (
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={value}
                        onChange={onChange}
                        value={value}
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
        {isOtherSymptomsBox && (
          <>
            <p>If you selected "other", please describe your symptoms:</p>
            <Controller
              name="otherSymptoms"
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
          <Link to="/General">
            <Button
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
          </Link>

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
