"use client"

import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

const page = () => {
    const [isEmailUI, setIsEmailUI] = useState(true);
    const { register: registerEmail, handleSubmit: handleSubmitEmail, reset: resetEmail, formState: { errors: errorsEmail, isSubmitting: isSubmittingEmail } } = useForm();
    const { register: registerPassword, handleSubmit: handleSubmitPassword, reset: resetPassword, formState: { errors: errorsPassword, isSubmitting: isSubmittingPassword } } = useForm();

    const router = useRouter();
    const [showPass, setShowPass] = useState(false);
    const [email, setEmail] = useState();

    const onsubmitEmail = async (data) => {
        try {
            const res = await axios.post("/api/admin/forget-password", {
                email: data.email
            })
            if (res.data.status == 1) {
                setEmail(res.data.email);
                setIsEmailUI(!isEmailUI);
                resetEmail();
            } else {
                toast.error(res.data.message, {
                    style: {
                        borderRadius: '10px',
                        background: '#333',
                        color: '#fff',
                    },
                })
            }
            
        } catch (err) {
            console.log(err);
        }
    }
    const onsubmitPassword = async (data) => {
        try {
            const res = await axios.post("/api/admin/forget-password", {
                email: email,
                password: data.password
            })
            if (res.data.status == 1) {
                toast.success(res.data.message, {
                    style: {
                        borderRadius: '10px',
                        background: '#333',
                        color: '#fff',
                    },
                })
                setTimeout(() => {
                    resetPassword(res.data.email);
                    router.replace("/admin/login")
                }, 1000)
            } else {
                toast.success(res.data.message, {
                    style: {
                        borderRadius: '10px',
                        background: '#333',
                        color: '#fff',
                    },
                })
            }
            resetEmail();
        } catch (err) {
            console.log(err);
        }
    }

    const handleShowPass = () => {
        setShowPass(!showPass);
    }

    return (
        <div className="auth-main particles_js">
            <div className="auth_div vivify popIn">
                <div className="auth_brand">
                    <a className="navbar-brand" href="javascript:void(0);"><img
                        src="https://puffintheme.com/template/oculux/assets/images/icon.svg" width="30" height="30"
                        className="d-inline-block align-top mr-2" alt="" />Reel Forest</a>
                </div>
                <div className="card forgot-pass">
                    {
                        isEmailUI ?
                            <div className="body">
                                <p className="lead mb-3"><strong>Oops</strong>,<br /> forgot something?</p>
                                <p>Type email to recover password.</p>
                                <form className="form-auth-small">
                                    <div className="form-group">
                                        <input type="email" className="form-control round" id="signin-email"
                                            placeholder="Email" {...registerEmail("email", {
                                                required: {
                                                    value: true,
                                                    message: "Email is required"
                                                },
                                                pattern: {
                                                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                                    message: "Invalid email"
                                                }
                                            })} style={errorsEmail.email ? { borderColor: "red" } : {}} />
                                        {errorsEmail.email && <p style={{ color: "red", textAlign: "start", fontSize: "12px", marginLeft: "2px" }}>{errorsEmail.email.message}</p>}
                                    </div>
                                    <button type="submit" className="btn btn-round btn-primary btn-lg btn-block" onClick={handleSubmitEmail(onsubmitEmail)} disabled={isSubmittingEmail}>{isSubmittingEmail ? "Loading..." : "Continue"}</button>
                                    <div className="bottom">
                                        <span className="helper-text">Know your password? <Link href="/admin/login">Login</Link></span>
                                    </div>
                                </form>
                            </div> :
                            <div className="body">
                                <p className="lead mb-3"><strong>Oops</strong>,<br /> forgot something?</p>
                                <p>Set your new password.</p>
                                <form className="form-auth-small">
                                    <div className="form-group">
                                        <input type={showPass ? `text` : `password`} className="form-control round"
                                            placeholder="Password"
                                            {...registerPassword("password", {
                                                required: {
                                                    value: true,
                                                    message: "Password is required"
                                                }, pattern: {
                                                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                                                    message:
                                                        "Password must include at least 8 characters, one uppercase, one lowercase, one number, and one special character",
                                                },
                                            })} style={errorsPassword.password ? { borderColor: "red" } : {}} />
                                        {errorsPassword.password && <p style={{ color: "red", textAlign: "start", fontSize: "12px", marginLeft: "2px" }}>{errorsPassword.password.message}</p>}
                                    </div>
                                    <div className="form-group clearfix">
                                        <label className="fancy-checkbox element-left">
                                            <input type="checkbox" onClick={handleShowPass} />
                                            <span>Show Password</span>
                                        </label>
                                    </div>
                                    <button type="submit" className="btn btn-round btn-primary btn-lg btn-block" onClick={handleSubmitPassword(onsubmitPassword)} disabled={isSubmittingPassword}>{isSubmittingPassword ? "Loading..." : "RESET PASSWORD"}</button>
                                    <div className="bottom">
                                        <span className="helper-text">Know your password? <Link href="/admin/login">Login</Link></span>
                                    </div>
                                </form>
                            </div>
                    }

                </div>
            </div>
            <div id="particles-js"></div>
        </div>
    )
}

export default page