import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ component: Component, token }) => {
  // const token = localStorage.getItem("");
  // const token1 = localStorage.getItem("stu-token");
  console.log("tokenhjhjhj", token);

  if (token) {
    return <Component />;
  } else {
    return <Navigate to={"/login"} />;
  }
};

export default ProtectedRoute;
