import React from 'react'

const Register = () => {
  return (
    <>
    <div class="auth-main particles_js">
        <div class="auth_div vivify popIn">
            <div class="auth_brand">
                <a class="navbar-brand" href="javascript:void(0);"><img
                        src="https://puffintheme.com/template/oculux/assets/images/icon.svg" width="30" height="30"
                        class="d-inline-block align-top mr-2" alt/>Oculux</a>
            </div>
            <div class="card">
                <div class="body">
                    <p class="lead">Create an account</p>
                    <form class="form-auth-small m-t-20">
                        <div class="form-group">
                            <input type="email" class="form-control round" placeholder="Your email"/>
                        </div>
                        <div class="form-group">
                            <input type="password" class="form-control round" placeholder="Password"/>
                        </div>
                        <button type="submit" class="btn btn-primary btn-round btn-block">Register</button>
                    </form>
                    <div class="separator-linethrough"><span>OR</span></div>
                    <button class="btn btn-round btn-signin-social"><i
                            class="fa fa-facebook-official facebook-color"></i> Sign in with Facebook</button>
                    <button class="btn btn-round btn-signin-social"><i class="fa fa-twitter twitter-color"></i> Sign in
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