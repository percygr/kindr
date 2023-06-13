import logo from "../../imgs/logo.png";
import { Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export default function TopNav() {
  return (
    <div>
      <Navbar bg="info, myGradient" variant="dark">
        <Navbar.Brand>
          <img src={logo} height="35px" alt="logo" />
        </Navbar.Brand>
        <Nav>
          <LinkContainer to="/">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>

          <LinkContainer to="/categories">
            <Nav.Link>New Task</Nav.Link>
          </LinkContainer>

          <LinkContainer to="/mytasks">
            <Nav.Link>My Tasks</Nav.Link>
          </LinkContainer>

          <LinkContainer to="/my-profile">
            <Nav.Link>My Profile</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar>

      <p>TopNavBar</p>
    </div>
  );
}
