import React, { useEffect } from "react";
import { Button, Modal, Alert, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import ChangePasswordResolver from "../../../validations/ChangePasswordResolver";
const ChangeModal = ({ isOpen, close }) => {
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
  const onSubmit = (formData) => {
    alert("cambiando contraseña");
    close();
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
