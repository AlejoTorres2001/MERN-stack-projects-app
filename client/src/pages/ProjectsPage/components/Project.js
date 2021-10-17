import React from "react";
import { Card, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import routes from "../../../helpers/routes";

const Project = ({ project }) => {
  const history = useHistory();
  const handleClick = (path) => {
    history.push(path);
  };
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={`${project.picture}`} />
      <Card.Body>
        <Card.Title>{project.name}</Card.Title>
        <Card.Subtitle>{project.description}</Card.Subtitle>
        {project.coWorkers.map((cw) => (
          <Card.Text>{cw}</Card.Text>
        ))}
        <Button
          onClick={() => handleClick(routes.project(project?._id))}
          variant="primary"
        >
          View Project
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Project;
