import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogOutButton = () => {
  const { logout, onRedirectCallback } = useAuth0();

  const handleLogout = () => {
    logout({
      returnTo: window.location.origin, // Redirige al inicio después de cerrar sesión
      onRedirectCallback,
    });
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default LogOutButton;
