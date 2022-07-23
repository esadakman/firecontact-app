import { Grid } from "@mui/material";
import React from "react";
import Form from "./form/Form";
import Table from "./table/Table";
import { makeStyles, styled } from "@mui/styles";

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
const Main = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      <Grid container sx={{ flexWrap: "noWrap" }}>
        <Grid item xs={5} /* md={4} lg={4} */>
          <Form />
        </Grid>
        <Grid item xs={6} /* md={8} lg={8} */>
          {/* <Grid item xs={4} md={5} lg={4}> */}
          <Table />
        </Grid>
      </Grid>
    </div>
  );
};

export default Main;
