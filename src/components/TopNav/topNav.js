import logo from "../../imgs/logo.png";
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";

import "./style.css";

export default function TopNav() {
  return (
    <div>
      <Navbar bg="info, myGradient" variant="dark">
        <Navbar.Brand>
          <img src={logo} height="35px" alt="logo" />
        </Navbar.Brand>
        <Nav>
          <Nav.Link>
            <Link className="not-ugly" to="/">
              Home
            </Link>
          </Nav.Link>

          <Nav.Link>
            <Link className="not-ugly" to="/create">
              New Task
            </Link>
          </Nav.Link>

          <Nav.Link>
            <Link className="not-ugly" to="/mytasks">
              My Tasks
            </Link>
          </Nav.Link>

          <Nav.Link>
            <Link className="not-ugly" to="/my-profile">
              My Profile
            </Link>
          </Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
}
