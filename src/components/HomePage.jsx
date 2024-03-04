// import styled from "@emotion/styled";
import { Box, Stack } from "@mui/material";
import Cpwebsites from "./Cpwebsites";

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: "center",
//   color: theme.palette.text.secondary,
// }));

const HomePage = () => {
  return (
    <Stack
      direction={"column"}
      width={"100%"}
      padding={"2rem"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Box width={"100%"}>
        <Cpwebsites />
        <Cpwebsites />
        <Cpwebsites />
      </Box>
    </Stack>
  );
};

export default HomePage;
