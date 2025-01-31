"use client"

const { createContext, useState } = require("react");

export const CreatorContext = createContext();

const CreatorProvider = ({ children }) => {
    const [toggle, setToggle] = useState();
    return (
        <CreatorContext.Provider value={{ toggle, setToggle }}>
            {children}
        </CreatorContext.Provider>
    )
}

export default CreatorProvider;