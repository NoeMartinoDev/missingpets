import React from "react";
import { Card } from "react-bootstrap";

const PetCard = ( { pet } ) => {

    return (
        <Card style={{ width: "14rem", maxHeight: "22rem", margin: "5px" }}>
            <Card.Img variant="top" src={pet.imagen} alt={pet.descripcion}/>
            <Card.Body>
              <Card.Title>{pet.lugar}</Card.Title>
              <Card.Text style={{ fontSize: "10px" }}>
                Fecha: {pet.fecha}<br/>
                Sexo: {pet.sexo}<br/>
                Descripción: {pet.descripcion}
              </Card.Text>
            </Card.Body>
          </Card>
    )
}

export default PetCard;