import React from "react";
import { useLocation } from "react-router-dom";
import useAuth from "../auth/useAuth";

const userCredentials = {};

const LoginPage = () => {
  const location = useLocation();
  console.log(location);
  const { logIn } = useAuth();
  return (
    <div>
      <h1>Login</h1>
      <button onClick={() => logIn(userCredentials, location.state?.from)}>
        Inciar Sesion
      </button>
    </div>
  );
};

export default LoginPage;
