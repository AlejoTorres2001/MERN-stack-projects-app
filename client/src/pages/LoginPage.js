import React from "react";
import { Alert, Col, Container, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import useAuth from "../auth/useAuth";
import LoginAccountResolver from "../validations/LoginAccountResolver";

const userCredentials = {};

const LoginPage = () => {
  const location = useLocation();
  const { logIn } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields },
    reset,
  } = useForm({resolver:LoginAccountResolver});
  const isDirty = !!Object.keys(dirtyFields).length;
  const onSubmit = async (formData) => {
    if (!isDirty) return;
    const errors = await logIn(formData, location.state?.from)
    console.log(errors)
    reset({ name: "", email: "", password: "" });

  };
  return (
    <div>
      <Container>
      <Col md={{ span: 6, offset: 3 }}>
        <Row>
          <Form onSubmit={handleSubmit(onSubmit)} className="mt-2 mb-2 w-100">
            <Form.Group className="mt-2">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="New Name"
                {...register("name")}
              ></Form.Control>
               {errors?.name && (
                <Form.Text>
                  <Alert variant="danger">{errors.name.message}</Alert>
                </Form.Text>
              )}
            </Form.Group>

            <Form.Group className="mt-2">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="***"
                {...register("password")}
              ></Form.Control>
              {errors?.password && (
                <Form.Text>
                  <Alert variant="danger">{errors.password.message}</Alert>
                </Form.Text>
              )}
            </Form.Group>
            <Form.Group className="mt-2">
              <Form.Control
                type="submit"
                onClick={handleSubmit(onSubmit)}
              ></Form.Control>
            </Form.Group>
          </Form>
        </Row>
      </Col>
    </Container>
    </div>
  );
};

export default LoginPage;
