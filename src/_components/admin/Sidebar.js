"use client"
import { signOut } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'


const Sidebar = ({ toggle, setToggle }) => {
    const router = useRouter();
    const handleToggle = () => {
        setToggle(false)
    }

    const handleSignOut = async () => {
        await signOut({ redirect: false })
        router.replace("/admin/admin-login")
    }
    return (
        <div id="left-sidebar" className="sidebar">
            <div className="navbar-brand">
                <Link href="/admin"><img src="https://puffintheme.com/template/oculux/assets/images/icon.svg"
                    alt="Oculux Logo" className="img-fluid logo" /><span>Reel Forest</span></Link>
                <button type="button" className="btn-toggle-offcanvas btn btn-sm float-right" onClick={handleToggle}><i
                    className="lnr lnr-menu icon-close" ></i></button>
            </div>
            <div className="sidebar-scroll">
                <div className="user-account">
                    <div className="user_div mt-1">
                        <img src="/assets/images/admin1.png" className="user-photo" alt="User Profile Picture" style={{ borderRadius: "50%" }} />
                    </div>
                    <div className="dropdown">
                        <span>Welcome,</span>
                        <span className="user-name"
                        ><strong>Admin ReelForest</strong></span>

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
                        <li><Link href="/admin" onClick={handleToggle}><i className="icon-speedometer" ></i><span>Dashboard</span></Link></li>
                        <li><Link href="/admin/category" onClick={handleToggle}><i className="icon-diamond" ></i><span>Category</span></Link></li>
                        <li><Link href="/admin/language" onClick={handleToggle}><i className="icon-note" ></i><span>Language</span></Link></li>
                        <li><Link href="/admin/creators" onClick={handleToggle}><i className="icon-users" ></i><span>Creators</span></Link></li>
                        <li><Link href="/admin/creator-request" onClick={handleToggle}><i className="icon-bell" ></i><span>Creator request</span></Link></li>
                        <li><Link href="/admin/users" onClick={handleToggle}><i className="icon-users" ></i><span>Users</span></Link></li>

                        {/* <li><Link href="/admin/new-order" onClick={handleToggle}><i className="icon-bag" ></i><span>New Order</span></Link></li> */}
                        <li><Link href="/admin/order" onClick={handleToggle}><i
                            className="icon-bag"></i><span>Order</span></Link></li>
                        <li><Link href="/admin/charges" onClick={handleToggle}><i
                            className="icon-wallet"></i><span>Manage Charges</span></Link></li>
                        <li>
                            <Link href="#" className='d-flex justify-content-center my-4 logout' onClick={handleSignOut}>
                                <span className='btn btn-info btn-round d-flex justify-content-center align-items-center'>Logout <i className="icon-logout" style={{ marginRight: 0 }}></i></span>
                            </Link>
                        </li>

                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Sidebar