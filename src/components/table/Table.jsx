import { makeStyles } from "@mui/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import {
  Container,
  Typography,
  TablePagination,
  Button,
  Box,
} from "@mui/material";
import { ref, remove } from "firebase/database";
import { db } from "../../utils/firebase";
import { useState } from "react";
import EditModal from "./EditModal";
import { toastSuccess } from "../../utils/customToastify";
const useStyles = makeStyles({
  container: {
    width: "90% !important",
    maxWidth: "90%",
    marginTop: "2rem",
  },
  tableContainer: {
    borderRadius: ".5rem !important",
    marginTop: "2rem",
    maxHeight: "380px",
  },
  title: {
    textAlign: "center",
    background: "white",
    borderRadius: "1rem",
    padding: "1rem",
  },
});

export default function CustomizedTables({ data }) {
  const classes = useStyles();

  // * Pagination
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

  // ? DELETEContact
  const handleDelete = (data) => {
    remove(ref(db, `/${data.uuid}`));
    toastSuccess("Contact succesfully deleted");
  };

  return (
    <Container className={classes.container}>
      <Typography component="h1" variant="h4" className={classes.title}>
        Contact List
      </Typography>
      <TableContainer component={Paper} className={classes.tableContainer}>
        {data.length > 0 ? (
          <>
            <Table sx={{ overflow: "auto" }}>
              <TableHead>
                <TableRow hover={true}>
                  <TableCell align="center">Username</TableCell>
                  <TableCell align="center" padding="none">
                    Phone Number
                  </TableCell>
                  <TableCell align="center" padding="none">
                    Gender
                  </TableCell>

                  <TableCell align="center" padding="none">
                    Delete
                  </TableCell>
                  <TableCell align="center">Edit</TableCell>
                </TableRow>
              </TableHead>
              {data.length > 0 ? (
                <TableBody>
                  {data
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((info, index) => (
                      <TableRow key={index}>
                        <TableCell
                          align="center"
                          component="th"
                          scope="row"
                          sx={{ maxWidth: "90px", overflow: "auto" }}
                        >
                          {info.name}
                        </TableCell>

                        <TableCell
                          align="center"
                          padding="none"
                          sx={{ minWidth: "110px", overflow: "auto" }}
                        >
                          {info.tel}
                        </TableCell>
                        <TableCell align="center" padding="none">
                          {info.gender}
                        </TableCell>

                        <TableCell
                          align="center"
                          padding="none"
                          onClick={() => handleDelete(info)}
                        >
                          <Button color="error" sx={{ minWidth: "0" }}>
                            <DeleteForeverIcon />
                          </Button>
                        </TableCell>
                        <TableCell align="center" padding="none">
                          <EditModal info={info} />
                        </TableCell>
                      </TableRow>
                    ))}
                  {emptyRows > 0 && (
                    <TableRow style={{ height: 53 * emptyRows }}>
                      <TableCell colSpan={6} />
                    </TableRow>
                  )}
                </TableBody>
              ) : (
                <TableBody>
                  <p>Nothing Found</p>
                </TableBody>
              )}
            </Table>
            <TablePagination
              component="div"
              count={data.length}
              page={page}
              onPageChange={handleChangePage}
              rowsPerPage={rowsPerPage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              rowsPerPageOptions={[3, 5, 7]}
            />
          </>
        ) : (
          <div style={{ height: "370px" }}>
            <Typography align="center" p={2} variant="h5" height={"5rem"}>
              Nothing Found
            </Typography>
          </div>
        )}
      </TableContainer>
    </Container>
  );
}
