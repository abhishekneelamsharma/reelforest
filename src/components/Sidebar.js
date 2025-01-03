import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div id="left-sidebar" class="sidebar">
            <div class="navbar-brand">
                <a href="index-2.html"><img src="https://puffintheme.com/template/oculux/assets/images/icon.svg"
                    alt="Oculux Logo" class="img-fluid logo" /><span>Reel Forest</span></a>
                <button type="button" class="btn-toggle-offcanvas btn btn-sm float-right"><i
                    class="lnr lnr-menu icon-close"></i></button>
            </div>
            <div class="sidebar-scroll">
                <div class="user-account">
                    <div class="user_div">
                        <img src="../assets/images/user.png" class="user-photo" alt="User Profile Picture" />
                    </div>
                    <div class="dropdown">
                        <span>Welcome,</span>
                        <span class="user-name"
                        ><strong>Louis Pierce</strong></span>

                    </div>
                </div>
                <nav id="left-sidebar-nav" class="sidebar-nav">
                    <ul id="main-menu" class="metismenu">
                        {/* <li class="header">Main</li>
                        <li class="active open">
                            <a href="#myPage" class="has-arrow"><i class="icon-home"></i><span>My Page</span></a>
                            <ul>
                                <li class="active"><a href="index-2.html">My Dashboard</a></li>
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
                        <li><Link to="/"><i class="icon-speedometer"></i><span>Dashboard</span></Link></li>
                        <li><Link to="/new-order"><i class="icon-bag"></i><span>New Order</span></Link></li>
                        <li><Link to="/order"><i
                            class="icon-bag"></i><span>Order</span></Link></li>
                        <li><Link to="/all-funds"><i
                            class="icon-credit-card"></i><span>Add Funds</span></Link></li>
                        <li><Link to="/wallet"><i
                            class="icon-wallet"></i><span>Wallet</span></Link></li>
                        <li>
                            <Link to="/" className='d-flex justify-content-center my-4'>
                                <span className='btn btn-info btn-round d-flex justify-content-center align-items-center'>Logout <i class="fa-solid fa-right-from-bracket " style={{marginRight:0}}></i></span>
                            </Link>
                        </li>

                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Sidebar