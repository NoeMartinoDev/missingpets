import React, { useState, useEffect } from "react";
import axios from "axios";
import PetCard from "../petCard/PetCard";
import { Row, Col } from "react-bootstrap";

const Lost = () => {
    const [ pets, setPets ] = useState([])

    useEffect(() => {
        const axiosData = async () => {
            try {
                const response = await axios("http://localhost:3001/pets")
                const petsFind = response.data.filter (
                    (pet) => pet.estado === "Perdido"
                )
                setPets(petsFind)

            } catch (error) {
                console.log(error)
            }
        }
        axiosData()
    }, [])

    return (
        <Row xs={1} md={3} className="g-4">
        {pets.map((pet) => {
          return (
            <Col key={pet.id}>
              <PetCard key={pet.id} pet={pet} />
            </Col>
          )
        })}
      </Row>
    )
}

export default Lost;