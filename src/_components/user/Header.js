"use client"
import axios from 'axios';
import { useSession } from 'next-auth/react';
import { useState, useEffect, useContext } from 'react'
import UserContext from '../../_context/UserContext';


const Header = () => {
    const session = useSession();
    const user_id = session?.data?.user?.user_id
    const [walletData, setWalletData] = useState();
    const { toggle, setToggle } = useContext(UserContext);

    const handleToggle = () => {
        setToggle(true)
    }

    const getWalletData = async () => {
        try {
            const res = await axios.post("/api/user/get_user_info", {
                user_id: user_id
            })
            setWalletData(res.data.data.walletAmount);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getWalletData();
    }, [user_id])


    console.log(toggle);
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
                                        <a href="#" className="icon-menu" title="Search Result">
                                            <div className='d-flex align-items-center'>

                                                <span className='pr-3'>&#8377; {new Intl.NumberFormat('en-IN').format(walletData)}</span>
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