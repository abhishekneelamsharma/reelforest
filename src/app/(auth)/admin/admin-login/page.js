"use client"
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { signIn, useSession } from 'next-auth/react'

const page = () => {

    const session = useSession();
    console.log(session)
    
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm()
    const router = useRouter();

    const [showPass, setShowPass] = useState(false);

    const onSubmit = async (data) => {
        try {
            const res = await axios.post("/api/admin/login", data);
            if (res.data.status == 1) {
                toast.success(res.data.message, {
                    style: {
                        borderRadius: '10px',
                        background: '#333',
                        color: '#fff',
                    },
                })

                await signIn("admin-credentials", { email: data.email, role: res.data.role, redirect: false });
                router.push("/admin");
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

    const handleShowPass = () => {
        setShowPass(!showPass);
    }



    return (
        <>

            <div className="auth-main particles_js">
                <div className="auth_div vivify popIn">
                    <div className="auth_brand">
                        <a className="navbar-brand" href="javascript:void(0);"><img
                            src="https://puffintheme.com/template/oculux/assets/images/icon.svg" width="30" height="30"
                            className="d-inline-block align-top mr-2" />Reel Forest</a>
                    </div>
                    <div className="card">
                        <div className="body py-5 px-4">
                            <p className="lead">Admin Login</p>
                            <form className="form-auth-small m-t-20"
                                onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-group">
                                    <label htmlFor="signin-email" className="control-label sr-only">Email</label>
                                    <input type="email" className="form-control round" id="signin-email"
                                        placeholder="Email" {...register("email", {
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
                                    <label htmlFor="signin-password" className="control-label sr-only">Password</label>
                                    <input type={showPass ? `text` : `password`} className="form-control round" id="signin-password"
                                        placeholder="Password"
                                        {...register("password", {
                                            required: {
                                                value: true,
                                                message: "Password is required"
                                            }
                                        })} style={errors.password ? { borderColor: "red" } : {}} />
                                    {errors.password && <p style={{ color: "red", textAlign: "start", fontSize: "12px", marginLeft: "2px" }}>{errors.password.message}</p>}
                                </div>
                                <div className="form-group clearfix">
                                    <label className="fancy-checkbox element-left">
                                        <input type="checkbox" onClick={handleShowPass} />
                                        <span>Show Password</span>
                                    </label>
                                </div>
                                <button type="submit" className="btn btn-primary btn-round mt-3 px-5"
                                    disabled={isSubmitting}  >{isSubmitting ? "LOADING..." : "LOGIN"}</button>
                                <div className="bottom">
                                    {/* <span className="helper-text m-b-10"><i className="fa fa-lock"></i> <a
                                        href="page-forgot-password.html">Forgot password?</a></span> */}
                                    {/* <span>Don't have an account? <Link href="/register">Register</Link></span> */}
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