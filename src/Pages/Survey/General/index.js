import { useForm, Controller } from "react-hook-form";
import {
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  FormHelperText,
} from "@mui/material";
import React from "react";
import "./styles.css";

function General({ goForward }) {
  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="generalInfo">
        <h1>General Information</h1>
        <p>How old are you?</p>
        <Controller
          name="Age"
          control={control}
          defaultValue=""
          render={({
            field: { onChange, value, onBlur },
            fieldState: { error },
          }) => (
            <TextField
              sx={{ m: 1, width: 150 }}
              required
              size="small"
              type="number"
              label="Age"
              variant="outlined"
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              error={!!error}
              helperText={error ? error.message : null}
            />
          )}
          rules={{
            required: "Age is required.",
            min: { value: 10, message: "Minimum age is 10." },
            max: { value: 99, message: "Maximum age is 99." },
          }}
        />

        <p>What was the date of the Migraine?</p>
        <input
          className="date"
          type="date"
          {...register("date", { required: true, valueAsDate: true })}
        />
        {errors?.date?.type === "required" && "This field is required."}

        <p>What time of day was the Migraine?</p>
        <Controller
          name="Time"
          control={control}
          defaultValue=""
          render={({
            field: { onChange, value, onBlur },
            fieldState: { error },
          }) => {
            console.log(error);
            return (
              <FormControl sx={{ m: 1, width: 150 }} error={error}>
                <InputLabel id="demo-simple-select-label">Time*</InputLabel>
                <Select
                  label="Time"
                  onChange={onChange}
                  onBlur={onBlur}
                  value={value}
                  error={!!error}
                  size="small"
                >
                  <MenuItem value="" disabled>
                    Select One
                  </MenuItem>
                  <MenuItem value="early morning">early morning</MenuItem>
                  <MenuItem value="late morning">late morning</MenuItem>
                  <MenuItem value="around noon">around noon</MenuItem>
                  <MenuItem value="early afternoon">early afternoon</MenuItem>
                  <MenuItem value="mid afternoon">mid afternoon</MenuItem>
                  <MenuItem value="late afternoon">late afternoon</MenuItem>
                  <MenuItem value="early evening">early evening</MenuItem>
                  <MenuItem value="late evening">late evening</MenuItem>
                  <MenuItem value="other">other</MenuItem>
                </Select>
                <FormHelperText>{error ? error.message : null}</FormHelperText>
              </FormControl>
            );
          }}
          rules={{ required: "Time of day is required." }}
        />

        <p>Where were you when you had the Migraine?</p>
        <Controller
          name="Location"
          control={control}
          defaultValue=""
          render={({
            field: { onChange, value, onBlur },
            fieldState: { error },
          }) => (
            <TextField
              sx={{ m: 1, width: 150 }}
              required
              type="text"
              label="Location"
              variant="outlined"
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              error={!!error}
              helperText={error ? error.message : null}
              size="small"
            />
          )}
          rules={{ required: "Location is required." }}
        />
        <Button variant="contained" className="next">
          Next
        </Button>
      </div>
    </form>
  );
}
export default General;
