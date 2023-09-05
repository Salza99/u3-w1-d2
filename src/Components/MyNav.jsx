import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";

class MyNav extends React.Component {
  render() {
    return (
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">Epicbooks</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="#">Broswe</Nav.Link>
          </Nav>
          <div class="input-group">
            <div class="form-outline">
              <input id="search-focus" type="search" class="form-control" />
            </div>
            <button type="button" class="btn btn-primary">
              Find
            </button>
          </div>
        </Container>
      </Navbar>
    );
  }
}

export default MyNav;
