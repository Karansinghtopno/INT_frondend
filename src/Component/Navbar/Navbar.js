import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";

// const navItems = ['Home', 'Profile', 'Files'];
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <AppBar component="nav">
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
        >
          <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
            APP
          </Link>
        </Typography>
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          <Button sx={{ color: "#fff" }}><Link
              to="/profile"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              Profile
            </Link></Button>
          <Button sx={{ color: "#fff" }}>
            <Link
              to="/login"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              login
            </Link>
          </Button>
          <Button sx={{ color: "#fff" }}>
            <Link
              to="/register"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              Register
            </Link>
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
