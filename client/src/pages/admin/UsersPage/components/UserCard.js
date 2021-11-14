
import React from 'react'
import { Card, Button } from "react-bootstrap";
import useAuth from '../../../../auth/useAuth';
const UserCard = (user) => {
    const {deleteUser}=useAuth();
    return (
        <Card style={{ width: "10rem" }}>
        <Card.Img variant="top"  src={`${user.profilePic}` || "/img/male_avatar.svg"} />
        <Card.Body>
          <Card.Title>{user.name}</Card.Title>
          <Card.Subtitle>{user.email}</Card.Subtitle>
          <Button
            variant="danger"
            onClick={()=> deleteUser(user._id)}
          >
            Delete
          </Button>
        </Card.Body>
      </Card>
    )
}

export default UserCard
