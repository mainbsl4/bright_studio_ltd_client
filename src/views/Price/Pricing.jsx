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
      <div className="flex flex-col justify-center items-center mt-10">
        <p>
          WE OFFER PROFESSIONAL PHOTO EDITING AND RETOUCHING SERVICES IN A QUICK
          TIME
        </p>
        <h3>PRICING AND COMPLEXITY</h3>
      </div>
      <p className="mb-10">
        The complexity of the object to be isolated and any further processing
        affects the cost per image. Bright Studio Ltd categorizes photographs
        into one of a few groups in order to determine the final cost of a
        service. Depending on the service you require, the complexity of the
        photographs, and the number you have, the cost of the services we
        provide vary from job to project. To give you an idea, our Photoshop
        clipping path prices start at €0.50 per image, and we provide
        substantial discounts for large orders. Upon examining your projects, we
        prefer to present you with reasonable costs if you require any more
        services or more. Bulk Images?
      </p>

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

              <ListItemDecorator
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                Clipping Path
                <span>$0.50</span>
              </ListItemDecorator>
            </ListItem>
            <ListItem>
              <ListItemDecorator>
                <Icon icon="material-symbols-light:check" />
              </ListItemDecorator>
              <ListItemDecorator
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                Image Masking
                <span>$1.50</span>
              </ListItemDecorator>
            </ListItem>
            <ListItem>
              <ListItemDecorator>
                <Icon icon="material-symbols-light:check" />
              </ListItemDecorator>
              {/* 360 Image */}
              <ListItemDecorator
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                360 Image
                <span>$1.00</span>
              </ListItemDecorator>
            </ListItem>
            <ListItem>
              <ListItemDecorator>
                <Icon icon="material-symbols-light:check" />
              </ListItemDecorator>
              {/* Shadow Making */}
              <ListItemDecorator
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                Shadow Making
                <span>$2.00</span>
              </ListItemDecorator>
            </ListItem>
            <ListItem>
              <ListItemDecorator>
                <Icon icon="material-symbols-light:check" />
              </ListItemDecorator>
              {/* E-commerce Image */}
              <ListItemDecorator
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                E-commerce Image
                <span>$1.00</span>
              </ListItemDecorator>
            </ListItem>
            <ListItem>
              <ListItemDecorator>
                <Icon icon="material-symbols-light:check" />
              </ListItemDecorator>
              {/* Neck Join/Ghost Mannequin */}
              <ListItemDecorator
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                Neck Join/Ghost Mannequin
                <span>$2.00</span>
              </ListItemDecorator>
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
              <ListItemDecorator
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                Image Retouch
                <span>$1.00</span>
              </ListItemDecorator>
            </ListItem>
            <ListItem>
              <ListItemDecorator>
                <Icon icon="material-symbols-light:check" />
              </ListItemDecorator>
                
                <ListItemDecorator
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                }}
                >
              Creative Retouch
                <span>$2.50</span>

                </ListItemDecorator>

            </ListItem>
            <ListItem>
              <ListItemDecorator>
                <Icon icon="material-symbols-light:check" />
              </ListItemDecorator>
              <ListItemDecorator
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                }}
                >
                  High-end Retouch
                  <span>$3.00</span>
                </ListItemDecorator>
            </ListItem>
            <ListItem>
              <ListItemDecorator>
                <Icon icon="material-symbols-light:check" />
              </ListItemDecorator>
              <ListItemDecorator
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                }}
                >
              Image Manipulation
              <span>$5.00</span>
                </ListItemDecorator>
            </ListItem>
            <ListItem>
              <ListItemDecorator>
                <Icon icon="material-symbols-light:check" />
              </ListItemDecorator>
              <ListItemDecorator
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                }}
                >
                  
              Color Correction
              <span>$1.50</span>
                </ListItemDecorator>
            </ListItem>
            <ListItem>
              <ListItemDecorator>
                <Icon icon="material-symbols-light:check" />
              </ListItemDecorator>
              <ListItemDecorator
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                }}
                >
                  
              Color Change
              <span>$1.00</span>
                </ListItemDecorator>
            </ListItem>
            <ListItem>
              <ListItemDecorator>
                <Icon icon="material-symbols-light:check" />
              </ListItemDecorator>
              <ListItemDecorator
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                }}
                >

              Pattern Change
              <span>$5.00</span>
                </ListItemDecorator>
            </ListItem>
            <ListItem>
              <ListItemDecorator>
                <Icon icon="material-symbols-light:check" />
              </ListItemDecorator>
              <ListItemDecorator
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                }}
                >

              Real Estate Photo
              <span>$4.00</span>
                </ListItemDecorator>
            </ListItem>
            <ListItem>
              <ListItemDecorator>
                <Icon icon="material-symbols-light:check" />
              </ListItemDecorator>
              <ListItemDecorator
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                }}
                >

              Old Photo Restoration
              <span>$10.00</span>
                </ListItemDecorator>
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
              <ListItemDecorator
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                }}
                >
                  
              Raster to Vector
              <span>$5.00</span>
                </ListItemDecorator>
            </ListItem>
            <ListItem>
              <ListItemDecorator>
                <Icon icon="material-symbols-light:check" />
              </ListItemDecorator>
              <ListItemDecorator
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                }}
                >

              Plan Drawing
              <span>$20.00</span>
                </ListItemDecorator>
            </ListItem>
            <ListItem>
              <ListItemDecorator>
                <Icon icon="material-symbols-light:check" />
              </ListItemDecorator>
              <ListItemDecorator
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                }}
                >

              Logo Dedign
              <span>$5.00</span>
                </ListItemDecorator>
            </ListItem>
            <ListItem>
              <ListItemDecorator>
                <Icon icon="material-symbols-light:check" />
              </ListItemDecorator>
              <ListItemDecorator
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                }}
                >

              Drawing of product
              <span>$5.00</span>
                </ListItemDecorator>
            </ListItem>
            <ListItem>
              <ListItemDecorator>
                <Icon icon="material-symbols-light:check" />
              </ListItemDecorator>
              <ListItemDecorator
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                }}
                >

              Advertising Design
              <span>$10.00</span>
                </ListItemDecorator>
            </ListItem>
            <ListItem>
              <ListItemDecorator>
                <Icon icon="material-symbols-light:check" />
              </ListItemDecorator>
              <ListItemDecorator
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                }}
                >

              Illustration
              <span>$20.00</span>
                </ListItemDecorator>
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
              <ListItemDecorator
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                }}
                >

              Book & Magazine
              <span>$99.00</span>
                </ListItemDecorator>
            </ListItem>
            <ListItem>
              <ListItemDecorator>
                <Icon icon="material-symbols-light:check" />
              </ListItemDecorator>
              <ListItemDecorator
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                }}
                >

              Brochures
              <span>$50.00</span>
                </ListItemDecorator>
            </ListItem>
            <ListItem>
              <ListItemDecorator>
                <Icon icon="material-symbols-light:check" />
              </ListItemDecorator>
              <ListItemDecorator
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                }}
                >

              Language conversions of catalogs
              <span>$50.00</span>
                </ListItemDecorator>
            </ListItem>
            <ListItem>
              <ListItemDecorator>
                <Icon icon="material-symbols-light:check" />
              </ListItemDecorator>
              <ListItemDecorator
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                }}
                >
                  
              Language conversions of newsletters
              <span>$8.00</span>
                </ListItemDecorator>
            </ListItem>
            <ListItem>
              <ListItemDecorator>
                <Icon icon="material-symbols-light:check" />
              </ListItemDecorator>
              <ListItemDecorator
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                }}
                >

              HTML Banner
              <span>$10.00</span>
                </ListItemDecorator>
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
