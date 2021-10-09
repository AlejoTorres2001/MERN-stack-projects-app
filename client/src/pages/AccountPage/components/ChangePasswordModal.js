import React, { useEffect, useState } from "react";
import { Button, Modal, Alert, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import useAuth from "../../../auth/useAuth";
import useServerResponse from "../../../hooks/useServerResponse";
import ChangePasswordResolver from "../../../validations/ChangePasswordResolver";
const ChangeModal = ({ isOpen, close }) => {
  const{updateUser}=useAuth()
  const [serverResponse, setServerResponse] = useServerResponse();
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: ChangePasswordResolver });
  useEffect(() => {
    if (!isOpen) {
      reset();
    }
  }, [isOpen, reset]);
  const onSubmit = async(formData) => {
   const result = await  updateUser(formData)
    setServerResponse(result)
   if(result.code === 0)close();
  };
  return (
    <Modal show={isOpen} onHide={close}>
      <Modal.Header closeButton>
        <Modal.Title>Change Password</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group>
            <Form.Label>New Password</Form.Label>
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
            {serverResponse?.code !== 0 && <Alert variant="danger">{serverResponse?.message}</Alert>}
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={close}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleSubmit(onSubmit)}>
          Change Password
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ChangeModal;
