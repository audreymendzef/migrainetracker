import { useForm, Controller } from "react-hook-form";
import { TextField, Button } from "@mui/material";
import "./styles.css";
import { useNavigate, Link } from "react-router-dom";

function FoodWater({ store, setStore }) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur", defaultValues: store });
  let navigate = useNavigate();

  const onSubmit = (data) => {
    setStore({
      ...store,
      ...data,
    });
    if (Object.keys(errors).length === 0) {
      navigate("/Misc");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="foodWaterInfo">
        <h1>Food and Water Information</h1>
        <p>How much water did you drink on the day of the Migraine?</p>
        <Controller
          name="dayOfMigraineWater"
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
          name="dayOfMigraineAltDrinks"
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

        <p>How much water did you drinking on the day before the migraine?</p>
        <Controller
          name="preMigraineWater"
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
          Did you drink any other liquids (e.g. Juice, Alcohol, etc.) on the day
          before the migraine?
        </p>
        <Controller
          name="preMigraineAltDrinks"
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
              name="breakfast"
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
              name="lunch"
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
              name="dinner"
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
              name="snacksAndDessert"
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
          <Link to="/Experience">
            <Button
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
          </Link>
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
