import { useState } from "react";
import { createContext } from "react";
import { useHistory } from "react-router-dom";
import {roles} from "../helpers/roles"
export const AuthContext = createContext()



const AuthProvider = ({children}) => {
    const history = useHistory()
    const[user,setUser] =  useState(null)
    const isLogged= () => !!user;
    const hasRole = (role) =>  user?.role === role;
    const logIn= (userCredentials,fromLocation) => {setUser({id:1,role:roles.regular,name:"Alejo",email:"asdas@gmail.com",profilePic:''})
    if(fromLocation) history.push(fromLocation)

}

    const logOut = () => setUser(null)
    
    const updateUser = (data) =>{
        setUser({
            ...user,...data
        })
    }
    const contextValue={
        user,
        isLogged,
        hasRole,
        logIn,
        logOut,
        updateUser
    }
    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
