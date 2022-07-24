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
import { ref, set, onValue, update } from "firebase/database";
import { uid } from "uid";

const useStyles = makeStyles({
  title: {
    border: "1px solid red",
    textAlign: "center",
    background: "white",
    borderRadius: "1rem",
    padding: "1rem",
  },
});

export default function Form({ setData, tempUuid, isEdit, setIsEdit }) {
  const classes = useStyles();

  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [tel, setTel] = useState("");

  const handlePhone = (newValue) => {
    setTel(newValue);
  };

  // ? write
  const writeToDatabase = (e) => {
    e.preventDefault();
    const uuid = uid();

    set(ref(db, `/${uuid}`), {
      name,
      gender,
      tel,
      uuid,
    });
    setName("");
    setGender("");
    handlePhone("");
  };

  // !read
  useEffect(() => {
    onValue(ref(db), (snapshot) => {
      setData([]);
      const data = snapshot.val();
      if (data !== null) {
        Object.values(data).map((item) =>
          setData((oldArray) => [...oldArray, item])
        );
      }
    });
  }, []);

  // ! update
  const handleSubmitChange = (e) => {
    e.preventDefault();

    update(ref(db, `/${tempUuid}`), {
      name,
      gender,
      tel,
      uuid: tempUuid,
    });
    setName("");
    setGender("");
    handlePhone("");
    setIsEdit(false);
  };

  // console.log(data);
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
              // onSubmit={writeToDatabase}
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
                value={name}
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
              {isEdit ? (
                <>
                  <Button
                    type="submit"
                    // fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2, width: "50%" }}
                    onClick={handleSubmitChange}
                  >
                    Submit Change
                  </Button>
                  <Button
                    type="submit"
                    color="error"
                    variant="contained"
                    sx={{ mt: 3, mb: 2, ml: 2, width: "45%" }}
                    onClick={() => setIsEdit(false)}
                  >
                    Cancel Change
                  </Button>
                </>
              ) : (
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  onClick={writeToDatabase}
                >
                  ADD CONTACT
                </Button>
              )}
            </Box>
          </Box>
        </Container>
      </Grid>
    </Container>
  );
}

// const handleSubmit = (event) => {
//   event.preventDefault();

//   console.log(newUser);
// };
