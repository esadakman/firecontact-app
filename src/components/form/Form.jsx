import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import { MuiTelInput } from "mui-tel-input";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

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
  return (
    <Container /* component="main"  */ maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          //   bgcolor: "red",
        }}
      >
        <Typography component="h1" variant="h4">
          ADD CONTACT
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
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
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  );
}

//<TextField
//   margin="normal"
//   required
//   fullWidth
//   name="phone"
//   //   label="Phone"
//   placeholder="Phone"
//   type="tel"
//   id="phone"
//   autoComplete="current-password"
//   InputProps={{
//     startAdornment: (
//       <InputAdornment position="start">
//         <LocalPhoneIcon />
//       </InputAdornment>
//     ),
//   }}
// />; */
