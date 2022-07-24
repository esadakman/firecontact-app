import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import {
  CssBaseline,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import { MuiTelInput } from "mui-tel-input";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles({
  title: {
    border: "1px solid red",
    textAlign: "center",
    background: "white",
    borderRadius: "1rem",
    padding: "1rem",
  },
});

export default function Form() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      name: data.get("name"),
      phone: data.get("phone"),
      gender: data.get("gender"),
    });
  };

  const [gender, setGender] = React.useState("");

  const handleChange = (event) => {
    setGender(event.target.value);
  };
  const [tel, setTel] = React.useState("");

  const handlePhone = (newValue) => {
    setTel(newValue);
  };

  const classes = useStyles();

  return (
    <Container>
      <Typography component="h1" variant="h4" className={classes.title}>
        ADD CONTACT
      </Typography>
      <Grid
        item
        sx={{
          background: "white",
          borderRadius: "1rem",
          // border: "1px solid red",
        }}
      >
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 3 }}
            >
              <TextField
                fullWidth
                // label="Name"
                id="margin-none"
                margin="normal"
                required
                name="name"
                placeholder="Name"
                autoComplete="name"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonIcon />
                    </InputAdornment>
                  ),
                }}
              />
              {/* //!================================================ */}
              <MuiTelInput
                value={tel}
                defaultCountry="TR"
                onChange={handlePhone}
                sx={{ width: "100%", minWidth: "140", mt: 2 }}
                id="phone"
                name="phone"
                label="Phone"
              />
              {/* //!================================================ */}
              <FormControl sx={{ width: "100%", minWidth: "140", mt: 2 }}>
                <InputLabel>Gender</InputLabel>
                <Select
                  value={gender}
                  label="Gender"
                  id="gender"
                  name="gender"
                  onChange={handleChange}
                  fullWidth
                >
                  <MenuItem value="Male">Male</MenuItem>
                  <MenuItem value="Female">Female</MenuItem>
                  <MenuItem value="Other">Other</MenuItem>
                </Select>
              </FormControl>
              {/* //!================================================ */}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                ADD CONTACT
              </Button>
            </Box>
          </Box>
        </Container>
      </Grid>
    </Container>
  );
}
