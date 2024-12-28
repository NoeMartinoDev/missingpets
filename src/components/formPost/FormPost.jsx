import React, { useState, useContext } from "react";
import axios from "axios";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

const FormPost = () => {

    const navigate = useNavigate()

    const { user } = useContext(UserContext)

    const [ form, setForm] = useState({
        estado: "Perdido",
        especie: "Canino",
        sexo: "Macho",
        lugar: "",
        fecha: "",
        descripcion: "",
        telefono: "",
        imagen: "",
        user: user ? user.email : null
    })

    const handleChange = (event) => {
        const property = event.target.name
        const value = event.target.value

        setForm({...form, [ property ]: value})
        console.log(form)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            await axios.post("http://localhost:3001/pets", form)
            alert("Post creado")
            navigate("/")

        } catch (error) {
            console.log(error)
        }
    }

    return (
      <div style={{ margin: "15px auto", width: "70%" }}>
        <h3 style={{ textAlign: "center" }}>¿Perdiste o encontraste una mascota? Publicala</h3>
        <Form onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label htmlFor="estado">Estado: </Form.Label>
              <Form.Select
                size="sm"
                name="estado"
                value={form.estado}
                onChange={handleChange}
              >
                <option value="Perdido">Perdido</option>
                <option value="Encontrado">Encontrado</option>
              </Form.Select>
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label htmlFor="especie">Especie: </Form.Label>
              <Form.Select
                size="sm"
                name="especie"
                value={form.especie}
                onChange={handleChange}
              >
                <option value="Canino">Canino</option>
                <option value="Felino">Felino</option>
              </Form.Select>
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label htmlFor="sexo">Sexo: </Form.Label>
              <Form.Select
                size="sm"
                name="sexo"
                value={form.sexo}
                onChange={handleChange}
              >
                <option value="Macho">Macho</option>
                <option value="Hembra">Hembra</option>
                <option value="No identificado">No identificado</option>
              </Form.Select>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label htmlFor="lugar">Lugar: </Form.Label>
              <Form.Control
                size="sm"
                type="text"
                name="lugar"
                value={form.lugar}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label htmlFor="fecha">Fecha: </Form.Label>
              <Form.Control
                size="sm"
                type="date"
                name="fecha"
                value={form.fecha}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label htmlFor="telefono">Teléfono: </Form.Label>
              <Form.Control
                size="sm"
                type="number"
                name="telefono"
                value={form.telefono}
                onChange={handleChange}
              />
            </Form.Group>
          </Row>
          <Form.Group>
            <Form.Label htmlFor="descripcion">Descripción: </Form.Label>
            <Form.Control
              size="sm"
              type="textarea"
              name="descripcion"
              value={form.descripcion}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="imagen">Imagen: </Form.Label>
            <Form.Control
              size="sm"
              type="text"
              name="imagen"
              value={form.imagen}
              onChange={handleChange}
            />
          </Form.Group>
          <Button style={{ margin: "10px" }} variant="success" size="sm" type="submit">
            Publicar
          </Button>
        </Form>
      </div>
    );
}

export default FormPost;