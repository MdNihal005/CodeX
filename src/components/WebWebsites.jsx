import Html from "./web cards/Html";
import Css from "./web cards/Css";
import Js from "./web cards/Js";
import Nodejs from "./web cards/Nodejs";
import { Button, Stack, Typography } from "@mui/material";

function WebWebsites() {
  return (
    <>
      {" "}
      <Typography variant="h5" backgroundColor="dark">
        <Button color="Heading" variant="contained">
Web Devlopment        </Button>
      </Typography>
      <Stack
        gap={5}
        direction={{ xs: "column", md: "row" }}
        width={"100%"}
        padding={"2rem"}
        justifyContent={"center"}
        alignContent={"center"}
      >
        <Html />
        <Css />
        <Js />
        <Nodejs/>
      </Stack>
    </>
  );
}

export default WebWebsites;
