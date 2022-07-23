import { Grid } from "@mui/material";
import Aside from "./components/Aside/Aside";
import Content from "./components/Content/Content";

// import styled from "styled-components";

// const WrapperApp = styled.div`
//   max-width: 100%;
//   display: grid;
//   grid-template
// `;

const App = () => {
  return (
    <Grid container>
      <Grid item xs={3}>
        <Aside />
      </Grid>
      <Grid item xs={9}>
        <Content />
      </Grid>
    </Grid>
  );
};

export default App;
