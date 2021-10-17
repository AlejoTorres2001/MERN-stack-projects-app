import React from "react";
import { Card, Button } from "react-bootstrap";

const Project = ({ project }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={`${project.picture}`} />
      <Card.Body>
        <Card.Title>{project.name}</Card.Title>
        <Card.Subtitle>{project.description}</Card.Subtitle>
        {project.coWorkers.map((cw) => (
          <Card.Text>{cw}</Card.Text>
        ))}
        <Button variant="primary">View Project</Button>
      </Card.Body>
    </Card>
  );
};

export default Project;
