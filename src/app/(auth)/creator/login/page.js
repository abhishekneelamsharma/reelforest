"use client"
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { signIn, useSession } from 'next-auth/react'

const page = () => {

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm()
    const router = useRouter();
    const session = useSession();
    const [showPass, setShowPass] = useState(false);


    const onSubmit = async (data) => {
        try {
            const res = await axios.post("/api/creator/login", data);
            if (res.data.status == 1) {
                toast.success(res.data.message, {
                    style: {
                        borderRadius: '10px',
                        background: '#333',
                        color: '#fff',
                    },
                })

                await signIn("creator-credentials", { creator_id: res.data._id, name: res.data.fullname, email: data.email, role: res.data.role, redirect: false });
                router.push("/creator");
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

    useEffect(() => {
        if (session?.data?.user?.role == "Creator") {
            router.push("/creator");
        }
    }, [session]);


    return (
        <>

            <div className="auth-main particles_js">
                <div className="auth_div vivify popIn">
                    <div className="auth_brand">
                        <a className="navbar-brand" href="javascript:void(0);"><img
                            src="https://puffintheme.com/template/oculux/assets/images/icon.svg" width="30" height="30"
                            className="d-inline-block align-top mr-2" />Reel Troop</a>
                    </div>
                    <div className="card">
                        <div className="body py-5 px-4">
                            <p className="lead">Creator Login</p>
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
                                    <Link href="/creator/forget-password" className='float-right'>
                                        <em style={{ fontSize: "13px" }}>Forget Password?</em>
                                    </Link>
                                </div>
                                <button type="submit" className="btn btn-primary btn-round mt-3 px-5"
                                    disabled={isSubmitting}  >{isSubmitting ? "LOADING..." : "LOGIN"}</button>
                                <div className="bottom">
                                    {/* <span className="helper-text m-b-10"><i className="fa fa-lock"></i> <a
                                        href="page-forgot-password.html">Forgot password?</a></span> */}
                                    <span>Send <Link href="/creator/register"><em>request</em></Link> for creator registration !</span>
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