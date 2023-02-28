import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Protected = ({ Component }) => {


  const navigate = useNavigate();

  useEffect(() => {
    let login = localStorage.getItem("hello");
    if (!login) {
      navigate("/login");
    }
  });
  return (
    <div>
      <Component />
    </div>
  );
};

export default Protected;
