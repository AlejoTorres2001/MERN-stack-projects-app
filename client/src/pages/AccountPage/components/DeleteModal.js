import React from "react";
import { Button, Modal, Alert } from "react-bootstrap";
import useAuth from "../../../auth/useAuth";
import useServerResponse from "../../../hooks/useServerResponse";
const DeleteModal = ({ isOpen, close }) => {
  const { logOut,deleteUser } = useAuth();
  const [serverResponse, setServerResponse]=useServerResponse()
  const handleDelete = async () => {
    const response = await deleteUser();
    setServerResponse(response)
    if(response.code===0)logOut();
  };
  return (
    <Modal show={isOpen} onHide={close}>
      <Modal.Header closeButton>
        <Modal.Title>Delete</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Alert variant="danger">
          Are you sure you want to permanently delete this account?
          <b>All data will be lost</b>
        </Alert>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={close}>
          Cancel
        </Button>
        <Button variant="danger" onClick={handleDelete}>
          Delete this account
        </Button>
        {serverResponse.code !== 0 && <Alert variant="danger">{serverResponse.message}</Alert>}
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteModal;
