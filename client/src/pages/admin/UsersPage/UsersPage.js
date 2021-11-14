import React, { useState } from "react";
import useAuth from "../../../auth/useAuth";
import { useEffect } from "react";
import UserCard from "./components/UserCard";
import { Container } from "react-bootstrap";
const UsersPage = () => {
  const {Users,getUsers} = useAuth();
  const handleUsers = async () =>{
    await getUsers();
  }
  useEffect(() => {
    handleUsers();
  }, [])
  if(Users===null){
    return(
      <h1>Loading...</h1>
    )
  }
  return (
    <div className="d-flex row justify-content-center align-content-lg-center m-4" >
      {Users.map(user => UserCard(user))}
    </div>
  );
};

export default UsersPage;
