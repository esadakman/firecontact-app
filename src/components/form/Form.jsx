// import * as React from "react";
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
import { useEffect, useState } from "react";
import { db } from "../../utils/firebase";
import { collection, getDocs } from "firebase/firestore";
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
  const classes = useStyles();

  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [tel, setTel] = useState("");
  console.log(tel);

  const handlePhone = (newValue) => {
    setTel(newValue);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = { name: name };
  };

  const [info, setInfo] = useState([]);
  const usersCollectionRef = collection(db, "fireContact");
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      // console.log(data);
      setInfo(
        data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
      );
      // console.log(info);
    };

    getUsers();
  }, []);

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
                onChange={(e) => setName(e.target.value)}
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
                  onChange={(e) => setGender(e.target.value)}
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
