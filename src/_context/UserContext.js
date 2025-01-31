"use client"
import { createContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [toggle, setToggle] = useState(false);
    return (
        <UserContext.Provider value={{toggle, setToggle }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext;