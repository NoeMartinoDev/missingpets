import React, { useState } from "react";
const SearchBar = ( { pets, setFilteredData }) => {

    const [ place, setPlace ] = useState("")
    
    const handleChange = (event) => {
        setPlace(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const petsFiltered = pets.filter(pet => pet.lugar.toUpperCase() === place.toUpperCase())
        setFilteredData(petsFiltered)
        setPlace("")
    }

    const handleClick = (event) => {
        event.preventDefault()
        setFilteredData([])
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Filtrá por lugar" value={place} onChange={handleChange}/>
            <button type="submit">Buscar</button>
            <button onClick={handleClick}>Limpiar</button>
        </form>
    )
}

export default SearchBar;