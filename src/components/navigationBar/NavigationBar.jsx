import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavigationBar = () => {

    return (
      <Navbar bg="primary" style={{ padding: "0px" }} >
        <Container>
          <Navbar.Brand>
          <Link to="/">
              <img src="logo.png"
              alt=""
              width="40"
              height="40"
              className="d-inline-block align-top"/>
            </Link>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/perdidos">Perdidos</Nav.Link>
            <Nav.Link as={Link} to="/encontrados">Encontrados</Nav.Link>
            <Nav.Link as={Link} to="/publicar">Publicá</Nav.Link>
          </Nav>
          <Link to="/ingresar"><Button variant="light">Iniciar sesión</Button></Link>
        </Container>
      </Navbar>
    );
}

export default NavigationBar;