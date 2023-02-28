// import logo from './logo.svg';
import "./App.css";
import Login from "./Component/Login/Login";
import Register from "./Component/Register/Register";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar/Navbar";
import Home from "./Component/Homepage/Home";
import Protected from "./Component/Protected";
import Profile from "./Component/Profile";


// export const endpoint=`http://localhost:5000/api`
export const endpoint = `https://int-server.onrender.com/api`

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>

        <Route  excat path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={< Protected Component={Profile}/>}/>

      </Routes>
      {/*  */}
    </div>
  );
}

export default App;
