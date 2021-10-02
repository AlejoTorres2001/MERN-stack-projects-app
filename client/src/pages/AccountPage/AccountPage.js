
import {Container,Col,Row,Card,Button} from "react-bootstrap";
import useAuth from '../../auth/useAuth';
import '../../styles/account.css'
import DeleteModal from "./components/DeleteModal";
import ChangePasswordModal from "./components/ChangePasswordModal";
import useModal from "../../hooks/useModal";
import EditModal from "./components/EditModal";
const AccountPage = () => {
    const {user} = useAuth()
    const [isOpenDeleteModal,openDeleteModal,closeDeleteModal] = useModal()
    const [isOpenEditModal,openEditModal,closeEditModal] = useModal()
    const [isOpenChangePasswordModal,openChangePasswordModal,closeChangePasswordModal] = useModal()
    return (
        <>
        <Container>
            <Row className="mt-4">
                <Col xs={12} className="text-center">
                <img src="/img/male_avatar.svg" alt="male-avatar" className="img-account" />
                </Col>
                <Col className="mt-4">
                <Card style={{ maxWidth: '360px' }} className="mx-auto p-4">
                    <p className="text-center"><b>Name: </b>{user.name}</p>
                    <p className="text-center"><b>Email: </b>{user.email}</p>
                    <p className="text-center"><b>Role: </b>{user.role}</p>
                    <Button variant="warning" onClick={openEditModal}>
                        Edit account
                    </Button>
                    <Button variant="link" className="mt-1 text-decoration-none" onClick={openChangePasswordModal}>
                        Edit password
                    </Button>
                    <Button variant="link" className="mt-3 text-danger text-decoration-none" onClick={openDeleteModal}>
                        Delete account
                    </Button>
                </Card>
                </Col>
            </Row>
        </Container>
        <DeleteModal isOpen={isOpenDeleteModal} close={closeDeleteModal}></DeleteModal>
        <ChangePasswordModal isOpen={isOpenChangePasswordModal} close={closeChangePasswordModal}></ChangePasswordModal>
        <EditModal isOpen={isOpenEditModal} close={closeEditModal}></EditModal>
        </>
    )
}

export default AccountPage
