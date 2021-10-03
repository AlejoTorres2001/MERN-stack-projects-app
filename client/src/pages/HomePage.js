import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import routes from "../helpers/routes";
const HomePage = ()  => {
  const getData =async () =>{
    const res = await fetch('http://localhost:8080/http://localhost:3001/api/users')
    const data = await res.json()
    console.log(data)

  }
  return (
    <Container>
      <Button onClick={getData}>get data</Button>
      <Row className="mt-5">
        <Col xs={{ span: 12 }} md={{ span: 6 }} className="mb-5">
          <h2>Welcome to Task Manager</h2>
          <p>Here you will be able to manage all your proyects!</p>
          <p>
            Tick your tasks as finished,add new ones, delete them or update
            previous tasks
          </p>
        </Col>
        <div>
          <Button className="ms-1" as={Link} to={routes.register}>
            Sign-in
          </Button>{" "}
          or <Link to={routes.login}>Log-in</Link>
        </div>
        <Col>
          <img
            src="/img/task-manager.svg"
            alt="gestor-de-tareas"
            className="img-fluid"
          />
          <p>Manage you time,improve your productivity</p>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
