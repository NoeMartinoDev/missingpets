import React, { createContext, useEffect, useState } from "react";

const UserContext = createContext();

const UserContextProvider = ( { children }) => {

    const [ user, setUser ] = useState(null)

    useEffect(() => {
        const loginStorage = localStorage.getItem("isLoged")
        loginStorage && setUser(JSON.parse(loginStorage))
    }, [])

    return (
        <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>
    )
}

export { UserContext, UserContextProvider };