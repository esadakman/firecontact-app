import { Grid } from "@mui/material";
import React from "react";
import Form from "./form/Form";
import Table from "./table/Table";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  mainContainer: {
    minHeight: "100vh",
    // minWidth: "100vw",
    display: "flex",
    border: "3px solid red",
    backgroundImage: `url("https://picsum.photos/1600/900")`,
    backgroundSize: "cover",
    // backgroundPosition: "cover;",
  },
});
const Main = () => {
  const classes = useStyles();

  return (
    <div className={classes.mainContainer}>
      <Grid
        container
        sx={{
          justifyContent: "space-around",
          alignItems: "center",
          gap: "5rem",
          margin: "1rem",
        }}
      >
        <Grid>
          <Form />
        </Grid>
        <Grid item>
          <Table />
        </Grid>
      </Grid>
    </div>
  );
};

export default Main;
