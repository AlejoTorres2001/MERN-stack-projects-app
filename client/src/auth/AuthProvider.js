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

  const logIn = async (userCredentials, fromLocation) => {
    const options = {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json',
      },
      body: JSON.stringify(userCredentials),
      };
      const response = await fetch(`${PROXY}${USERS}/login`,options)
      const data = await  response.json()
      const {errors} = data
      if(!errors){
        setUser(data)
        if (fromLocation) history.push(fromLocation);
      }
      return errors
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
