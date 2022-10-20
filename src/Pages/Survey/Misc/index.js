import { useForm, Controller } from "react-hook-form";
import {
  TextField,
  Button,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import "./styles.css";
import { useNavigate, Link } from "react-router-dom";

function Misc({ store, setStore }) {
  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ mode: "onBlur", defaultValues: store });
  let navigate = useNavigate();

  const onSubmit = (data) => {
    setStore({ ...store, ...data });
    // if (Object.keys(errors).length === 0) {
    //   window.location.assign("/Misc");
    // }
  };

  const isOtherCircumstancesBox = watch("otherCircumstancesBox");

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="miscInfo">
        <h1>Miscellaneous Info</h1>
        <p>If applicable, when is your next period?</p>
        <input
          className="dateOfNextPeriod"
          type="date"
          {...register("dateOfNextPeriod", {
            required: true,
          })}
        />
        {errors?.date?.type === "required" && "This field is required."}

        <p>Were there any extenuating circumstances?</p>
        <div className="gridContainer">
          <div className="col">
            <Controller
              name="stress"
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
                    label="Stress"
                  />
                </FormGroup>
              )}
            />

            <Controller
              name="sickness"
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
                    label="Sickness"
                  />
                </FormGroup>
              )}
            />

            <Controller
              name="excessiveExercise"
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
                    label="Excessive Exercise"
                  />
                </FormGroup>
              )}
            />

            <Controller
              name="excessiveExertion"
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
                    label="Excessive Exertion"
                  />
                </FormGroup>
              )}
            />
          </div>

          <div className="col">
            <Controller
              name="exposureToFlashingLights"
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
                    label="Exposure to Flashing Lights"
                  />
                </FormGroup>
              )}
            />

            <Controller
              name="changesToWeatherOrPressure"
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
                    label="Changes to Weather/Pressure"
                  />
                </FormGroup>
              )}
            />

            <Controller
              name="noCircumstances"
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
              name="otherCircumstancesBox"
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
        {isOtherCircumstancesBox && (
          <>
            <p>If you selected "other", please describe your experience:</p>
            <Controller
              name="otherCircumstances"
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
          name="otherMiscInfo"
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
          <Link to="/FoodWater">
            <Button
              className="button"
              variant="contained"
              sx={{
                marginTop: 3,
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
              marginTop: 3,
              marginLeft: 1,
              marginBottom: 2,
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
