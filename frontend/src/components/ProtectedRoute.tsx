import React from "react";
import type { User } from "../pages/Register";
import Profile from "../pages/Profile";
import Login from "../pages/Login";

const ProtectedRoute = (isAuthenticated: boolean, user: User) => {
  fetch("http://localhost:3004/authenticate", {
    headers: {
      auhthorization: `Bearer ${token}`,
    },
  });
  return isAuthenticated ? <Profile user={user} /> : <Login />;
};

export default ProtectedRoute;
