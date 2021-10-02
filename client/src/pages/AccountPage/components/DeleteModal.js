import React from 'react'
import {Button,Modal,Alert} from 'react-bootstrap'
import useAuth from '../../../auth/useAuth'
const DeleteModal = ({isOpen,close}) => {
    const {logOut} = useAuth();
    const handleDelete=()=>{
            //http request
            //close()
            logOut()

    }
    return (
        <Modal show={isOpen} onHide={close}>
            <Modal.Header closeButton>
                <Modal.Title>Delete</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Alert variant="danger">Are you sure you want to permanently delete this account?<b>All data will be lost</b></Alert>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={close}>Cancel</Button>
                <Button variant="danger" onClick={handleDelete}>Delete this account</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default DeleteModal
