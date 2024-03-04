import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const TuF = () => {
  return (
    <Card>
      <CardMedia
        sx={{ height: { xs: 100, md: 140 } }}
        // image="/src/assets/CP Images/atcoder.jpeg"
        title="take u forward"
        alt="take u forward"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Take U Forward [ A to Z sheet ]
        </Typography>
        <Typography variant="body2" color="text.secondary">
          The Take U Forward A to Z sheet, created by Striver (Raj
          Vikramadithya), comprises 450 problems covering various topics in Data
          Structures and Algorithms (DSA). It serves as a comprehensive resource
          for individuals looking to strengthen their DSA skills, providing a
          structured approach to tackle a wide range of problems and concepts.
          This sheet is widely recognized and utilized within the programming
          community for its effectiveness in DSA preparation.
        </Typography>
      </CardContent>
      <CardActions
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Button size="small">
          <a target="_blank" href="https://takeuforward.org/">
            Open
          </a>
        </Button>
      </CardActions>
    </Card>
  );
};
export default TuF;
