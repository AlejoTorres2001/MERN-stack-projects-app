import { useState } from "react";
import { createContext } from "react";
import { useHistory } from "react-router-dom";
import { roles } from "../helpers/roles";
import { PROXY, USERS } from "../helpers/urls";
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const history = useHistory();
  const [user, setUser] = useState(null);
  const isLogged = () => !!user;
  const hasRole = (role) => user?.role === role;
  const logIn = (userCredentials, fromLocation) => {
    setUser({
      id: 1,
      role: roles.regular,
      name: "Alejo",
      email: "asdas@gmail.com",
      profilePic: "",
    });
    if (fromLocation) history.push(fromLocation);
  };

  const logOut = () => setUser(null);

  const updateUser = (data) => {
    setUser({
      ...user,
      ...data,
    });
  };

  const postNewUser= async (userData)=>{
    const options = {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
      };
      const res = await fetch(`${PROXY}${USERS}`,options)
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
  };
 
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
