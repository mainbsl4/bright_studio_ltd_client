import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardActions from "@mui/joy/CardActions";
// import Chip from "@mui/joy/Chip";
import Divider from "@mui/joy/Divider";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import Typography from "@mui/joy/Typography";
// import Check from '@mui/icons-material/Check';
import { Icon } from "@iconify/react/dist/iconify.js";
// import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

export default function Pricing() {
  return (
    <div className=" container mx-auto mt-10">
      <Box
        // className="grid lg:grid-cols-4 gap-4 md:grid-cols-3"
        sx={{
          width: "100%",
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fill, minmax(min(100%, 300px), 1fr))",
          gap: 2,
        }}
      >
        <Card size="lg" variant="outlined">
          {/* <Chip size="sm" variant="outlined" color="neutral">
          CUT-OUTS SERVICE
          </Chip> */}
          <Typography level="h2">CUT-OUTS SERVICE</Typography>
          <Divider inset="none" />
          <List size="sm" sx={{ mx: "calc(-1 * var(--ListItem-paddingX))" }}>
            <ListItem>
              <ListItemDecorator>
                <Icon icon="material-symbols-light:check" />
              </ListItemDecorator>
              Clipping Path
            </ListItem>
            <ListItem>
              <ListItemDecorator>
                <Icon icon="material-symbols-light:check" />
              </ListItemDecorator>
              Image Masking
            </ListItem>
            <ListItem>
              <ListItemDecorator>
                <Icon icon="material-symbols-light:check" />
              </ListItemDecorator>
              360 Image
            </ListItem>
            <ListItem>
              <ListItemDecorator>
                <Icon icon="material-symbols-light:check" />
              </ListItemDecorator>
              Shadow Making
            </ListItem>
            <ListItem>
              <ListItemDecorator>
                <Icon icon="material-symbols-light:check" />
              </ListItemDecorator>
              E-commerce Image
            </ListItem>
            <ListItem>
              <ListItemDecorator>
                <Icon icon="material-symbols-light:check" />
              </ListItemDecorator>
              Neck Join/Ghost Mannequin
            </ListItem>
            <hr />
            <ListItem>
              <ListItemDecorator>
                <Icon icon="material-symbols-light:check" />
              </ListItemDecorator>
              Free Trial
            </ListItem>
            <ListItem>
              <ListItemDecorator>
                <Icon icon="material-symbols-light:check" />
              </ListItemDecorator>
              Secure FTP
            </ListItem>
            <ListItem>
              <ListItemDecorator>
                <Icon icon="material-symbols-light:check" />
              </ListItemDecorator>
              3 Steps Quality Control
            </ListItem>
            <ListItem>
              <ListItemDecorator>
                <Icon icon="material-symbols-light:check" />
              </ListItemDecorator>
              24×7 Support
            </ListItem>
            <ListItem>
              <ListItemDecorator>
                <Icon icon="material-symbols-light:check" />
              </ListItemDecorator>
              Low Cost
            </ListItem>
            <ListItem>
              <ListItemDecorator>
                <Icon icon="material-symbols-light:check" />
              </ListItemDecorator>
              Bulk Offer
            </ListItem>
            {/* <ListItem>
              <ListItemDecorator>
                <Icon icon="material-symbols-light:check" />
              </ListItemDecorator>
              API Integration
            </ListItem> */}
          </List>
          <Divider inset="none" />
          <CardActions>
            <Typography level="title-lg" sx={{ mr: "auto" }}>
              3.990€{" "}
              <Typography fontSize="sm" textColor="text.tertiary">
                / month
              </Typography>
            </Typography>
            <Button
              variant="soft"
              color="neutral"
              endDecorator={<Icon icon="ant-design:right-outlined" />}
            >
              Start now
            </Button>
          </CardActions>
        </Card>
        <Card size="lg" variant="outlined">
          {/* <Chip size="sm" variant="outlined" color="neutral">
            BASIC
          </Chip> */}
          <Typography level="h2">ENHANCEMENT</Typography>
          <Divider inset="none" />
          <List size="sm" sx={{ mx: "calc(-1 * var(--ListItem-paddingX))" }}>
            <ListItem>
              <ListItemDecorator>
                <Icon icon="material-symbols-light:check" />
              </ListItemDecorator>
              Image Retouch
            </ListItem>
            <ListItem>
              <ListItemDecorator>
                <Icon icon="material-symbols-light:check" />
              </ListItemDecorator>
              Creative Retouch
            </ListItem>
            <ListItem>
              <ListItemDecorator>
                <Icon icon="material-symbols-light:check" />
              </ListItemDecorator>
              High-end Retouch
            </ListItem>
            <ListItem>
              <ListItemDecorator>
                <Icon icon="material-symbols-light:check" />
              </ListItemDecorator>
              Image Manipulation
            </ListItem>
            <ListItem>
              <ListItemDecorator>
                <Icon icon="material-symbols-light:check" />
              </ListItemDecorator>
              Color Correction
            </ListItem>
            <ListItem>
              <ListItemDecorator>
                <Icon icon="material-symbols-light:check" />
              </ListItemDecorator>
              Color Change
            </ListItem>
            <ListItem>
              <ListItemDecorator>
                <Icon icon="material-symbols-light:check" />
              </ListItemDecorator>
              Pattern Change
            </ListItem>
            <ListItem>
              <ListItemDecorator>
                <Icon icon="material-symbols-light:check" />
              </ListItemDecorator>
              Real Estate Photo
            </ListItem>
            <ListItem>
              <ListItemDecorator>
                <Icon icon="material-symbols-light:check" />
              </ListItemDecorator>
              Old Photo Restoration
            </ListItem>
            <hr />
            <ListItem>
              <ListItemDecorator>
                <Icon icon="material-symbols-light:check" />
              </ListItemDecorator>
              Free Trial
            </ListItem>
            <ListItem>
              <ListItemDecorator>
                <Icon icon="material-symbols-light:check" />
              </ListItemDecorator>
              Secure FTP
            </ListItem>
            <ListItem>
              <ListItemDecorator>
                <Icon icon="material-symbols-light:check" />
              </ListItemDecorator>
              3 Steps Quality Control
            </ListItem>
            <ListItem>
              <ListItemDecorator>
                <Icon icon="material-symbols-light:check" />
              </ListItemDecorator>
              24×7 Support
            </ListItem>
            <ListItem>
              <ListItemDecorator>
                <Icon icon="material-symbols-light:check" />
              </ListItemDecorator>
              Low Cost
            </ListItem>
            <ListItem>
              <ListItemDecorator>
                <Icon icon="material-symbols-light:check" />
              </ListItemDecorator>
              Bulk Offer
            </ListItem>
          </List>
          <Divider inset="none" />
          <CardActions>
            <Typography level="title-lg" sx={{ mr: "auto" }}>
              3.990€{" "}
              <Typography fontSize="sm" textColor="text.tertiary">
                / month
              </Typography>
            </Typography>
            <Button
              variant="soft"
              color="neutral"
              endDecorator={<Icon icon="ant-design:right-outlined" />}
            >
              Start now
            </Button>
          </CardActions>
        </Card>
        <Card size="lg" variant="outlined">
          {/* <Chip size="sm" variant="outlined" color="neutral">
            BASIC
          </Chip> */}
          <Typography level="h2">VICTOR ILLUSTRATION & CONVERSION</Typography>
          <Divider inset="none" />
          <List size="sm" sx={{ mx: "calc(-1 * var(--ListItem-paddingX))" }}>
            <ListItem>
              <ListItemDecorator>
                <Icon icon="material-symbols-light:check" />
              </ListItemDecorator>
              Raster to Vector
            </ListItem>
            <ListItem>
              <ListItemDecorator>
                <Icon icon="material-symbols-light:check" />
              </ListItemDecorator>
              Plan Drawing
            </ListItem>
            <ListItem>
              <ListItemDecorator>
                <Icon icon="material-symbols-light:check" />
              </ListItemDecorator>
              Drawing of product
            </ListItem>
            <ListItem>
              <ListItemDecorator>
                <Icon icon="material-symbols-light:check" />
              </ListItemDecorator>
              Advertising Design
            </ListItem>
            <ListItem>
              <ListItemDecorator>
                <Icon icon="material-symbols-light:check" />
              </ListItemDecorator>
              Illustration
            </ListItem>
            <hr />
            <ListItem>
              <ListItemDecorator>
                <Icon icon="material-symbols-light:check" />
              </ListItemDecorator>
              Free Trail
            </ListItem>
            <ListItem>
              <ListItemDecorator>
                <Icon icon="material-symbols-light:check" />
              </ListItemDecorator>
              Secure FTP
            </ListItem>
            <ListItem>
              <ListItemDecorator>
                <Icon icon="material-symbols-light:check" />
              </ListItemDecorator>
              3 Steps Quality Control
            </ListItem>
            <ListItem>
              <ListItemDecorator>
                <Icon icon="material-symbols-light:check" />
              </ListItemDecorator>
              24×7 Support
            </ListItem>
            <ListItem>
              <ListItemDecorator>
                <Icon icon="material-symbols-light:check" />
              </ListItemDecorator>
              Low Cost
            </ListItem>
            <ListItem>
              <ListItemDecorator>
                <Icon icon="material-symbols-light:check" />
              </ListItemDecorator>
              Bulk Offer
            </ListItem>
           
          </List>
          <Divider inset="none" />
          <CardActions>
            <Typography level="title-lg" sx={{ mr: "auto" }}>
              3.990€{" "}
              <Typography fontSize="sm" textColor="text.tertiary">
                / month
              </Typography>
            </Typography>
            <Button
              variant="soft"
              color="neutral"
              endDecorator={<Icon icon="ant-design:right-outlined" />}
            >
              Start now
            </Button>
          </CardActions>
        </Card>
        <Card size="lg" variant="outlined">
          {/* <Chip size="sm" variant="outlined" color="neutral">
            BASIC
          </Chip> */}
          <Typography level="h2">CREATIVE EDITING SERVICE</Typography>
          <Divider inset="none" />
          <List size="sm" sx={{ mx: "calc(-1 * var(--ListItem-paddingX))" }}>
            <ListItem>
              <ListItemDecorator>
                <Icon icon="material-symbols-light:check" />
              </ListItemDecorator>
              Book & Magazine
            </ListItem>
            <ListItem>
              <ListItemDecorator>
                <Icon icon="material-symbols-light:check" />
              </ListItemDecorator>
              Brochures
            </ListItem>
            <ListItem>
              <ListItemDecorator>
                <Icon icon="material-symbols-light:check" />
              </ListItemDecorator>
              Language conversions of catalogs
            </ListItem>
            <ListItem>
              <ListItemDecorator>
                <Icon icon="material-symbols-light:check" />
              </ListItemDecorator>
              Language conversions of newsletters
            </ListItem>
            <ListItem>
              <ListItemDecorator>
                <Icon icon="material-symbols-light:check" />
              </ListItemDecorator>
              HTML Banner
            </ListItem>
            <hr />
            <ListItem>
              <ListItemDecorator>
                <Icon icon="material-symbols-light:check" />
              </ListItemDecorator>
              Free Trail
            </ListItem>
            <ListItem>
              <ListItemDecorator>
                <Icon icon="material-symbols-light:check" />
              </ListItemDecorator>
              Secure FTP
            </ListItem>
            <ListItem>
              <ListItemDecorator>
                <Icon icon="material-symbols-light:check" />
              </ListItemDecorator>
              3 Steps Quality Control
            </ListItem>
            <ListItem>
              <ListItemDecorator>
                <Icon icon="material-symbols-light:check" />
              </ListItemDecorator>
              24×7 Support
            </ListItem>
            <ListItem>
              <ListItemDecorator>
                <Icon icon="material-symbols-light:check" />
              </ListItemDecorator>
              Low Cost
            </ListItem>
            <ListItem>
              <ListItemDecorator>
                <Icon icon="material-symbols-light:check" />
              </ListItemDecorator>
              Bulk Offer
            </ListItem>
          </List>
          <Divider inset="none" />
          <CardActions>
            <Typography level="title-lg" sx={{ mr: "auto" }}>
              3.990€{" "}
              <Typography fontSize="sm" textColor="text.tertiary">
                / month
              </Typography>
            </Typography>
            <Button
              variant="soft"
              color="neutral"
              endDecorator={<Icon icon="ant-design:right-outlined" />}
            >
              Start now
            </Button>
          </CardActions>
        </Card>
      </Box>
    </div>
  );
}
