import React, { useEffect } from "react";
import { Button, Modal, Alert, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import useAuth from "../auth/useAuth";
import { roles } from "../helpers/roles";
import NewAccountResolver from "../validations/NewAccountResolver";
const RegisterPage = () => {
  const { postNewUser} = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields }
  } = useForm({ resolver: NewAccountResolver });
  const isDirty = !!Object.keys(dirtyFields).length;

  const onSubmit = (formData) => {
    if (!isDirty) return;
   postNewUser(formData);
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group>
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
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="email"
              {...register("email")}
            ></Form.Control>
            {errors?.email && (
              <Form.Text>
                <Alert variant="danger">{errors.email.message}</Alert>
              </Form.Text>
            )}
          </Form.Group>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control type="password"
             {...register("password")}></Form.Control>
            {errors?.password && (
              <Form.Text>
                <Alert variant="danger">{errors.password.message}</Alert>
              </Form.Text>
            )}
          </Form.Group>
          <Form.Group>
            <Form.Control type="submit" onClick={handleSubmit(onSubmit)}></Form.Control>
          </Form.Group>
        </Form>
  );
};

export default RegisterPage;
