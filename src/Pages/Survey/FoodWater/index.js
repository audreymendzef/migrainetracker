import { useForm, Controller } from "react-hook-form";
import { TextField, Button } from "@mui/material";
import React, { useState } from "react";
import "./styles.css";

function FoodWater({ goBack, goForward }) {
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
      window.location.assign("/Misc");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="foodWaterInfo">
        <h1>Food and Water Information</h1>
        <p>How much water did you drink on the day of the Migraine?</p>
        <Controller
          name="DayofWater"
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
              label="Water (oz)"
              variant="outlined"
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              error={!!error}
              helperText={error ? error.message : null}
            />
          )}
          rules={{
            required: "Day of Migraine: Water intake is required.",
          }}
        />
        <p>
          Did you drink any other liquids (e.g. Juice, Alcohol, etc.) on the day
          of the migraine?
        </p>
        <Controller
          name="Drinks"
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
              type="text"
              label="Drinks"
              variant="outlined"
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              error={!!error}
              helperText={error ? error.message : null}
            />
          )}
          rules={{
            required: "Drink info is required.",
          }}
        />

        <p>
          How much water were you drinking on the days leading up to the
          migraine?
        </p>
        <Controller
          name="PreMigraineWater"
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
              label="Water (oz)"
              variant="outlined"
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              error={!!error}
              helperText={error ? error.message : null}
            />
          )}
          rules={{
            required: "Pre-Migraine: Water intake is required.",
          }}
        />

        <p>
          Did you drink any other liquids (e.g. Juice, Alcohol, etc.) on the
          days leading up to the migraine?
        </p>
        <Controller
          name="Drinks"
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
              type="text"
              label="Drinks"
              variant="outlined"
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              error={!!error}
              helperText={error ? error.message : null}
            />
          )}
          rules={{
            required: "Drinks info is required.",
          }}
        />

        <p>What did you eat on the day of the migraine?</p>
        <div className="meals">
          <div className="food">
            <p>Breakfast:</p>
            <Controller
              name="Breakfast"
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
                  type="text"
                  label=""
                  variant="outlined"
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                  error={!!error}
                  helperText={error ? error.message : null}
                />
              )}
              rules={{
                required: "Breafast info is required.",
              }}
            />
          </div>

          <div className="food">
            <p>Lunch:</p>
            <Controller
              name="Lunch"
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
                  type="text"
                  label=""
                  variant="outlined"
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                  error={!!error}
                  helperText={error ? error.message : null}
                />
              )}
              rules={{
                required: "Lunch info is required.",
              }}
            />
          </div>

          <div className="food">
            <p>Dinner:</p>
            <Controller
              name="Dinner"
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
                  type="text"
                  label=""
                  variant="outlined"
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                  error={!!error}
                  helperText={error ? error.message : null}
                />
              )}
              rules={{
                required: "Dinner info is required.",
              }}
            />
          </div>

          <div className="food">
            <p>Snacks/Dessert:</p>
            <Controller
              name="SnacksDessert"
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
                  type="text"
                  label=""
                  variant="outlined"
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                  error={!!error}
                  helperText={error ? error.message : null}
                />
              )}
              rules={{
                required: "Snack/Dessert info is required.",
              }}
            />
          </div>
        </div>
        <div className="buttons">
          <Button
            type="submit"
            className="button"
            variant="contained"
            sx={{
              marginTop: 2,
              marginRight: 1,
              marginBottom: 2,
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
              marginTop: 2,
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

export default FoodWater;
