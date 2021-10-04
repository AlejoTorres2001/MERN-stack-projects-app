import React, { useEffect, useState } from "react";
import { Button, Modal, Alert, Form, Container, Col, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import useAuth from "../auth/useAuth";
import { roles } from "../helpers/roles";
import NewAccountResolver from "../validations/NewAccountResolver";
const RegisterPage = () => {
  const { postNewUser} = useAuth();
  const [serverMessage, setserverMessage] = useState(null)
  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields },
    reset
  } = useForm({ resolver: NewAccountResolver });
  const isDirty = !!Object.keys(dirtyFields).length;
  const onSubmit = async (formData) => {
    if (!isDirty) return;
    reset({ name: '', email: '', password:''  })
    const {code} = await postNewUser(formData)  ;
    console.log(code)
    setserverMessage(code)
  }

  return (
   <Container>
     <Col md={{ span: 6, offset: 3 }}>
     <Row>
     <Form onSubmit={handleSubmit(onSubmit)} className="mt-2 mb-2 w-100">
    {serverMessage && (<Alert type="success">{serverMessage}</Alert>)}

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
          </Form.Group >
          <Form.Group className="mt-2">
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
          <Form.Group className="mt-2">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="***"
             {...register("password")}></Form.Control>
            {errors?.password && (
              <Form.Text>
                <Alert variant="danger">{errors.password.message}</Alert>
              </Form.Text>
            )}
          </Form.Group>
          <Form.Group className="mt-2">
            <Form.Control type="submit" onClick={handleSubmit(onSubmit)}></Form.Control>
          </Form.Group>
        </Form>
     </Row>
     </Col>
   </Container>
  );
};

export default RegisterPage;
