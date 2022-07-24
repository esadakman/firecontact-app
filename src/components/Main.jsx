import { Grid } from "@mui/material";
import Form from "./form/Form";
import Table from "./table/Table";
import { makeStyles } from "@mui/styles";
import { useState } from "react";

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
  const [data, setData] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [tempUuid, setTempUuid] = useState("");
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
          <Form
            setData={setData}
            isEdit={isEdit}
            tempUuid={tempUuid}
            setIsEdit={setIsEdit}
          />
        </Grid>
        <Grid item>
          <Table
            data={data}
            setIsEdit={setIsEdit}
            setTempUuid={setTempUuid}
            isEdit={isEdit}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Main;

// const [info, setInfo] = useState([]);
//   const usersCollectionRef = collection(db, "fireContact");
//   useEffect(() => {
//     const getUsers = async () => {
//       const data = await getDocs(usersCollectionRef);
//       // console.log(data);
//       setInfo(
//         data.docs.map((doc) => ({
//           ...doc.data(),
//           id: doc.id,
//         }))
//       );
//       // console.log(info);
//     };

//     getUsers();
//   }, []);
