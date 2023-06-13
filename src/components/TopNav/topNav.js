import logo from "../../imgs/logo.png";
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";

import "./style.css";

export default function TopNav() {
  return (
    <div>
      <Navbar bg="info, myGradient" variant="dark">
        <img src={logo} height="35px" alt="logo" />

        <Nav>
          <Link className="not-ugly" to="/">
            Home
          </Link>

          <Link className="not-ugly" to="/create">
            New Task
          </Link>

          <Link className="not-ugly" to="/mytasks">
            My Tasks
          </Link>

          <Link className="not-ugly" to="/my-profile">
            My Profile
          </Link>
        </Nav>
      </Navbar>
    </div>
  );
}
