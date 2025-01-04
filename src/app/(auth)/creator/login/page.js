import React from 'react'

const page = () => {
    return (
        <>

            <div className="auth-main particles_js">
                <div className="auth_div vivify popIn">
                    <div className="auth_brand">
                        <a className="navbar-brand" href="javascript:void(0);"><img
                            src="https://puffintheme.com/template/oculux/assets/images/icon.svg" width="30" height="30"
                            className="d-inline-block align-top mr-2"  />Reel Forest</a>
                    </div>
                    <div className="card">
                        <div className="body">
                            <p className="lead">Login to your account</p>
                            <form className="form-auth-small m-t-20"
                            >
                                <div className="form-group">
                                    <label htmlFor="signin-email" className="control-label sr-only">Email</label>
                                    <input type="email" className="form-control round" id="signin-email" defaultValue="user@domain.com"
                                        placeholder="Email" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="signin-password" className="control-label sr-only">Password</label>
                                    <input type="password" className="form-control round" id="signin-password"
                                        defaultValue="thisisthepassword" placeholder="Password" />
                                </div>
                                <div className="form-group clearfix">
                                    <label className="fancy-checkbox element-left">
                                        <input type="checkbox" />
                                        <span>Remember me</span>
                                    </label>
                                </div>
                                <button type="submit" className="btn btn-primary btn-round btn-block" >LOGIN</button>
                                <div className="bottom">
                                    <span className="helper-text m-b-10"><i className="fa fa-lock"></i> <a
                                        href="page-forgot-password.html">Forgot password?</a></span>
                                    <span>Don't have an account? <a href="page-register.html">Register</a></span>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
           
            </div>
        </>
    )
}

export default page