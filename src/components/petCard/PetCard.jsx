import React, { useState, useContext } from "react";
import { Card, Modal, Button } from "react-bootstrap";
import { UserContext } from "../../context/UserContext";

const PetCard = ( { pet } ) => {

  const { user } = useContext(UserContext)

  const [show, setShow] = useState(false);
  const [ newComment, setNewComment ] = useState("");
  const [ comments, setComments ] = useState([])

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleChange = (event) => setNewComment(event.target.value)

  const handleSubmit = (event) => {
    event.preventDefault();
    setComments([...comments, {
      date: new Date().toLocaleString("es-ES"),
      text: newComment,
      user: user.email
    }])
    setShow(false)
  }

    return (
      <>
        <Card style={{ width: "14rem", maxHeight: "22rem", margin: "5px" }}>
          <Card.Img variant="top" src={pet.imagen} alt={pet.descripcion} />
          <Card.Body>
            <Card.Title>{pet.lugar}</Card.Title>
            <Card.Text style={{ fontSize: "10px" }}>
              Fecha: {pet.fecha}
              <br />
              Sexo: {pet.sexo}
              <br />
              Descripción: {pet.descripcion}
            </Card.Text>
            <Button variant="primary" onClick={handleShow}>Comentar</Button>
            {comments.length > 0 && (
          <Card.Text style={{ fontSize: "10px" }}>
            {comments.map((comment, index) => (
              <div key={index}>
                {comment.date} - {comment.user} comentó: {comment.text}
              </div>
            ))}
          </Card.Text>
        )}
          </Card.Body>
        </Card>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Agregar un comentario</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder="Escribí tu comentario" value={newComment} onChange={handleChange}></input>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cerrar
            </Button>
            <Button variant="primary" onClick={handleSubmit}>
              Comentar
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
}

export default PetCard;