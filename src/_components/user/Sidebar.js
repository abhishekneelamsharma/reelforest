"use client"

import Link from 'next/link'
import React from 'react'


const Sidebar = (
    // {toggle,setToggle}
) => {
    // const handleToggle = () => {
    //     setToggle(false)
    // }

    return (
        <div id="left-sidebar" className="sidebar">
            <div className="navbar-brand">
                <a href="#"><img src="https://puffintheme.com/template/oculux/assets/images/icon.svg"
                    alt="Oculux Logo" className="img-fluid logo" /><span>Reel Forest</span></a>
                <button type="button" className="btn-toggle-offcanvas btn btn-sm float-right" 
                // onClick={handleToggle}
                ><i
                    className="lnr lnr-menu icon-close" ></i></button>
            </div>
            <div className="sidebar-scroll">
                <div className="user-account">
                    <div className="user_div">
                        <img src="../assets/images/user.png" className="user-photo" alt="User Profile Picture" />
                    </div>
                    <div className="dropdown">
                        <span>Welcome,</span>
                        <span className="user-name"
                        ><strong>Louis Pierce</strong></span>

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
                        {/* <li><Link href="/admin"><i className="icon-speedometer" ></i><span>Dashboard</span></Link></li> */}
                        <li><Link href="/" ><i className="icon-speedometer" ></i><span>Dashboard</span></Link></li>
                        <li><Link href="/new-order"><i className="icon-bag" ></i><span>New Order</span></Link></li>
                        <li><Link href="/order"><i
                            className="icon-bag"></i><span>Order</span></Link></li>
                        <li><Link href="/add -funds"><i
                            className="icon-credit-card"></i><span>Add Funds</span></Link></li>
                        <li><Link href="/wallet"><i
                            className="icon-wallet"></i><span>Wallet</span></Link></li>
                        <li>
                            <Link href="/" className='d-flex justify-content-center my-4'>
                                <span className='btn btn-info btn-round d-flex justify-content-center align-items-center'>Logout <i className="fa-solid fa-right-from-bracket " style={{marginRight:0}} ></i></span>
                            </Link>
                        </li>

                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Sidebar