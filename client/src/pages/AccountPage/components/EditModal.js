import React, { useEffect, useState } from "react";
import { Button, Modal, Alert, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import useAuth from "../../../auth/useAuth";
import { roles } from "../../../helpers/roles";
import EditAccountResolver from "../../../validations/EditAccountResolver";
const EditModal = ({ isOpen, close }) => {
  const { user, updateUser, hasRole } = useAuth();
  const [serverResponse, setServerResponse] = useState({code:0,message:''});

  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields },
    reset,
  } = useForm({ resolver: EditAccountResolver });

  useEffect(() => {
    if (user) reset({ name: user.name, email: user.email, role: user.role });
  }, [user, reset]);
  const isDirty = !!Object.keys(dirtyFields).length;
  const onSubmit = async (formData) => {
    if (!isDirty) return;
    let newUserData;
    if (formData.role) {
      newUserData = formData;
    } else {
      const { role, ...resformData } = formData;
      newUserData = resformData;
    }
    const response = await updateUser(newUserData);
    setServerResponse(response)
    if(response.code === 0)close();

  };
  return (
    <Modal show={isOpen} onHide={close}>
      <Modal.Header closeButton>
        <Modal.Title>Edit your Profile</Modal.Title>
      </Modal.Header>
      <Modal.Body>
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
            <Form.Label>Role</Form.Label>
            <Form.Control
              as="select"
              {...register("role")}
              disabled={!hasRole(roles.admin)}
            >
              {Object.keys(roles).map((rol) => (
                <option key={rol}>{rol}</option>
              ))}
            </Form.Control>
            {errors?.role && (
              <Form.Text>
                <Alert variant="danger">{errors.role.message}</Alert>
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
        <Button
          variant="primary"
          onClick={handleSubmit(onSubmit)}
          disabled={!isDirty}
        >
          Update my Profile
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditModal;
