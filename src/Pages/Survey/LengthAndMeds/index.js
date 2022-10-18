import { useForm, Controller } from "react-hook-form";
import {
  TextField,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  FormHelperText,
  Button,
} from "@mui/material";
import React from "react";
import "./styles.css";
import { Link, useNavigate } from "react-router-dom";

function LengthAndMeds({ store, setStore }) {
  const {
    control,
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
      navigate("/Experience");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="lengthAndMedInfo">
        <h1>Length and Medication</h1>
        <p>How long did the Migraine Last?</p>
        <Controller
          name="lengthOfMigraine"
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
              label="Length"
              variant="outlined"
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              error={!!error}
              helperText={error ? error.message : null}
            />
          )}
          rules={{ required: "Length is required." }}
        />

        <p>List any medications you took for the Migraine:</p>
        <Controller
          name="medsForMigraine"
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
              label="Medication"
              variant="outlined"
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              error={!!error}
              helperText={error ? error.message : null}
            />
          )}
          rules={{ required: "Medication is required." }}
        />

        <p>Did the medication help the pain level?</p>
        <Controller
          name="didMedsHelp"
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
              label="Effectiveness"
              variant="outlined"
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              error={!!error}
              helperText={error ? error.message : null}
            />
          )}
          rules={{ required: "Medication effectiveness is required." }}
        />

        <p>How long did it take to feel 100% recovered?</p>
        <Controller
          name="recoveryTime"
          control={control}
          defaultValue=""
          render={({
            field: { onChange, value, onBlur },
            fieldState: { error },
          }) => (
            <FormControl sx={{ m: 1, width: 150 }} error={error} size="small">
              <InputLabel id="demo-simple-select-label">Recovery*</InputLabel>
              <Select
                label="Recovery"
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                error={!!error}
              >
                <MenuItem value="" disabled>
                  Select One
                </MenuItem>
                <MenuItem value="less than an hour">less than an hour</MenuItem>
                <MenuItem value="1-2 hours">1-2 hours</MenuItem>
                <MenuItem value="3-4 hours">3-4 hours</MenuItem>
                <MenuItem value="5-6 hours">5-6 hours</MenuItem>
                <MenuItem value="7-8 hours">7-8 hours</MenuItem>
                <MenuItem value="9-10 hours">9-10 hours</MenuItem>
                <MenuItem value="11-12 hours">11-12 hours</MenuItem>
                <MenuItem value="12-24 hours">12-24 hours</MenuItem>
                <MenuItem value="24-48 hours">24-48 hours</MenuItem>
                <MenuItem value="48-72 hours">48-72 hours</MenuItem>
                <MenuItem value="over 72 hours">over 72 hours</MenuItem>
              </Select>
              <FormHelperText>{error ? error.message : null}</FormHelperText>
            </FormControl>
          )}
          rules={{ required: "Recovery time is required." }}
        />
        <div className="buttons">
          <Link to="/Symptoms">
            <Button
              className="button"
              variant="contained"
              sx={{
                marginTop: 2,
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
              marginTop: 2,
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

export default LengthAndMeds;
