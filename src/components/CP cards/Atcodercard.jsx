import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Atcodercard = () => {
  return (
    <Card
      sx={{
        maxWidth: { xs: 200, md: 270 },
        maxHeight: { xs: 200, md: 350 },
        minWidth: { xs: 200, md: 270 },
        minHeight: { xs: 200, md: 300 },
      }}
    >
      <CardMedia
        sx={{ height: { xs: 100, md: 140 } }}
        image="/src/assets/CP Images/atcoder.jpeg"
        title="codeforces"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Atcoder
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ display: { xs: "none", md: "flex" } }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
          maxime.
        </Typography>
      </CardContent>
      <CardActions
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Button size="small">
          <a target="_blank" href="https://atcoder.jp/">
            Open
          </a>
        </Button>
      </CardActions>
    </Card>
  );
};
export default Atcodercard;
