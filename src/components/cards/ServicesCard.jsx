import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

// import image from "../../assets/images/banner/mini/1.png";
import { Link } from "react-router-dom";
import ReactCompareImage from "react-compare-image";

// import afterImage from "../../assets/images/services/20 Photo Restoration/After/IMG_2495.jpg";

export default function ServicesCard(props) {
  // eslint-disable-next-line react/prop-types
  const { beforeImage, afterImage, to, title, description } = props.data;
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        {/* <CardMedia
          component="img"
          height="140"
          style={{ height: "200px" }}
          image={image}
          alt="green iguana"
        /> */}
        <ReactCompareImage
          leftImage={beforeImage}
          rightImage={afterImage}
          aspectRatio="wider"
        />
        <Link to={to}>
          <CardContent>
            {/* <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography> */}
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            {/* <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography> */}
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </CardContent>
        </Link>
      </CardActionArea>
    </Card>
  );
}
