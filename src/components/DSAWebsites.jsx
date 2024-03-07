import CodingNinjas from "./DSA cards/GeeksforGeeks";
import GeeksforGeeks from "./DSA cards/CodingNinjas";
import Leetcode from "./DSA cards/Leetcode";
import Hackerrank from "./DSA cards/Hackerrank";
import { Button, Stack, Typography } from "@mui/material";

function DSAwebsites() {
  return (
    <>
      <Typography variant="h5" backgroundColor="dark" margin={5}>

        <Button color="Heading" variant="contained">
          DSA
        </Button>
      </Typography>
      <Stack
        gap={5}
        direction={{ xs: "column", md: "row" }}
        width={"100%"}
        padding={"2rem"}
        justifyContent={"center"}
        alignContent={"center"}
      >
        <Leetcode/>
        <GeeksforGeeks/>
        <CodingNinjas/>
        <Hackerrank/>
      </Stack>
    </>
  );
}

export default DSAwebsites;
