"use client"

import Header from "@/_components/admin/Header";
import Sidebar from "@/_components/admin/Sidebar";
import { useState } from "react";


export default function AdminLayout({ children }) {

    const [toggle, setToggle] = useState(false);

    return (
        <>
            <div className={`theme-cyan font-montserrat ${toggle ? "offcanvas-active" : ""}`}>
                <Header setToggle={setToggle} toggle={toggle} />
                <Sidebar setToggle={setToggle} toggle={toggle} />
            </div>
            {children}

        </>
    );
}