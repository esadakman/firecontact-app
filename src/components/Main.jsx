import { Grid } from "@mui/material";
import Form from "./form/Form";
import Table from "./table/Table";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
const useStyles = makeStyles({
  mainContainer: {
    minHeight: "100vh",
    // minWidth: "100vw",
    display: "flex",
    backgroundImage: `url("https://picsum.photos/1600/900")`,
    backgroundSize: "cover",
    // backgroundPosition: "cover;",
  },
});
const Main = () => {
  const theme = createTheme({});

  const classes = useStyles();
  const [data, setData] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [tempUuid, setTempUuid] = useState("");
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.mainContainer}>
        <Grid
          container
          sx={{
            justifyContent: "space-around",
            alignItems: "center",
            gap: "2rem",
            margin: "1rem 0",
          }}
        >
          <Grid item /* xs={6} md={4} */>
            <Form
              setData={setData}
              isEdit={isEdit}
              tempUuid={tempUuid}
              setIsEdit={setIsEdit}
            />
          </Grid>
          <Grid item xs={12} sm={10} md={8} lg={6}>
            <Table
              data={data}
              setIsEdit={setIsEdit}
              setTempUuid={setTempUuid}
              isEdit={isEdit}
            />
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
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
