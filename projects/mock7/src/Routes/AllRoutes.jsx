import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminPrivateRoute from "../Components/AdminPrivateRoute";
import PrivateRoute from "../Components/PrivateRoute";
import Dashboard from "./Dashboard";
import Login from "./Login";
import Portfolio from "./Portfolio";
import Register from "./Register";
import Stock from "./Stock";
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/dashboard"
        element={
          <AdminPrivateRoute>
            <Dashboard />
          </AdminPrivateRoute>
        }
      />
      <Route
        path="/stocks"
        element={
          <PrivateRoute>
            <Stock />
          </PrivateRoute>
        }
      />
      <Route
        path="/portfolio"
        element={
          <PrivateRoute>
            <Portfolio />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default AllRoutes;
