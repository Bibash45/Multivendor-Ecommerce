import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const Home = () => {
  const { role } = useSelector((state) => state.auth) || {};

  if (!role) return <Navigate to="/login" replace />;

  if (role === "admin") return <Navigate to="/admin/dashboard" replace />;
  if (role === "seller") return <Navigate to="/seller/dashboard" replace />;

  return <Navigate to="/login" replace />;
};

export default Home;
