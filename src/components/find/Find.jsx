import React, { useState, useEffect } from "react";
import axios from "axios";
import PetCard from "../petCard/PetCard";
import { Row, Col } from "react-bootstrap";
import SearchBar from "../searchBar/SearchBar";

const Find = () => {

    const [ pets, setPets ] = useState([])
    const [ filteredData, setFilteredData ] = useState([])

    useEffect(() => {
        const axiosData = async () => {
            try {
                const response = await axios("http://localhost:3001/pets")
                const petsFind = response.data.filter (
                    (pet) => pet.estado === "Encontrado"
                )
                setPets(petsFind)

            } catch (error) {
                console.log(error)
            }
        }
        axiosData()
    }, [])

    return (
      <>
      <SearchBar pets={pets} setFilteredData={setFilteredData}/>
      <Row xs={1} md={3} className="g-4">
        {(filteredData.length ? filteredData : pets).map((pet) => {
          return (
            <Col key={pet.id}>
              <PetCard key={pet.id} pet={pet} />
            </Col>
          )
        })}
      </Row>
      </>
    )
}

export default Find;