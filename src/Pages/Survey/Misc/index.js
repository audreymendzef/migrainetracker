import { useForm, Controller } from "react-hook-form";
import {
  TextField,
  Button,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import React, { useState } from "react";
import "./styles.css";

function Misc({ goBack, goForward }) {
  const {
    register,
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
    // if (Object.keys(errors).length === 0) {
    //   window.location.assign("/Misc");
    // }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="miscInfo">
        <h1>Miscellaneous Info</h1>
        <p>If applicable, when is your next period?</p>
        <input
          className="date"
          type="date"
          {...register("date", { required: true, valueAsDate: true })}
        />
        {errors?.date?.type === "required" && "This field is required."}

        <p>Were there any extenuating circumstances?</p>
        <Controller
          name="circumstances"
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
                  <FormControlLabel control={<Checkbox />} label="Stress" />
                  <FormControlLabel control={<Checkbox />} label="Sickness" />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Excessive Exercise"
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Excessive Exertion"
                  />
                </div>

                <div className="col">
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Exposure to Flashing Lights"
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Changes to Weather/Pressure"
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

        <p>Any other remaining information that might be relevant?</p>
        <Controller
          name="Other Info"
          control={control}
          defaultValue=""
          render={({
            field: { onChange, value, onBlur },
            fieldState: { error },
          }) => (
            <TextField
              sx={{ m: 1, width: 300 }}
              required
              multiline
              rows={2}
              maxRows={Infinity}
              type="text"
              label="Other Info"
              variant="outlined"
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              error={!!error}
              helperText={error ? error.message : null}
              size="small"
            />
          )}
          rules={{ required: "This field is required." }}
        />
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
            Submit
          </Button>
        </div>
      </div>
    </form>
  );
}

export default Misc;
