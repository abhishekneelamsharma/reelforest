"use client"

import axios from 'axios'
import { useRouter } from 'next/navigation'
import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

const CreateCreator = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm()
    const [profileImage, setProfileImage] = useState();
    const [language, setLanguage] = useState([]);
    const [languageData, setLanguageData] = useState();
    const [categoryData, setCategoryData] = useState();
    const [showPass, setShowPass] = useState(false);

    const router = useRouter();
    const handleProfileImage = (e) => {
        setProfileImage(e.target.files[0])
    }

    const onSubmit = async (data) => {
        try {

            if (language.length == 0) {
                toast.error("Please select at least one language", {
                    style: {
                        borderRadius: '10px',
                        background: '#333',
                        color: '#fff',
                    },
                })
                return;
            }

            const formdata = new FormData();
            formdata.append("fullname", data.fullname);
            formdata.append("username", data.username);
            formdata.append("profile_link", data.profile_link);
            formdata.append("email", data.email);
            formdata.append("category_id", data.category_id);
            formdata.append("creator_charges", data.creator_charges);
            formdata.append("wallet_amount", data.wallet_amount);
            formdata.append("followers", data.followers);
            formdata.append("followings", data.followings);
            formdata.append("posts", data.posts);
            formdata.append("views", data.views);
            formdata.append("engagement", data.engagement);
            formdata.append("profile_image", profileImage);
            formdata.append("password", data.password);
            formdata.append("language", language);

           
            const res = await axios.post("/api/creator/create_creator", formdata);
            if (res.data.status == 1) {
                toast.success(res.data.message, {
                    style: {
                        borderRadius: '10px',
                        background: '#333',
                        color: '#fff',
                    },
                })
                reset();
                setLanguage([]);
                setProfileImage("");
                router.push("/admin/creators")
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

    const handleCheckBoxChange = (e) => {
        const selectedlang = e.target.value;
        if (!language.includes(selectedlang)) {
            setLanguage((prevLanguage) => [...prevLanguage, selectedlang])
        } else {
            setLanguage((prevLanguage) => prevLanguage.filter((lang) => lang !== selectedlang))
        }
    }

    const getCategoryData = async () => {
        try {
            const res = await axios.get("/api/category/get_all_active_category");
            setCategoryData(res.data.data);
        } catch (err) {
            console.log(err);
        }
    }

    const handleShowPassword = () => {
        setShowPass(!showPass);
    }

    const getLanguageData = async () => {
        try {
            const res = await axios.get("/api/language/get_active_language");
            setLanguageData(res.data.data);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getLanguageData();
        getCategoryData()
    }, [])

    return (
        <>
            <div className="auth-main particles_js">
                <div className="auth_div vivify popIn cretor-card" style={{ width: "700px" }}>
                    <div className="auth_brand mb-2 mt-2">
                        <a className="navbar-brand" href="javascript:void(0);"><img
                            src="https://puffintheme.com/template/oculux/assets/images/icon.svg" width="30" height="30"
                            className="d-inline-block align-top mr-2" />Reel Troop</a>
                    </div>
                    <div className="card " >
                        <div className="body px-4">
                            <p className="lead">Create Creator</p>
                            <form className="form-auth-small m-t-20" onSubmit={handleSubmit(onSubmit)}>

                                <div className='row'>
                                    <div className="form-group col-6">
                                        <input type="text" className="form-control round" placeholder="Your fullname" {...register("fullname", {
                                            required: {
                                                value: true,
                                                message: "Fullname is required"
                                            }
                                        })} style={errors.fullname ? { borderColor: "red" } : {}} />
                                        {errors.fullname && <p style={{ color: "red", textAlign: "start", fontSize: "12px", marginLeft: "2px" }} className='mb-0'>{errors.fullname.message}</p>}
                                    </div>
                                    <div className="form-group col-6">
                                        <input type="text" className="form-control round" placeholder="Your username" {...register("username", {
                                            required: {
                                                value: true,
                                                message: "Username is required"
                                            }
                                        })} style={errors.username ? { borderColor: "red" } : {}} />
                                        {errors.username && <p style={{ color: "red", textAlign: "start", fontSize: "12px", marginLeft: "2px" }} className='mb-0'>{errors.username.message}</p>}
                                    </div>
                                    <div className="form-group col-6">
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
                                        {errors.email && <p style={{ color: "red", textAlign: "start", fontSize: "12px", marginLeft: "2px" }} className='mb-0'>{errors.email.message}</p>}
                                    </div>
                                    <div className="form-group col-6">
                                        <input type="text" className="form-control round" placeholder="Your profile link" {...register("profile_link", {
                                            required: {
                                                value: true,
                                                message: "Profile link is required"
                                            },

                                        })} style={errors.profile_link ? { borderColor: "red" } : {}} />
                                        {errors.profile_link && <p style={{ color: "red", textAlign: "start", fontSize: "12px", marginLeft: "2px" }} className='mb-0'>{errors.profile_link.message}</p>}
                                    </div>
                                    <div className="input-group col-6">
                                        <select className="custom-select form-control round" id="inputGroupSelect01" onChange={(e) => setSelectedCategory(e.target.value)}
                                            {...register("category_id", {
                                                required: {
                                                    value: true,
                                                    message: "Category is required"
                                                },

                                            })} style={errors.category_id ? { borderColor: "red", width: "100%", borderRadius: "30px", color: "#6e757d" } : { color: "#6e757d" }}>
                                            <option defaultChecked hidden value="">Select Category</option>
                                            {
                                                categoryData?.map((ele, ind) =>
                                                    <option value={ele._id} key={ind}>{ele.category_name}</option>
                                                )
                                            }
                                        </select>
                                        {
                                            errors.category_id && <p style={{ color: "red", textAlign: "start", fontSize: "12px", marginLeft: "2px", marginTop: "-14px" }} className='mb-0'>{errors.category_id.message}</p>
                                        }
                                    </div>
                                    <div className="form-group col-6">
                                        <input type="text" className="form-control round" placeholder="Creator charges"  {...register("creator_charges", {
                                            required: {
                                                value: true,
                                                message: "Creator charges are required"
                                            },
                                            pattern: {
                                                value: /^(\d+(\.\d+)?)([KMB]?)$/i,
                                                message: "Invalid Number"
                                            }
                                        })} style={errors.creator_charges ? { borderColor: "red" } : {}} />
                                        {errors.creator_charges && <p style={{ color: "red", textAlign: "start", fontSize: "12px", marginLeft: "2px" }} className='mb-0'>{errors.creator_charges.message}</p>}
                                    </div>
                                    <div className="form-group col-6">
                                        <input type="text" className="form-control round" placeholder="Wallet amount"  {...register("wallet_amount", {
                                            required: {
                                                value: true,
                                                message: "Wallet amount are required"
                                            },
                                            pattern: {
                                                value: /^(\d+(\.\d+)?)([KMB]?)$/i,
                                                message: "Invalid Number"
                                            }
                                        })} style={errors.wallet_amount ? { borderColor: "red" } : {}} />
                                        {errors.wallet_amount && <p style={{ color: "red", textAlign: "start", fontSize: "12px", marginLeft: "2px" }} className='mb-0'>{errors.wallet_amount.message}</p>}
                                    </div>
                                    <div className="form-group col-6">
                                        <input type="text" className="form-control round" placeholder="Followers (e.g., 100, 1K, 1M, 1B)"  {...register("followers", {
                                            required: {
                                                value: true,
                                                message: "Number of followers are required"
                                            },
                                            pattern: {
                                                value: /^(\d+(\.\d+)?)([KMB]?)$/i,
                                                message: "Invalid Number"
                                            }
                                        })} style={errors.followers ? { borderColor: "red" } : {}} />
                                        {errors.followers && <p style={{ color: "red", textAlign: "start", fontSize: "12px", marginLeft: "2px" }} className='mb-0'>{errors.followers.message}</p>}
                                    </div>
                                    <div className="form-group col-6">
                                        <input type="text" className="form-control round" placeholder="Followings (e.g., 100, 1K, 1M, 1B)"  {...register("followings", {
                                            required: {
                                                value: true,
                                                message: "Number of followings are required"
                                            },
                                            pattern: {
                                                value: /^(\d+(\.\d+)?)([KMB]?)$/i,
                                                message: "Invalid Number"
                                            }
                                        })} style={errors.followings ? { borderColor: "red" } : {}} />
                                        {errors.followings && <p style={{ color: "red", textAlign: "start", fontSize: "12px", marginLeft: "2px" }} className='mb-0'>{errors.followings.message}</p>}
                                    </div>
                                    <div className="form-group col-6">
                                        <input type="text" className="form-control round" placeholder="Engagement (e.g., 100, 1K, 1M, 1B)"  {...register("engagement", {
                                            required: {
                                                value: true,
                                                message: "Number of engagement is required"
                                            },
                                            pattern: {
                                                value: /^(\d+(\.\d+)?)([KMB]?)$/i,
                                                message: "Invalid Number"
                                            }
                                        })} style={errors.engagement ? { borderColor: "red" } : {}} />
                                        {errors.engagement && <p style={{ color: "red", textAlign: "start", fontSize: "12px", marginLeft: "2px" }} className='mb-0'>{errors.engagement.message}</p>}
                                    </div>
                                    <div className="form-group col-6">
                                        <input type="text" className="form-control round" placeholder="Posts (e.g., 100, 1K, 1M)"  {...register("posts", {
                                            required: {
                                                value: true,
                                                message: "Number of posts is required"
                                            },
                                            pattern: {
                                                value: /^(\d+(\.\d+)?)([KMB]?)$/i,
                                                message: "Invalid Number"
                                            }
                                        })} style={errors.posts ? { borderColor: "red" } : {}} />
                                        {errors.posts && <p style={{ color: "red", textAlign: "start", fontSize: "12px", marginLeft: "2px" }} className='mb-0'>{errors.posts.message}</p>}
                                    </div>
                                    <div className="form-group col-6">
                                        <input type="text" className="form-control round" placeholder="Views (e.g., 100, 1K, 1M,1B)"  {...register("views", {
                                            required: {
                                                value: true,
                                                message: "Number of views is required"
                                            },
                                            pattern: {
                                                value: /^(\d+(\.\d+)?)([KMB]?)$/i,
                                                message: "Invalid Number"
                                            }
                                        })} style={errors.views ? { borderColor: "red" } : {}} />
                                        {errors.views && <p style={{ color: "red", textAlign: "start", fontSize: "12px", marginLeft: "2px" }} className='mb-0'>{errors.views.message}</p>}
                                    </div>
                                    <div className="form-group col-4">
                                        <div className="input-group " >
                                            <div className="input-group-prepend">
                                                <span className="input-group-text" style={(errors.profile_image && !profileImage) ? { borderColor: "red", borderRadius: "30px 0 0 30px" } : { borderRadius: "30px 0 0 30px" }}>Profile image</span>
                                            </div>
                                            <div className="custom-file" >
                                                <input type="file" accept="image/*" className="custom-file-input" id="inputGroupFile01"
                                                    {...register("profile_image", {
                                                        required: {
                                                            value: true,
                                                            message: "Profile image is required"
                                                        },
                                                    })}
                                                    onChange={handleProfileImage} />
                                                <label className="custom-file-label" htmlFor="inputGroupFile01" style={(errors.profile_image && !profileImage) ? { borderColor: "red", paddingRight: "90px", borderRadius: "0 30px 30px 0" } : { paddingRight: "90px", borderRadius: "0 30px 30px 0" }}></label>
                                            </div>
                                        </div>
                                        {(errors.profile_image && !profileImage) && <p style={{ color: "red", textAlign: "start", fontSize: "12px", marginLeft: "2px" }} className='mb-0'>{errors.profile_image.message}</p>}
                                    </div>
                                    {
                                        profileImage ? (
                                            <div className='col-2'>
                                                <img src={URL.createObjectURL(profileImage)} alt="" width={"40px"} height={"40px"} style={{ borderRadius: "50%", objectFit: "cover" }} />
                                            </div>
                                        ) : (
                                            <div className="col-2"></div>
                                        )
                                    }

                                    <div className="form-group col-6 mb-0">
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
                                        {errors.password && <p style={{ color: "red", textAlign: "start", fontSize: "12px", marginLeft: "2px", marginBottom: "0" }}>{errors.password.message}</p>
                                        }
                                        <div className="form-group clearfix m-0 ml-1">
                                            <label className="element-left d-flex align-items-center" style={{ fontSize: "10px" }}>
                                                <input type="checkbox" onClick={handleShowPassword} style={{ width: "12px", marginRight: "5px" }} />
                                                <span style={{ fontSize: "12px" }}>Show Password</span>
                                            </label>
                                        </div>
                                    </div>

                                </div>
                                <div className="col-12 d-flex px-0">
                                    {
                                        languageData?.map((ele, ind) =>
                                            <div className="fancy-checkbox" key={ind}>
                                                <label><input type="checkbox" name='language' onClick={handleCheckBoxChange} value={ele.language} /><span>{ele.language}</span></label>
                                            </div>)
                                    }
                                </div>

                                <button type="submit" className="btn btn-primary btn-round ml-3" disabled={isSubmitting}>{isSubmitting ? "Loading..." : "Create"}</button>
                            </form>

                        </div>
                    </div>
                </div>
                <div id="particles-js"></div>
            </div>
        </>
    )
}

export default CreateCreator