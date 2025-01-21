"use client"

import axios from 'axios'
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';


const Sidebar = (
    // {toggle,setToggle}
) => {
    // const handleToggle = () => {
    //     setToggle(false)
    // }

    const [data, setData] = useState();
    const session = useSession();
    const user_id = session?.data?.user?.user_id
    const router = useRouter();

    const getData = async () => {
        try {
            const res = await axios.post("/api/creator/get_creator_basic_info", {
                creator_id: user_id
            })
            console.log(res.data);
            setData(res.data.data);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        if (user_id) {
            getData();
        }
    }, [user_id])

    const handleSignout = async () => {
        await signOut({ redirect: false });
        router.replace("/creator/login")
    }


    return (
        <div id="left-sidebar" className="sidebar">
            <div className="navbar-brand">
                <Link href="/creator"><img src="https://puffintheme.com/template/oculux/assets/images/icon.svg"
                    alt="Oculux Logo" className="img-fluid logo" /><span>Reel Forest</span></Link>
                <button type="button" className="btn-toggle-offcanvas btn btn-sm float-right"
                // onClick={handleToggle}
                ><i
                    className="lnr lnr-menu icon-close" ></i></button>
            </div>
            <div className="sidebar-scroll">
                <div className="user-account f-flex align-items-center">
                    <div className="user_div " >
                        <img src={`/uploads/${data?.profile_image}`} className="user-photo" alt="User Profile Picture" style={{ borderRadius: "50%", objectFit: "cover" }} height={"40px"} />
                    </div>
                    <div className="dropdown">
                        <span>@{data?.username}</span>
                        <span className="user-name"
                            style={{ fontSize: "13px" }}><strong>{data?.fullname}</strong></span>
                    </div>
                </div>
                <nav id="left-sidebar-nav" className="sidebar-nav">
                    <ul id="main-menu" className="metismenu">
                        {/* <li className="header">Main</li>
                        <li className="active open">
                            <a href="#myPage" className="has-arrow"><i className="icon-home"></i><span>My Page</span></a>
                            <ul>
                                <li className="active"><a href="index-2.html">My Dashboard</a></li>
                                <li><a href="index4.html">Web Analytics</a></li>
                                <li><a href="index5.html">Event Monitoring</a></li>
                                <li><a href="index6.html">Finance Performance</a></li>
                                <li><a href="index7.html">Sales Monitoring</a></li>
                                <li><a href="https://puffintheme.com/template/oculux/hospital/index.html">Hospital
                                        Management</a></li>
                                <li><a href="index9.html">Campaign Monitoring</a></li>
                                <li><a href="index10.html">University Analytics</a></li>
                                <li><a href="index11.html">eCommerce Analytics</a></li>
                            </ul>
                        </li> */}
                        <li><Link href="/creator"><i className="icon-speedometer" ></i><span>Dashboard</span></Link></li>
                        {/* <li><Link href="/creator/new-order"><i className="icon-bag" ></i><span>New Order</span></Link></li> */}
                        <li><Link href="/creator/order"><i
                            className="icon-bag"></i><span>Order</span></Link></li>
                        <li><Link href="/creator/add-funds"><i
                            className="icon-credit-card"></i><span>Add Funds</span></Link></li>
                        <li><Link href="/creator/wallet"><i
                            className="icon-wallet"></i><span>Wallet</span></Link></li>
                        <li>
                            <Link href="/" className='d-flex justify-content-center my-4' onClick={handleSignout}>
                                <span className='btn btn-info btn-round d-flex justify-content-center align-items-center'>Logout <i className="fa-solid fa-right-from-bracket " style={{ marginRight: 0 }}></i></span>
                            </Link>
                        </li>

                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Sidebar