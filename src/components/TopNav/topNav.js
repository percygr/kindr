import { Link } from "react-router-dom";
import logo from '../../imgs/logo.png';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'

export default function TopNav() {
  return (
    <div>
      <Navbar bg="info, myGradient" variant="dark">
        <Navbar.Brand>
          <img src="{logo}" width="40px" height="25px" />. Kindr
        </Navbar.Brand>
        <Nav>
         <Nav.Link to="/"> Home</Nav.Link>
         <Nav.Link to="/"> New Task </Nav.Link>
         <Nav.Link to="/"> My tasks</Nav.Link>
         <Nav.Link to="/"> My profile </Nav.Link>
        </Nav>
      </Navbar>
      
      <p>TopNavBar</p>
    </div>
  );
}
