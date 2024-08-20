import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
// import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { Button, Paper } from "@mui/material";

import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  height: 600,
  overflow: "auto",
  outline: "none",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
  flexWrap: "wrap",
  "& > :not(style)": {
    m: 1,
    width: 200,
    height: 200,
  },
  // overflowY Scroll 
  // overflowY: "scroll",
};

// const pages = ["Home", "About", "Contact"];
const pages = [
  {
    routename: "Home",
    pathNmae: "/",
  },
  {
    routename: "About",
    pathNmae: "/about",
  },
  {
    routename: "Services",
    pathNmae: "/services",
  },
  {
    routename: "Price",
    pathNmae: "/price",
  },
  {
    routename: "Free Trial",
    pathNmae: "/FreeTrial",
  },
  {
    routename: "Contact",
    pathNmae: "/contact",
  },
];
// const settings = ["Profile", "Account", "Dashboard", "Logout"];


// const timeZones = [
//   { label: "New York, USA", timeZone: "America/New_York" },
//   { label: "London, UK", timeZone: "Europe/London" },
//   { label: "Paris, France", timeZone: "Europe/Paris" },
//   { label: "Tokyo, Japan", timeZone: "Asia/Tokyo" },
//   { label: "Sydney, Australia", timeZone: "Australia/Sydney" },
//   { label: "Bangkok, Thailand", timeZone: "Asia/Bangkok" },
//   { label: "Dubai, UAE", timeZone: "Asia/Dubai" },
//   { label: "São Paulo, Brazil", timeZone: "America/Sao_Paulo" },
//   { label: "Moscow, Russia", timeZone: "Europe/Moscow" },
//   { label: "Hong Kong", timeZone: "Asia/Hong_Kong" },
//   // Add more time zones as needed
// ];

const timeZones = [
  // Existing time zones
  { label: "New York, USA", timeZone: "America/New_York" },
  { label: "London, UK", timeZone: "Europe/London" },
  { label: "Paris, France", timeZone: "Europe/Paris" },
  { label: "Tokyo, Japan", timeZone: "Asia/Tokyo" },
  { label: "Sydney, Australia", timeZone: "Australia/Sydney" },
  { label: "Bangkok, Thailand", timeZone: "Asia/Bangkok" },
  { label: "Dubai, UAE", timeZone: "Asia/Dubai" },
  { label: "São Paulo, Brazil", timeZone: "America/Sao_Paulo" },
  { label: "Moscow, Russia", timeZone: "Europe/Moscow" },
  { label: "Hong Kong", timeZone: "Asia/Hong_Kong" },
  { label: "Los Angeles, USA", timeZone: "America/Los_Angeles" },
  // { label: "Toronto, Canada", timeZone: "America/Toronto" },
  { label: "Berlin, Germany", timeZone: "Europe/Berlin" },
  { label: "Rome, Italy", timeZone: "Europe/Rome" },
  { label: "Istanbul, Turkey", timeZone: "Europe/Istanbul" },
  { label: "Cape Town, South Africa", timeZone: "Africa/Johannesburg" },
  { label: "Singapore", timeZone: "Asia/Singapore" },
  { label: "Mexico City, Mexico", timeZone: "America/Mexico_City" },
  { label: "Buenos Aires, Argentina", timeZone: "America/Argentina/Buenos_Aires" },
  { label: "Seoul, South Korea", timeZone: "Asia/Seoul" },
  { label: "Auckland, New Zealand", timeZone: "Pacific/Auckland" },
  { label: "Lima, Peru", timeZone: "America/Lima" },
  // { label: "Wellington, New Zealand", timeZone: "Pacific/Wellington" },
  { label: "Jakarta, Indonesia", timeZone: "Asia/Jakarta" },
  { label: "Kuala Lumpur, Malaysia", timeZone: "Asia/Kuala_Lumpur" },
  { label: "Vienna, Austria", timeZone: "Europe/Vienna" },
  { label: "Athens, Greece", timeZone: "Europe/Athens" },
  { label: "Doha, Qatar", timeZone: "Asia/Qatar" },
  { label: "Helsinki, Finland", timeZone: "Europe/Helsinki" },
  { label: "Oslo, Norway", timeZone: "Europe/Oslo" },
  { label: "Stockholm, Sweden", timeZone: "Europe/Stockholm" },
  { label: "Lisbon, Portugal", timeZone: "Europe/Lisbon" },
  { label: "Addis Ababa, Ethiopia", timeZone: "Africa/Addis_Ababa" },
  { label: "Nairobi, Kenya", timeZone: "Africa/Nairobi" },
  { label: "Riyadh, Saudi Arabia", timeZone: "Asia/Riyadh" },
  { label: "Ulaanbaatar, Mongolia", timeZone: "Asia/Ulaanbaatar" },
  { label: "Chennai, India", timeZone: "Asia/Kolkata" },
  { label: "Manila, Philippines", timeZone: "Asia/Manila" },
  { label: "Aden, Yemen", timeZone: "Asia/Aden" },
  { label: "Port Moresby, Papua New Guinea", timeZone: "Pacific/Port_Moresby" },
  { label: "Brisbane, Australia", timeZone: "Australia/Brisbane" },
  { label: "Adelaide, Australia", timeZone: "Australia/Adelaide" },
  // { label: "Honiara, Solomon Islands", timeZone: "Pacific/Honiara" },
  { label: "Suva, Fiji", timeZone: "Pacific/Fiji" },
  { label: "Nouméa, New Caledonia", timeZone: "Pacific/Noumea" },
  { label: "Samoa", timeZone: "Pacific/Apia" },
  { label: "Tahiti, French Polynesia", timeZone: "Pacific/Tahiti" },
  { label: "Vancouver, Canada", timeZone: "America/Vancouver" },
  { label: "San Francisco, USA", timeZone: "America/Los_Angeles" },
  { label: "Dallas, USA", timeZone: "America/Chicago" },
  { label: "Seattle, USA", timeZone: "America/Los_Angeles" },
  { label: "Chicago, USA", timeZone: "America/Chicago" },
  { label: "Cairo, Egypt", timeZone: "Africa/Cairo" },
  { label: "Tunis, Tunisia", timeZone: "Africa/Tunis" },
  { label: "Casablanca, Morocco", timeZone: "Africa/Casablanca" },

  // Additional time zones
  { label: "Mumbai, India", timeZone: "Asia/Kolkata" },
  { label: "Dhaka, Bangladesh", timeZone: "Asia/Dhaka" },
  { label: "Karachi, Pakistan", timeZone: "Asia/Karachi" },
  { label: "Lagos, Nigeria", timeZone: "Africa/Lagos" },
  { label: "Jerusalem, Israel", timeZone: "Asia/Jerusalem" },
  { label: "Kiev, Ukraine", timeZone: "Europe/Kiev" },
  { label: "Tallinn, Estonia", timeZone: "Europe/Tallinn" },
  { label: "Vilnius, Lithuania", timeZone: "Europe/Vilnius" },
  { label: "Bucharest, Romania", timeZone: "Europe/Bucharest" },
  { label: "Warsaw, Poland", timeZone: "Europe/Warsaw" },
  { label: "Sofia, Bulgaria", timeZone: "Europe/Sofia" },
  { label: "Bratislava, Slovakia", timeZone: "Europe/Bratislava" },
  { label: "Ljubljana, Slovenia", timeZone: "Europe/Ljubljana" },
  { label: "Zagreb, Croatia", timeZone: "Europe/Zagreb" },
  { label: "Sarajevo, Bosnia and Herzegovina", timeZone: "Europe/Sarajevo" },
  { label: "Podgorica, Montenegro", timeZone: "Europe/Podgorica" },
  // { label: "Pristina, Kosovo", timeZone: "Europe/Pristina" },
  { label: "Belgrade, Serbia", timeZone: "Europe/Belgrade" },
  { label: "Monaco", timeZone: "Europe/Monaco" },
  { label: "Andorra la Vella, Andorra", timeZone: "Europe/Andorra" },
  { label: "San Marino", timeZone: "Europe/San_Marino" },
  { label: "Liechtenstein", timeZone: "Europe/Vaduz" },
  { label: "Malta", timeZone: "Europe/Malta" },
  { label: "Luxembourg", timeZone: "Europe/Luxembourg" },
  { label: "Brussels, Belgium", timeZone: "Europe/Brussels" },
  { label: "Dublin, Ireland", timeZone: "Europe/Dublin" },
  { label: "Gibraltar", timeZone: "Europe/Gibraltar" },
  { label: "Riga, Latvia", timeZone: "Europe/Riga" },
  { label: "Helsinki, Finland", timeZone: "Europe/Helsinki" },
  { label: "Reykjavik, Iceland", timeZone: "Atlantic/Reykjavik" },
  { label: "Canberra, Australia", timeZone: "Australia/Canberra" },
  { label: "Hobart, Australia", timeZone: "Australia/Hobart" },
];

export default function Nav() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  // const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null);
  // };

  // for modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // for time
  // const [timeBangladesh, setTimeBangladesh] = React.useState("");
  // const [timeIndia, setTimeIndia] = React.useState("");
  // const [timeUS, setTimeUS] = React.useState("");
  const [times, setTimes] = React.useState({});

  // for time
  // React.useEffect(() => {
  //   const updateClocks = () => {
  //     const now = new Date();

  //     // Time zones for each country
  //     const options = {
  //       timeZone: "Asia/Dhaka", // Bangladesh
  //       hour12: false,
  //       hour: "numeric",
  //       minute: "numeric",
  //       second: "numeric",
  //     };

  //     setTimeBangladesh(now.toLocaleTimeString("en-US", options));

  //     options.timeZone = "Asia/Kolkata"; // India
  //     setTimeIndia(now.toLocaleTimeString("en-US", options));

  //     options.timeZone = "America/New_York"; // United States
  //     setTimeUS(now.toLocaleTimeString("en-US", options));
  //   };

  //   const interval = setInterval(updateClocks, 1000); // Update every second

  //   // Initial update
  //   updateClocks();

  //   return () => clearInterval(interval); // Cleanup on unmount
  // }, []);

  React.useEffect(() => {
    const updateClocks = () => {
      const now = new Date();
      const updatedTimes = {};

      timeZones.forEach(({ label, timeZone }) => {
        const options = {
          timeZone,
          hour12: false,
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
        };
        updatedTimes[label] = now.toLocaleTimeString("en-US", options);
      });

      setTimes(updatedTimes);
    };

    updateClocks();
    const interval = setInterval(updateClocks, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <AppBar position="sticky" color="inherit">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* <Icon icon="mdi-light:home"  /> */}
            {/* <AdbIcon  /> */}
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
                width: "120px",
                height: "auto",
              }}
            >
              <img
                src="https://res.cloudinary.com/dqkd7vayw/image/upload/v1722538169/BRLogo.png"
                alt="logo"
              />
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                {/* <Icon icon="mdi-light:home" /> */}
                <Icon icon="material-symbols-light:menu" />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page.routename} onClick={handleCloseNavMenu}>
                    <Link to={`${page.pathNmae}`}>{page.routename}</Link>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex", justifyContent: "center" },
              }}
            >
              {pages.map((page) => (
                <Link
                  key={page.routename}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                  to={`${page.pathNmae}`}
                  className=" px-2 py-1 rounded hover:bg-[#F7F7FA]"
                >
                  {page.routename}
                </Link>
              ))}
            </Box>
            <IconButton
              aria-label="delete"
              color="success"
              sx={{ marginRight: "5px" }}
              onClick={handleOpen}
            >
              <Icon icon="svg-spinners:clock" />
            </IconButton>
            <Button
              variant="contained"
              endIcon={<Icon icon="material-symbols:send" />}
            >
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              <Link to={`/contact`}>LET'S TALK</Link>
            </Button>

            {/* <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> */}
          </Toolbar>
        </Container>
      </AppBar>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        {timeZones.map(({ label }) => (
        <Paper key={label} elevation={3} sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", margin: 1 }}>
          <p>{label}</p>
          <p>{times[label]}</p>
        </Paper>
      ))}
        </Box>
      </Modal>
    </div>
  );
}
