import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import useAuth from "../../../auth/useAuth";
import { toast } from "react-toastify";
const ProfilePicModal = ({ isOpen, close }) => {
  const [fileName, setFileName] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const { updateUser } = useAuth();
  const handleChange = (e) => {
    const [file] = e.target.files;
    const SIZE_20MB = 20 * 1024 * 1024;
    const isValidSize = file.size < SIZE_20MB;
    const isNameOfOneImageRegEx = /.(jpe?g|gif|png)$/i;
    const isValidType = isNameOfOneImageRegEx.test(file.name);
    if (!isValidSize)
      return toast.error("Your iamge is too Heavy, max size 20MB");
    if (!isValidType) return toast.error("You can only upload images");
    setFileName(file.name);
    const reader = new FileReader();
    reader.onloadend = () => {
      setSelectedFile(reader.result);
    };
    reader.readAsDataURL(file);
  };
  const handleUpdateProfilePic = () => {
    if (!selectedFile) return toast.error("You Must select a new Image");
    updateUser({ profilePic: selectedFile });
    close();
  };

  return (
    <Modal show={isOpen} onHide={close}>
      <Modal.Header closeButton>
        <Modal.Title>Change profile Picture</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group>
          <Form.Label>Upload your Picture</Form.Label>
          <Form.Control
            type="file"
            accept=".jpg, .jpeg, .gif, .png"
            onChange={handleChange}
          ></Form.Control>
        </Form.Group>
        <img className="img-fluid mt-2" src={selectedFile} alt={fileName} />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={close}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleUpdateProfilePic}>
          Select Image
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ProfilePicModal;
