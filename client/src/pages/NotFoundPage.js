import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import routes from "../helpers/routes";
import "../styles/404.css";
const NotFoundPage = () => {
  return (
    <Container>
      <Row className="mt-5">
        <Col md={{ span: 6, offset: 3 }} className="text-center">
          <img
            className="img-404"
            src="/img/404-not-found.svg"
            alt="error-404"
          ></img>
          <h2>Te has perdido?</h2>
          <p>
            Vuelve al <Link to={routes.home}>Inicio</Link>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFoundPage;
