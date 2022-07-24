import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import Form from "./form/Form";
import Table from "./table/Table";
import { makeStyles } from "@mui/styles";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../utils/firebase";

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
  const [info, setInfo] = useState([]);
  const usersCollectionRef = collection(db, "fireContact");
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      // console.log(data);
      setInfo(
        data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
      );
      // console.log(info);
    };

    getUsers();
  }, []);
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
          <Form usersCollectionRef={usersCollectionRef} />
        </Grid>
        <Grid item>
          <Table info={info} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Main;
