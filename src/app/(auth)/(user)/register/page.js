import React from 'react'

const Register = () => {
  return (
    <>
    <div className="auth-main particles_js">
        <div className="auth_div vivify popIn">
            <div className="auth_brand">
                <a className="navbar-brand" href="javascript:void(0);"><img
                        src="https://puffintheme.com/template/oculux/assets/images/icon.svg" width="30" height="30"
                        className="d-inline-block align-top mr-2"/>Reel Forest</a>
            </div>
            <div className="card">
                <div className="body">
                    <p className="lead">Create an account</p>
                    <form className="form-auth-small m-t-20">
                        {/* <div className="form-group">
                            <input type="text" className="form-control round" placeholder="Your username"/>
                        </div> */}
                        <div className="form-group">
                            <input type="email" className="form-control round" placeholder="Your email"/>
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control round" placeholder="Password"/>
                        </div>
                        <button type="submit" className="btn btn-primary btn-round btn-block">Register</button>
                    </form>
                    <div className="separator-linethrough"><span>OR</span></div>
                    <button className="btn btn-round btn-signin-social"><i
                            className="fa fa-facebook-official facebook-color"></i> Sign in with Facebook</button>
                    <button className="btn btn-round btn-signin-social"><i className="fa fa-twitter twitter-color"></i> Sign in
                        with Twitter</button>
                </div>
            </div>
        </div>
        <div id="particles-js"></div>
    </div>
    </>
  )
}

export default Register