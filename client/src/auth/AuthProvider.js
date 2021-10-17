import { useState } from "react";
import { createContext } from "react";
import { useHistory } from "react-router-dom";
import {
  DELETE,
  LOGIN,
  PROJECTS,
  PROXY,
  setOptions,
  UPDATE,
  USERS,
} from "../helpers/urls";
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const history = useHistory();
  const [user, setUser] = useState(null);
  const isLogged = () => !!user;
  const hasRole = (role) => user?.role === role;

  const logIn = async (userCredentials, fromLocation) => {
    const response = await fetch(
      `${PROXY}${USERS}${LOGIN}`,
      setOptions("POST", userCredentials)
    );
    const data = await response.json();
    const { errors } = data;
    if (!errors) {
      setUser(data[0]);
      if (fromLocation) history.push(fromLocation);
    }
    return errors;
  };
  const deleteUser = async () => {
    const response = await fetch(
      `${PROXY}${USERS}${DELETE(user._id)}`,
      setOptions("DELETE")
    );
    return await response.json();
  };
  const logOut = () => setUser(null);

  const updateUser = async (data) => {
    setUser({
      ...user,
      ...data,
    });
    const res = await fetch(
      `${PROXY}${USERS}${UPDATE(user._id)}`,
      setOptions("PUT", data)
    );
    return await res.json();
  };

  const postNewUser = async (userData) => {
    const res = await fetch(`${PROXY}${USERS}`, setOptions("POST", userData));
    return await res.json();
  };
  const getProjects = async () =>{
    const res = await fetch(`${PROXY}${PROJECTS}`,setOptions("POST",{name:user.name}))
    return await res.json()
  }
  const getProject = async (id) =>{
    const res = await fetch(`${PROXY}${PROJECTS}/:${id}`)
    return await res.json()
  }
  const contextValue = {
    user,
    isLogged,
    hasRole,
    logIn,
    logOut,
    updateUser,
    postNewUser,
    deleteUser,
    getProjects,
    getProject,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
