import React, { useState } from "react";
import axios from "axios";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Register = () => {

    const [ form, setForm ] = useState({
        email: "",
        password: ""
    })

    const handleChange = (event) => {
        if (event.target.name === "email") {
            setForm({ ...form, email: event.target.value })
        }
        if (event.target.name === "password") {
            setForm({ ...form, password: event.target.value })
        }
        console.log(form)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            await axios.post("http://localhost:3001/users", form)
            alert("Registro exitoso")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div style={{ margin: "15px auto", width: "40%" }}>
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
                <Form.Label htmlFor="email">Email: </Form.Label>
                <Form.Control size="sm" type="text" name="email" value={form.email} onChange={handleChange}/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label htmlFor="password">Contraseña: </Form.Label>
                <Form.Control size="sm" type="password" name="password" value={form.password} onChange={handleChange}/>
            </Form.Group>
            <Button style={{ marginBottom: "15px" }} variant="success" size="sm" type="submit">Registrate</Button>
        </Form>
        <p>¿Ya sos usuario? <Link to="/ingresar">Ingresá</Link></p>
        </div>
    )
}

export default Register;