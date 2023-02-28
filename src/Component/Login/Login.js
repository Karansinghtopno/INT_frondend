import React, { useEffect, useState } from "react";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { endpoint } from "../../App";
import axios from "axios";
import { useSnackbar } from "notistack";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const paperStyle = {
    padding: "20px",
    height: "70vh",
    width: "350px",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "70px",
  };
  const avatarStyle = {
    backgroundColor: "#1976d2",
  };

  const marginStyle = { margin: "20px 0px" };

  const loginHandler = async () => {
    try {
      const URL = `${endpoint}/auth/login`;
      const res = await axios.post(URL, { email, password });
      // console.log(res.status);
      if(res.status===200){
        enqueueSnackbar("login successful", { variant: "success" });
      }
      setEmail("");
      setPassword("")
      navigate("/")
    } catch (error) {
      enqueueSnackbar(error.message, { variant: "error" });
    }

    // localStorage.setItem("hello", true);
    // navigate("/");
  };
  useEffect(() => {
    // let login = localStorage.getItem("hello");
    // if (login) {
    //   navigate("/");
    // }
  });

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle} sx={{ width: 56, height: 56 }}>
            <LockOutlinedIcon />
          </Avatar>
          <h2 style={{ margin: "20px" }}>Sign In</h2>
        </Grid>
        <TextField
          label="Email"
          placeholder="Enter Email"
          fullWidth
          required
          value={email}
          style={marginStyle}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          placeholder="Enter Password"
          fullWidth
          required
          value={password}
          style={marginStyle}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          color="primary"
          variant="contained"
          fullWidth
          style={{ margin: "20px 0", padding: "10px" }}
          onClick={loginHandler}
        >
          Sign In
        </Button>
        <Typography>
          Do Not have Account <Link to="/register">Register</Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default Login;
