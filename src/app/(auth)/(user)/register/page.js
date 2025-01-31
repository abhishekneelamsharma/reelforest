"use client"

import axios from 'axios'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

const Register = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm()
    const [showPass, setShowPass] = useState(false)
    const router = useRouter();
    const session = useSession();

    const onSubmit = async (data) => {
        try {
            const res = await axios.post("/api/user/signup", data);
            if (res.data.status == 1) {
                toast.success(res.data.message, {
                    style: {
                        borderRadius: '10px',
                        background: '#333',
                        color: '#fff',
                    },
                })
                router.push("/login");
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

    const handleShowPassword = () => {
        setShowPass(!showPass)
    }
    useEffect(() => {
        if (session?.data?.user?.role == "User") {
            router.push("/");
        }
    }, [session]);
    return (
        <>
            <div className="auth-main particles_js">
                <div className="auth_div vivify popIn">
                    <div className="auth_brand">
                        <a className="navbar-brand" href="javascript:void(0);">
                            <img
                            src="https://puffintheme.com/template/oculux/assets/images/icon.svg" width="30" height="30"
                            className="d-inline-block align-top mr-2" />
                            Reel Troop</a>
                    </div>
                    <div className="card ">
                        <div className="body py-5 px-4">
                            <p className="lead">Create an account</p>
                            <form className="form-auth-small m-t-20" onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-group">
                                    <input type="text" className="form-control round" placeholder="Your name" {...register("name", {
                                        required: {
                                            value: true,
                                            message: "Name is required"
                                        }
                                    })} style={errors.password ? { borderColor: "red" } : {}} />
                                    {errors.name && <p style={{ color: "red", textAlign: "start", fontSize: "12px", marginLeft: "2px" }}>{errors.name.message}</p>}
                                </div>
                                <div className="form-group">
                                    <input type="email" className="form-control round" placeholder="Your email" {...register("email", {
                                        required: {
                                            value: true,
                                            message: "Email is required"
                                        },
                                        pattern: {
                                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                            message: "Invalid email"
                                        }
                                    })} style={errors.email ? { borderColor: "red" } : {}} />
                                    {errors.email && <p style={{ color: "red", textAlign: "start", fontSize: "12px", marginLeft: "2px" }}>{errors.email.message}</p>}
                                </div>
                                <div className="form-group">
                                    <input type={showPass ? `text` : `password`} className="form-control round" placeholder="Password" {...register("password", {
                                        required: {
                                            value: true,
                                            message: "Password is required"
                                        }, pattern: {
                                            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                                            message:
                                                "Password must include at least 8 characters, one uppercase, one lowercase, one number, and one special character",
                                        },
                                    })} style={errors.password ? { borderColor: "red" } : {}} />
                                    {errors.password && <p style={{ color: "red", textAlign: "start", fontSize: "12px", marginLeft: "2px" }}>{errors.password.message}</p>}
                                </div>
                                <div className="form-group clearfix">
                                    <label className="fancy-checkbox element-left">
                                        <input type="checkbox" onClick={handleShowPassword} />
                                        <span>Show Password</span>
                                    </label>
                                </div>
                                <button type="submit" className="btn btn-primary btn-round" disabled={isSubmitting}>{isSubmitting ? "Registering..." : "Register"}</button>
                            </form>
                            {/* <div className="separator-linethrough"><span>OR</span></div>
                            <button className="btn btn-round btn-signin-social"><i
                                className="fa fa-facebook-official facebook-color"></i> Sign in with Facebook</button>
                            <button className="btn btn-round btn-signin-social"><i className="fa fa-twitter twitter-color"></i> Sign in
                                with Twitter</button> */}
                        </div>
                    </div>
                </div>
                <div id="particles-js"></div>
            </div>
        </>
    )
}

export default Register