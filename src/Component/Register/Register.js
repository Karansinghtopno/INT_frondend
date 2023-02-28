import React, { useState } from "react";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
} from "@mui/material";
import Person3OutlinedIcon from "@mui/icons-material/Person3Outlined";
import { Link } from "react-router-dom";
import axios from "axios";
import { endpoint } from "../../App";
import "./Register.css";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";

const Register = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isReg, setIsReg] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const paperStyle = {
    padding: "20px",
    height: "70vh",
    width: "350px",
    margin: "70px auto",
  };
  const avatarStyle = {
    backgroundColor: "#1976d2",
  };

  const marginStyle = { marginBottom: "10px" };

  const handleRegister = async () => {
    try {
      const URL = `${endpoint}/auth/register`;
      console.log(URL);
      console.log({ email, username, password });
      const res = await axios.post(URL, { email, username, password });
      console.log(res.status);
      if (res.status !== 201) {
        enqueueSnackbar("Registration Failed", { variant: "error" });
        return;
      }
      setIsReg(true);

      enqueueSnackbar("Registraterd successfully", { variant: "success" });
      setEmail("");
      setPassword("");
      setUsername("");
      navigate("/");
    } catch (error) {
      enqueueSnackbar(error.message,{variant:"error"})
      console.log(error.message);
    }
  };
  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle} sx={{ width: 56, height: 56 }}>
            <Person3OutlinedIcon />
          </Avatar>
          <h2 style={{ margin: "20px" }}>Register</h2>
        </Grid>
        <TextField
          label="Email"
          placeholder="Enter Email"
          fullWidth
          style={marginStyle}
          value={email}
          required={true}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Username"
          placeholder="Enter Username"
          fullWidth
          required={true}
          style={marginStyle}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          placeholder="Enter Password"
          fullWidth
          required={true}
          style={marginStyle}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          color="primary"
          variant="contained"
          fullWidth
          style={{ margin: "10px 0", padding: "10px" }}
          onClick={handleRegister}
        >
          Register
        </Button>
        <Typography sx={{ marginTop: "10px" }}>
          Already have account? <Link to="/login"> Sign In</Link>
        </Typography>
        {message.length > 0 && <h5>{message}</h5>}
      </Paper>
    </Grid>
  );
};

export default Register;
