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

export default function CustomizedTables({
  data,
  setIsEdit,
  setTempUuid,
  isEdit,
}) {
  const classes = useStyles();

  // ? DELETE
  const handleDelete = (data) => {
    remove(ref(db, `/${data.uuid}`));
  };

  // ! edit
  const handleEdit = (data) => {
    setIsEdit(!isEdit);
    setTempUuid(data.uuid);
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
                <TableCell
                  component="th"
                  scope="row"
                  sx={{ maxWidth: "130px", overflow: "auto" }}
                >
                  {info.name}
                </TableCell>
                <TableCell align="right">{info.tel}</TableCell>
                <TableCell align="right">{info.gender}</TableCell>
                <TableCell align="right" onClick={() => handleDelete(info)}>
                  <DeleteForeverIcon className={classes.buttons} />
                </TableCell>
                <TableCell align="right" onClick={() => handleEdit(info)}>
                  <EditIcon className={classes.buttons} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
