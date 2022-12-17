import { Grid, GridItem } from "@chakra-ui/react";
import { React } from "react";
import LeftNavbar from "./components/LeftNavbar";
import Dashboard from "./pages/Dashboard";

function App() {
  // return <Dashboard />;
  return (
    <Grid templateColumns="repeat(6, 1fr)" gap={6} width="100%" height="100vh">
      {/* <GridItem colSpan="1">
        <LeftNavbar />
      </GridItem> */}
      <GridItem colSpan="6">
        <Dashboard />
      </GridItem>
    </Grid>
  );
}

export default App;
