"use client"
import { createContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [walletAmount, setWalletAmount] = useState("old");
    return (
        <UserContext.Provider value={{ walletAmount, setWalletAmount }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext;