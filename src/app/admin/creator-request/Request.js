"use client"

import Loader from '@/_components/global/Loader';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import Swal from "sweetalert2";


const Request = () => {
    const [creatorData, setCreatorData] = useState();
    const [categoryData, setCategoryData] = useState();
    const [categoryId, setCategoryId] = useState();
    const [creatorId, setCreatorId] = useState();
    const [toggleVerify, setToggleVerify] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [creatorCharges, setCreatorCharges] = useState("");

    useEffect(() => {
        getData();
        getCategoryData();
    }, [])

    const getCategoryData = async () => {
        try {
            const res = await axios.get("/api/category/get_all_active_category");
            setCategoryData(res.data.data);
        } catch (err) {
            console.log(err);
        }
    }

    const getData = async () => {
        try {
            const res = await axios.get("/api/creator/get_creator_requests");
            setCreatorData(res.data.data);
            setLoading(false)
        } catch (err) {
            console.log(err);
        }
    }

    const handleAssign = async (id) => {
        try {

            if (!categoryId) {
                toast.error("Please select the category !", {
                    style: {
                        borderRadius: '10px',
                        background: '#333',
                        color: '#fff',
                    },
                })
                return;
            }
            if (!creatorCharges) {
                toast.error("Please set the creator charges !", {
                    style: {
                        borderRadius: '10px',
                        background: '#333',
                        color: '#fff',
                    },
                })
                return;
            }
            setSubmitting(true)
            const res = await axios.post("/api/creator/assign_category", {
                id: creatorId,
                category_id: categoryId,
                creator_charges: creatorCharges
            });
            setSubmitting(false)
            if (res.data.status == 1) {
                toast.success(res.data.message, {
                    style: {
                        borderRadius: '10px',
                        background: '#333',
                        color: '#fff',
                    },
                })
                getData();
                setCategoryId("");
                setCreatorCharges("")
                setToggleVerify(false)
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
            setSubmitting(false)
            console.log(err);
        }
    }

    const handleDelete = async (id) => {

        const result = await Swal.fire({
            icon: "warning",
            background: "#282b2f",
            width: "400px",
            title: "Are you sure?",
            allowOutsideClick: false,
            showCancelButton: true,
            showConfirmButton: true,
            confirmButtonText: "Delete",
            customClass: {
                confirmButton: "btn btn-primary",
                cancelButton: "btn btn-outline-secondary",
            }
        })

        if (result.isConfirmed) {
            try {
                const res = await axios.post(`/api/creator/delete_creator`, {
                    id: id
                })
                if (res.data.status == 1) {
                    toast.success(res.data.message, {
                        style: {
                            borderRadius: '10px',
                            background: '#333',
                            color: '#fff',
                        },
                    })
                    getData();
                }
            } catch (err) {
                console.log(err);
            }
        }
    }

    const [loading, setLoading] = useState(true);
    // useEffect(() => {
    //     setTimeout(() => {
    //         setLoading(false);
    //     }, 700)
    // }, [])

    if (loading) {
        return <Loader />
    }

    return (
        <div id="main-content">
            <div className="container-fluid">
                <div className="block-header">
                    <div className="row clearfix">
                        <div className="col-md-6 col-sm-12">
                            <h1 style={{ color: "#17a2b8" }}>Welcome / Creator Requests</h1>
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <div className="table-responsive">
                        <table className="table header-border table-hover table-custom spacing5">
                            <thead>
                                <tr>
                                    <th className='text-center'><strong style={{ color: "#17a2b8" }}>#</strong></th>
                                    <th className='text-center'><strong style={{ color: "#17a2b8" }}>Account Information</strong></th>
                                    <th className='text-center'><strong style={{ color: "#17a2b8" }}>Follwers</strong></th>
                                    <th className='text-center'><strong style={{ color: "#17a2b8" }}>Follwings</strong></th>
                                    <th className='text-center'><strong style={{ color: "#17a2b8" }}>Posts</strong></th>
                                    <th className='text-center'><strong style={{ color: "#17a2b8" }}>Views</strong></th>
                                    <th className='text-center'><strong style={{ color: "#17a2b8" }}>Engagements</strong></th>
                                    <th className='text-center'><strong style={{ color: "#17a2b8" }}>Language</strong></th>
                                    <th className='text-center'><strong style={{ color: "#17a2b8" }}>Action</strong></th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    creatorData?.length > 0 ? (
                                        creatorData?.map((ele, ind) =>
                                            <tr key={ind}>
                                                <td className="w60">{ind + 1}</td>
                                                <td className='text-center'><div className="user-account m-0  influencer">
                                                    <label htmlFor="influencer_2" style={{ border: "none" }} className="w-100 d-flex justify-content-between ">
                                                        <div className='d-flex'>
                                                            <div className="" style={{ borderRadius: "50px", margin: "5px" }}>
                                                                <img src={`/uploads/${ele.profile_image}`} className="user-photo" alt="Profile pic" width={"40px"} height={"40px"} style={{ borderRadius: "50px", objectFit: "cover" }} />
                                                            </div>
                                                            <div className='d-flex flex-column align-items-start justify-content-center'>
                                                                <span className='mb-0' style={{ color: "white" }}><em>@</em><a href={ele.profile_link} style={{ color: "white", textDecoration: "underline" }} target='_blank'>{ele.username}</a></span>
                                                                <span className='mb-0' style={{ fontSize: "13px" }}>{ele.fullname.toUpperCase()}</span>
                                                            </div>
                                                        </div>
                                                    </label>
                                                </div>
                                                </td>
                                                <td className='text-center'>{ele.followers.toUpperCase()}</td>
                                                <td className='text-center'>{ele.followings.toUpperCase()}</td>
                                                <td className='text-center'>{ele.posts.toUpperCase()}</td>
                                                <td className='text-center'>{ele.views.toUpperCase()}</td>
                                                <td className='text-center'>{ele.engagement.toUpperCase()}</td>
                                                <td className='text-center'>{ele.language.join("/")}</td>

                                                <td className='text-center'>
                                                    <a href='#' className="badge badge-warning px-2" onClick={() => {
                                                        setToggleVerify(!toggleVerify)
                                                        setCreatorId(ele._id)
                                                    }}>Verify</a>

                                                    <a href='#' className="badge badge-danger px-2" onClick={() => handleDelete(ele._id)}>Delete</a>
                                                </td>
                                            </tr>
                                        )
                                    ) : (
                                        <tr>
                                            <td>No Request Found!</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                    )

                                }
                            </tbody>
                        </table>
                    </div>

                </div>
                <div className={toggleVerify ? `modal fade show` : `modal fade`} id="exampleModalCenter" tabIndex="-1" role="dialog"
                    aria-labelledby="exampleModalCenterTitle" aria-hidden="true" style={toggleVerify ? { display: "block", backgroundColor: "rgba(0,0,0,0.6)" } : {}}>
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalCenterTitle" >Add Creator</h5>
                                <button type="button" className="close" data-dismiss="modal"
                                    aria-label="Close" onClick={() => setToggleVerify(!toggleVerify)}>
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <h6 className='my-2'>Select Category</h6>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <label className="input-group-text" htmlFor="inputGroupSelect01">Category</label>
                                    </div>
                                    <select className="custom-select" id="inputGroupSelect01" onChange={(e) => setCategoryId(e.target.value)} value={categoryId}>
                                        <option defaultChecked hidden>Select Category</option>
                                        {
                                            categoryData?.map((ele, ind) =>
                                                <option value={ele._id} key={ind}>{ele.category_name}</option>
                                            )
                                        }
                                    </select>
                                </div>
                                <h6 className='my-2'>Creator Charge</h6>
                                <div className="input-group ">

                                    <input type="number" min={0} className={`form-control`} placeholder="Set creator charges" value={creatorCharges} onChange={(e) => setCreatorCharges(e.target.value)} />
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                            &#8377;
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer d-flex justify-content-start">
                                <button type="button" className="btn btn-round btn-primary" onClick={handleAssign} disabled={submitting}>{submitting ? "Adding.." : "Add"}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Request