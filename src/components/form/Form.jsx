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
import { useEffect, useState } from "react";
import { db } from "../../utils/firebase";
import { ref, set, onValue } from "firebase/database";
import { uid } from "uid";
import {
  toastError,
  toastSuccess,
  // toastWarn,
} from "../../utils/customToastify";

export default function Form({ setData, tempUuid }) {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [tel, setTel] = useState("");
  const handlePhone = (newValue) => {
    setTel(newValue.slice(0, 17));
  };

  // ? writeData
  const writeToDatabase = (e) => {
    e.preventDefault();
    if (name && gender && tel) {
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
      toastSuccess("New Contact Added Successfully");
    } else {
      toastError("Please fill out all fields.");
    }
  };

  // ! readData
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
  }, [setData]);

  return (
    <Container>
      <Typography
        component="h1"
        variant="h4"
        align="center"
        sx={{
          bgcolor: "white",
          borderRadius: "1rem",
          padding: "1rem",
          mb: "1rem",
          boxShadow: 5,
        }}
      >
        ADD CONTACT
      </Typography>

      <Grid
        item
        sx={{
          background: "white",
          borderRadius: "1rem",
          boxShadow: 5,
        }}
      >
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box>
            <Box
              component="form"
              onSubmit={writeToDatabase}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                fullWidth
                id="margin-none"
                margin="normal"
                required
                name="name"
                placeholder="Name"
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
                inputExtraProps={{
                  required: true,
                }}
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
                  required
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
                // onClick={writeToDatabase}
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
