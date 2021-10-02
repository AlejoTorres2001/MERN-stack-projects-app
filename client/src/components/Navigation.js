import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useAuth from "../auth/useAuth";
import routes from "../helpers/routes";
const Navigation = () => {
  const { logOut } = useAuth();
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      variant="dark"
      bg="dark"
      className="text-white "
    >
      <Navbar.Brand as={NavLink} to={routes.home} className="ms-1">
        Task Manager
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className=" me-auto">
          <Nav.Link as={NavLink} to={routes.projects}>
            Projects
          </Nav.Link>
          <NavDropdown title="Admin">
            <NavDropdown.Item as={NavLink} to={routes.admin.users}>
              Users
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link as={NavLink} to={routes.login}>
            Login
          </Nav.Link>
          <Nav.Link as={NavLink} to={routes.register}>
            Register
          </Nav.Link>
          <Nav.Link as={NavLink} to={routes.account}>
            My Account
          </Nav.Link>
          <Nav.Link onClick={() => logOut()} to={routes.account}>
            Log Out
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
