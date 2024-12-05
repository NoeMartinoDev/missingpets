import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavigationBar = () => {

    return (
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand><Link to="/">Logo</Link></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link><Link to="/perdidos">Perdidos</Link></Nav.Link>
            <Nav.Link><Link to="/encontrados">Encontrados</Link></Nav.Link>
            <Nav.Link><Link to="/publicar">Publicá</Link></Nav.Link>
          </Nav>
          <Button variant="info"><Link to="/ingresar">Iniciar sesión</Link></Button>
        </Container>
      </Navbar>
    );
}

export default NavigationBar;