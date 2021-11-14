import React, { useState } from "react";
import useAuth from "../../../auth/useAuth";
import { useEffect } from "react";
const UsersPage = () => {
   const [Users,setUsers]=useState(null);
  const {getUsers} = useAuth();
  useEffect(() => {
  const handleUsers = async () =>{
    const users = await getUsers()
    setUsers(users)
  }
  handleUsers() 
  }, [])
  if(Users===null){
    return(
      <h1>Loading...</h1>
    )
  }
  return (
    <div>
      {Users.map(user => <h1>{user.name}</h1>)}
    </div>
  );
};

export default UsersPage;
