"use client"

import axios from 'axios';
import { useSession } from 'next-auth/react';
import React, { useContext, useState, useEffect } from 'react'
import Swal from 'sweetalert2';
import { CreatorContext } from '@/_context/CreatorContext';

const Header = () => {
    const { toggle, setToggle } = useContext(CreatorContext);
    const handleToggle = () => {
        setToggle(true)
    }

    const [data, setData] = useState();
    const session = useSession();
    const user_id = session?.data?.user?.user_id

    const getData = async () => {
        try {
            const res = await axios.post("/api/creator/get_creator_basic_info", {
                creator_id: user_id
            })
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

    const handleRedeemWallet = () => {
        Swal.fire({
            icon: "warning",
            background: "#282b2f",
            width: "400px",
            html: `
     <p>To redeem your wallet balance, please contact our support team at<strong><a href="tel:+1234567890" style="color: #007bff; text-decoration: none;">+1234567890</a></strong> for assistance.</p>`,
            allowOutsideClick: false,
            confirmButtonText: "Ok",
            customClass: {
                htmlContainer: "html-content",
                confirmButton: 'swal-confirm-button'
            }
        });
    }


    return (
        <>
            <div className={`theme-cyan font-montserrat ${toggle ? "offcanvas-active" : ""}`}>
                <nav className="navbar top-navbar">
                    <div className="container-fluid">
                        <div className="navbar-left">
                            <div className="navbar-btn">
                                <a href="#"><img src="https://puffintheme.com/template/oculux/assets/images/icon.svg"
                                    alt="Oculux Logo" className="img-fluid logo" /></a>
                                <button type="button" className="btn-toggle-offcanvas"><i
                                    className="lnr lnr-menu fa fa-bars"
                                    onClick={handleToggle}
                                ></i></button>
                            </div>
                        </div>
                        <div className="navbar-right">
                            <div id="navbar-menu">
                                <ul className="nav navbar-nav">
                                    <li>
                                        <a href="#" className="icon-menu" title="Search Result" onClick={handleRedeemWallet}>
                                            <div className='d-flex align-items-center'>

                                                <span className='pr-3'>&#8377; {new Intl.NumberFormat('en-IN').format(data?.wallet_amount)}</span>
                                                <i className="icon-wallet"></i>
                                            </div>
                                        </a>
                                    </li>
                                    {/* <li><a href="javascript:void(0);" className="right_toggle icon-menu" title="Right Menu"><i
                                    className="icon-bubbles"></i><span className="notification-dot bg-pink">2</span></a>
                                </li> */}
                                    {/* <li><a href="page-login.html" className="icon-menu"><i className="icon-power"></i></a></li> */}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="progress-container">
                        <div className="progress-bar" id="myBar"></div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Header