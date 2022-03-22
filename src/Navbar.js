import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function NavbarCom() {
  return (
    <div>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/">Com</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/ComMain">ComMain</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/FormCom">FormCom</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/Calander">Calander</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/CalanderDemo">CalanderDemo</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/StopWatch">StopWatch</Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarCom;
