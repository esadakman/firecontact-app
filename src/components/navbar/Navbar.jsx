import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import Mando from "../../assets/mando.png";

const NavBar = () => {
  const openInNewTab = (url) => {
    // 👇️ setting target to _blank with window.open
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <AppBar
      position="absolute"
      style={{ background: "#050f24", height: "4rem" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            to="/home"
            sx={{
              ml: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              textDecoration: "none",
              cursor: "pointer",
            }}
            title="My Github"
            onClick={() => openInNewTab("https://github.com/esadakman")}
          >
            {`<esad/>`}
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}></Box>

          <Typography
            variant="h5"
            noWrap
            to="/home"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              textDecoration: "none",
              cursor: "pointer",
            }}
            title="My Github"
            onClick={() => openInNewTab("https://github.com/esadakman")}
          >
            {`<esad/>`}
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
            }}
          ></Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="My Github">
              <IconButton
                onClick={() => openInNewTab("https://github.com/esadakman")}
                sx={{ p: 0 }}
              >
                <Avatar alt="Mandalorian" src={Mando} />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
