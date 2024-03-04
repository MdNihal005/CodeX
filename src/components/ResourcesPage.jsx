import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import styled from "@emotion/styled";
import TuF from "./Resources_DSA/TuF";
import Codechef from "./Resources_DSA/Codechef";
import Medium from "./Resources_DSA/Medium";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
function ResourcesPage() {
  return (
    <>
      <Typography variant="h5" backgroundColor="dark" margin={5}>
        <Button color="Heading" variant="contained">
          Data Structures and Algorithms
        </Button>
      </Typography>
      <Box margin={2} sx={{ width: "97%", flexGrow: 1 }}>
        <Grid overflow={"hidden"} container gap={5}>
          <Grid itemScope>
            <Item>
              <TuF />
            </Item>
          </Grid>
          <Grid item>
            <Item>
              <Codechef />
            </Item>
          </Grid>
          <Grid item>
            <Item>
              <Medium />
            </Item>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default ResourcesPage;
