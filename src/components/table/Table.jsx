// import * as React from "react";
// import { DataGrid } from "@mui/x-data-grid";

// const columns = [
//   { field: "userName", headerName: "Username", width: 130 },
//   //   { field: "firstName", headerName: "First name", width: 130 },
//   { field: "phoneNumber", headerName: "Phone Number", width: 130 },
//   {
//     field: "gender",
//     headerName: "Gender",
//     type: "string",
//     width: 120,
//   },
// ];

// const rows = [
//   { id: 1, userName: "Snow", phoneNumber: "12323123", gender: "Jon" },
//   { id: 2, userName: "Lannister", phoneNumber: "12323123", gender: "Cersei" },
//   { id: 3, userName: "Lannister", phoneNumber: "12323123", gender: "Jaime" },
//   { id: 4, userName: "Stark", phoneNumber: "12323123", gender: "Arya" },
//   { id: 5, userName: "Targaryen", phoneNumber: "12323123", gender: "Daenerys" },
//   { id: 6, userName: "Melisandre", phoneNumber: "12323123", gender: null },
//   { id: 7, userName: "Clifford", phoneNumber: "12323123", gender: "Ferrara" },
//   { id: 8, userName: "Frances", phoneNumber: "12323123", gender: "Rossini" },
//   { id: 9, userName: "Roxie", phoneNumber: "12323123", gender: "Harvey" },
// ];

// export default function Table() {
//   return (
//     <div style={{ height: 400 }}>
//       <DataGrid
//         pageSize={5}
//         rows={rows}
//         columns={columns}
//         rowsPerPageOptions={[5]}
//         checkboxSelection
//       />
//     </div>
//   );
// }

import * as React from "react";
import { makeStyles, styled } from "@mui/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { fabClasses } from "@mui/material";
import { red } from "@mui/material/colors";
// import { TableRows } from "@mui/icons-material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//   [`&.${tableCellClasses.head}`]: {
//     backgroundColor: theme.palette.common.black,
//     color: theme.palette.common.white,
//   },
//   [`&.${tableCellClasses.body}`]: {
//     fontSize: 14,
//   },
//   width: "",
// }));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

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
  table: {
    minWidth: 650,
  },
  tableContainer: {
    borderRadius: 15,
    bgcolor: "red",
    margin: " auto",
    // width: "500px !important",
  },
}));

export default function CustomizedTables() {
  const classes = useStyles();
  //
  return (
    <TableContainer
      component={Paper}
      className={classes.tableContainer}
      sx={{ width: 700 }}
    >
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={{ width: 150 }}>Username</TableCell>
            <TableCell align="right">Phone Number</TableCell>
            <TableCell align="right">Gender</TableCell>
            <TableCell align="right">Delete</TableCell>
            <TableCell align="right">Edit</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">
                <DeleteForeverIcon />
              </TableCell>
              <TableCell align="right">
                <EditIcon />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
