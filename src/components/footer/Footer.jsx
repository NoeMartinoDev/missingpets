import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

const Footer = () => {

    return (
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link>Contacto</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    );
}

export default Footer;