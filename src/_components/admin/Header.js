import React from 'react'

const Header = ({ toggle, setToggle }) => {

    const handleToggle = () => {
        setToggle(!toggle)
    }
    return (
        <>
            <nav className="navbar top-navbar">
                <div className="container-fluid">
                    <div className="navbar-left">
                        <div className="navbar-btn">
                            <a href="#"><img src="https://puffintheme.com/template/oculux/assets/images/icon.svg"
                                alt="Oculux Logo" className="img-fluid logo" /></a>
                            <button type="button" className="btn-toggle-offcanvas"><i
                                className="lnr lnr-menu fa fa-bars" onClick={handleToggle}></i></button>
                        </div>
                    </div>
                    <div className="navbar-right">
                        <div id="navbar-menu">
                            <ul className="nav navbar-nav">
                                <li><a href="javascript:void(0);" className="search_toggle icon-menu" title="Search Result"><i
                                    className="icon-magnifier"></i></a></li>
                                <li><a href="javascript:void(0);" className="right_toggle icon-menu" title="Right Menu"><i
                                    className="icon-bubbles"></i><span className="notification-dot bg-pink">2</span></a>
                                </li>
                                <li><a href="page-login.html" className="icon-menu"><i className="icon-power"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="progress-container">
                    <div className="progress-bar" id="myBar"></div>
                </div>
            </nav>
        </>
    )
}

export default Header