import { makeStyles } from "@mui/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import { Container, Typography } from "@mui/material";
import { ref, remove } from "firebase/database";
import { db } from "../../utils/firebase";
import { useState } from "react";
// import { useEffect, useState } from "react";
// import { db } from "../../utils/firebase";
// import { collection, getDocs } from "firebase/firestore";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const useStyles = makeStyles((theme) => ({
  tableContainer: {
    borderRadius: 15,
    bgcolor: "red",
    margin: " auto",
    marginTop: "2rem",
  },
  title: {
    border: "1px solid red",
    textAlign: "center",
    background: "white",
    borderRadius: "1rem",
    padding: "1rem",
  },
  buttons: {
    transition: "all 0.5s  ",
    cursor: "pointer",
    "&:hover": {
      // animation: `transform: "scale(1.2)", 0.6s   `,
      transform: `scale(1.2)  `,
      color: "red",
    },
  },
}));

export default function CustomizedTables({ data, setData }) {
  const classes = useStyles();
  // const [isEdit, setIsEdit] = useState(false);
  // const [tempUuid, setTempUuid] = useState(second);
  // ? DELETE
  const handleDelete = (data) => {
    remove(ref(db, `/${data.uuid}`));
  };

  // ! edit
  const handleEdit = (data) => {
    // setIsEdit(true);
    // setTempUuid(data.uuid);
  };

  return (
    <Container>
      <Typography component="h1" variant="h4" className={classes.title}>
        Contact List
      </Typography>
      <TableContainer component={Paper} className={classes.tableContainer}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Username</TableCell>
              <TableCell align="right">Phone Number</TableCell>
              <TableCell align="right">Gender</TableCell>
              <TableCell align="right">Delete</TableCell>
              <TableCell align="right">Edit</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((info, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  {info.name}
                </TableCell>
                <TableCell align="right" sx={{ overflow: "hidden" }}>
                  {info.tel}
                </TableCell>
                <TableCell align="right">{info.gender}</TableCell>
                <TableCell align="right" onClick={() => handleDelete(info)}>
                  <DeleteForeverIcon className={classes.buttons} />
                </TableCell>
                <TableCell align="right" onClick={() => handleEdit(info)}>
                  <EditIcon />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
