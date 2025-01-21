"use client"
import axios from "axios"
import { DataTable } from "simple-datatables"
import React, { useEffect, useState } from 'react'
import Swal from "sweetalert2"
import Loader from "@/_components/global/Loader"

const Creators = () => {
    const [categoryId, setCategoryId] = useState("67810c233ad0eb9e46b58a85");
    const [creatorData, setCreatorData] = useState();
    const [categoryData, setCategoryData] = useState();
    const [loading, setLoading] = useState(true);

    const handleCategoryId = (id) => {
        setCategoryId(id);
    }

    useEffect(() => {
        if (creatorData) {
            new DataTable("#myTable")
        }
    }, [creatorData])


    useEffect(() => {
        if (categoryId) {
            getData();
        }
    }, [categoryId])

    const getData = async () => {
        try {
            const res = await axios.post("/api/creator/get_creator_by_category", {
                category_id: categoryId
            });
            if (res.data.status == 1) {
                setCreatorData(res.data.data);
                setLoading(false);
            }
        } catch (err) {
            console.log(err);
        }
    }

    const getCategoryData = async () => {
        try {
            const res = await axios.get("/api/category/get_all_active_category");
            if (res.data.status == 1) {
                setCategoryData(res.data.data);
            }
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getCategoryData();
    }, [])

    const handleChangeStatus = async (id, status) => {
        const result = await Swal.fire({
            icon: "warning",
            width: "400px",
            background: "#282b2f",
            title: "Are you sure?",
            allowOutsideClick: false,
            showCancelButton: true,
            showConfirmButton: true,
            confirmButtonText: `${status == 1 ? "Deactivate" : "Activate"}`,
            customClass: {
                confirmButton: "btn btn-primary",
                cancelButton: "btn btn-outline-secondary",
            }
        })
        if (result.isConfirmed) {
            try {
                const res = await axios.post(`/api/creator/change_status`, {
                    id: id,
                    status: status
                })
                if (res.data.status === 1) {
                    getData();
                }
            } catch (err) {
                console.log(err);
            }
        }
    }




    if (loading) {
        return <Loader />
    }

    return (
        <>
            <div id="main-content">
                <div className="container-fluid">
                    <div className="block-header">
                        <div className="row clearfix">
                            <div className="col-md-6 col-sm-12">
                                <h1 style={{ color: "#17a2b8" }} > Creators</h1>
                            </div>
                        </div>
                    </div>
                    <div className="mb-4 d-flex flex-column flex-sm-row" style={{ gap: "5px" }}>
                        {/* <select className="custom-select" id="inputGroupSelect01">
                                            <option defaultChecked hidden>Select Category</option>
                                            <option value="1">Premium Creator</option>
                                            <option value="2">Micro Creator</option>
                                            <option value="3">Nano Creator</option>
                                            <option value="3">Bulk Creator</option>
                                            <option value="3">Page Creator</option>
                                        </select> */}

                        {
                            categoryData?.map((ele, ind) =>
                                <button type="button" className={`btn btn-round ${categoryId == ele._id ? "btn-info" : "btn-outline-info"}`}
                                    data-target="#exampleModalCenter" style={{ width: "110px" }} onClick={() => handleCategoryId(ele._id)} key={ind}>{ele.category_name.split(" ")[0]} </button>)
                        }
                    </div>
                    <div className="body">
                        <div className="table-responsive">
                            <table id="myTable" className="table table-hover js-basic-example dataTable table-custom spacing5">
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
                                <tfoot>
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
                                </tfoot>
                                <tbody>
                                    {
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
                                                    <a href='#' className={`badge ${ele.status ? "badge-warning" : "badge-danger"}`} onClick={() => handleChangeStatus(ele._id, ele.status)}>{ele.status ? "Active" : "Inactive"}</a>
                                                </td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Creators