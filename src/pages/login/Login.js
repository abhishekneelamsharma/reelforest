import React from 'react'
import { useNavigate } from 'react-router-dom'
import MyParticles from '../../components/Particles';

const Login = () => {
    const navigate = useNavigate();
    return (
        <>

            <div class="auth-main particles_js">
                <div class="auth_div vivify popIn">
                    <div class="auth_brand">
                        <a class="navbar-brand" href="javascript:void(0);"><img
                            src="https://puffintheme.com/template/oculux/assets/images/icon.svg" width="30" height="30"
                            class="d-inline-block align-top mr-2" alt />Oculux</a>
                    </div>
                    <div class="card">
                        <div class="body">
                            <p class="lead">Login to your account</p>
                            <form class="form-auth-small m-t-20"
                            >
                                <div class="form-group">
                                    <label for="signin-email" class="control-label sr-only">Email</label>
                                    <input type="email" class="form-control round" id="signin-email" value="user@domain.com"
                                        placeholder="Email" />
                                </div>
                                <div class="form-group">
                                    <label for="signin-password" class="control-label sr-only">Password</label>
                                    <input type="password" class="form-control round" id="signin-password"
                                        value="thisisthepassword" placeholder="Password" />
                                </div>
                                <div class="form-group clearfix">
                                    <label class="fancy-checkbox element-left">
                                        <input type="checkbox" />
                                        <span>Remember me</span>
                                    </label>
                                </div>
                                <button type="submit" class="btn btn-primary btn-round btn-block" onClick={() => navigate("/language")}>LOGIN</button>
                                <div class="bottom">
                                    <span class="helper-text m-b-10"><i class="fa fa-lock"></i> <a
                                        href="page-forgot-password.html">Forgot password?</a></span>
                                    <span>Don't have an account? <a href="page-register.html">Register</a></span>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                {/* <div style={{ filter: "brightness(0) invert(1)" }}> */}
                    <MyParticles />
                {/* </div> */}
            </div>
        </>
    )
}

export default Login