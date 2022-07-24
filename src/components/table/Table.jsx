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
import { Container, Typography, TablePagination } from "@mui/material";
import { ref, remove } from "firebase/database";
import { db } from "../../utils/firebase";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100% !important",
  },
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

  // * Pagination
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

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
    <Container className={classes.container}>
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
            {data
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((info, index) => (
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
            {emptyRows > 0 && (
              <TableRow style={{ height: 62 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
        </Table>
        <TablePagination
          component="div"
          count={data.length}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          rowsPerPageOptions={[5, 10, 15]}
        />
      </TableContainer>
    </Container>
  );
}
