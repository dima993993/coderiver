import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import Aside from "./components/Aside/Aside";
import Content from "./components/Content/Content";
import { UsersAPI } from "./data/api";

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    UsersAPI.then((response) => setUsers(response.data));
  });

  return (
    <Grid container>
      <Grid item xs={2}>
        <Aside />
      </Grid>
      <Grid item xs={10}>
        <Content users={users} />
      </Grid>
    </Grid>
  );
};

export default App;
