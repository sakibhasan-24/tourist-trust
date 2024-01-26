import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function Protected({ children }) {
  const location = useLocation();
  const { user, loading } = useAuth();
  if (loading) {
    return <div>Loading...</div>;
  }
  if (user) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace />;
}
