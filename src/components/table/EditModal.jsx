import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import EditIcon from "@mui/icons-material/Edit";
import {
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import { useState } from "react";
import { ref, update } from "firebase/database";
import { db } from "../../utils/firebase";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { toastSuccess } from "../../utils/customToastify";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  maxWidth: 400,
  bgcolor: "background.paper",
  boxShadow: 44,
  borderRadius: "1rem",
  p: 3,
};

export default function EditModal({ info }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [name, setName] = useState(info.name);
  const [gender, setGender] = useState(info.gender);
  const [tel, setTel] = useState(info.tel);

  // ! updateData
  const handleSubmitChange = (e) => {
    e.preventDefault();

    update(ref(db, `/${info.uuid}`), {
      name,
      gender,
      tel,
      uuid: info.uuid,
    });
    toastSuccess("Contact Succesfully Updated");
    handleClose();
  };
  return (
    <div>
      <Button onClick={handleOpen} sx={{ minWidth: "0" }}>
        <EditIcon />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {/* //!================================================ */}
          <TextField
            fullWidth
            id="margin-none"
            margin="normal"
            required
            name="name"
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

          <TextField
            fullWidth
            margin="dense"
            id="phone"
            label="Phone"
            name="phone"
            type="tel"
            value={tel}
            onChange={(e) => setTel(e.target.value)}
            required
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LocalPhoneIcon />
                </InputAdornment>
              ),
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
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, width: { xs: "100%", md: "45%" } }}
            onClick={handleSubmitChange}
          >
            Submit Change
          </Button>
          <Button
            type="submit"
            color="error"
            variant="contained"
            sx={{
              mt: 3,
              marginLeft: { xs: "0", md: "2rem" },
              width: { xs: "100%", md: "45%" },
            }}
            onClick={handleClose}
          >
            Cancel Change
          </Button>
          {/* //!================================================ */}
        </Box>
      </Modal>
    </div>
  );
}
