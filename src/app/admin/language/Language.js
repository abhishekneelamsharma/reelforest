"use client"

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import axios from 'axios';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';
import Loader from '@/_components/global/Loader';

const Language = () => {

    const [data, setData] = useState();
    const [toggleCreate, setToggleCreate] = useState(false);
    const [toggleUpdate, setToggleUpdate] = useState(false);
    const [langId, setLangId] = useState();
    const [submitting, setSubmitting] = useState();
    const [language, setLanguage] = useState("");

    const getData = async () => {
        try {
            const res = await axios.get("/api/language/get_language");
            setData(res.data.data);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getData();
    }, [])


    const handleCreate = async () => {
        try {

            if (!language) {
                toast.error("Language is required !", {
                    style: {
                        borderRadius: '10px',
                        background: '#333',
                        color: '#fff',
                    },
                })
                return;
            }
            setSubmitting(true)
            const res = await axios.post("/api/language/create", {
                language: language
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
                setLanguage("")
                setToggleCreate(false)
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

    const handleUpdate = async () => {
        try {

            if (!language) {
                toast.error("Language is required !", {
                    style: {
                        borderRadius: '10px',
                        background: '#333',
                        color: '#fff',
                    },
                })
                return;
            }
            setSubmitting(true)
            const res = await axios.post("/api/language/edit", {
                id: langId,
                language: language
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
                setLanguage("")
                setToggleUpdate(false)
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

    const handleStatusChange = async (id, status) => {

        const result = await Swal.fire({
            icon: "warning",
            background: "#282b2f",
            width: "400px",
            title: "Are you sure?",
            allowOutsideClick: false,
            showCancelButton: true,
            showConfirmButton: true,
            confirmButtonText: `${status == 1 ? "Inactive" : "Active"}`,
            customClass: {
                confirmButton: "btn btn-primary",
                cancelButton: "btn btn-outline-secondary",
            }
        })

        if (result.isConfirmed) {
            try {
                const res = await axios.post(`/api/language/change_status`, {
                    id: id,
                    status: status
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
                const res = await axios.post(`/api/language/delete`, {
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
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 700)
    }, [])

    if (loading) {
        return <Loader />
    }

    return (
        <div id="main-content">
            <div className="container-fluid">
                <div className="block-header">
                    <div className="row clearfix">
                        <div className="col-12 d-flex justify-content-between">
                            <h1 style={{ color: "#17a2b8" }} className='ml-3'>CATEGORIES</h1>
                            <a href="#" className='btn btn-info mr-3' onClick={() => setToggleCreate(!toggleCreate)}>CREATE</a>
                        </div>

                    </div>
                </div>
                <div className="col-12">
                    <div className="table-responsive">
                        <table className="table header-border table-hover table-custom spacing5">
                            <thead>
                                <tr>
                                    <th className='text-center'><strong style={{ color: "#17a2b8" }}>#</strong></th>
                                    <th className='text-center'><strong style={{ color: "#17a2b8" }}>Language</strong></th>

                                    <th className='text-center'><strong style={{ color: "#17a2b8" }}>Status</strong></th>
                                    <th className='text-center'><strong style={{ color: "#17a2b8" }}>Action</strong></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data?.length > 0
                                        ? data?.map((ele, ind) =>
                                            <tr key={ind}>
                                                <th className="w60 text-center">{ind + 1}</th>
                                                <td className='text-center'>{ele.language}</td>

                                                <td className='text-center'><a href='#'
                                                    className={`badge ${ele.status == 1 ? "badge-warning" : "badge-danger"}`} onClick={() => handleStatusChange(ele._id, ele.status)}>{ele.status == 1 ? "Active" : "Inactive"}</a>
                                                </td>
                                                <td className='text-center'> <span >
                                                    <Link href={"#"} onClick={() => {
                                                        setToggleUpdate(!toggleCreate)
                                                        setLanguage(ele.language)
                                                        setLangId(ele._id)
                                                    }}
                                                        className='btn btn-outline-info py-1 px-3'>Edit</Link>
                                                    <Link href={"#"} onClick={() => handleDelete(ele._id)} className='ml-2 btn btn-outline-info py-1 px-3'>Delete</Link>
                                                </span></td>
                                            </tr>)
                                        : <tr>
                                            <td>No Language Found</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                }
                            </tbody>
                        </table>
                    </div>

                </div>

                <div className={toggleCreate ? `modal fade show` : `modal fade`} id="exampleModalCenter" tabIndex="-1" role="dialog"
                    aria-labelledby="exampleModalCenterTitle" aria-hidden="true" style={toggleCreate ? { display: "block", backgroundColor: "rgba(0,0,0,0.6)" } : {}}>
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalCenterTitle" >Create Language</h5>
                                <button type="button" className="close" data-dismiss="modal"
                                    aria-label="Close" onClick={() => {
                                        setToggleCreate(!toggleCreate)
                                        setLanguage("")
                                    }}>
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Enter the lanuage" value={language} onChange={(e) => setLanguage(e.target.value)} />
                                </div>
                            </div>
                            <div className="modal-footer d-flex justify-content-start">
                                <button type="button" className="btn btn-round btn-primary" onClick={handleCreate} disabled={submitting}>{submitting ? "Loading..." : "Create"}</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={toggleUpdate ? `modal fade show` : `modal fade`} id="exampleModalCenter" tabIndex="-1" role="dialog"
                    aria-labelledby="exampleModalCenterTitle" aria-hidden="true" style={toggleUpdate ? { display: "block", backgroundColor: "rgba(0,0,0,0.6)" } : {}}>
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalCenterTitle" >Update Language</h5>
                                <button type="button" className="close" data-dismiss="modal"
                                    aria-label="Close" onClick={() => {
                                        setToggleUpdate(!toggleUpdate)
                                        setLanguage("")
                                    }}>
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Enter the lanuage" value={language} onChange={(e) => setLanguage(e.target.value)} />
                                </div>
                            </div>
                            <div className="modal-footer d-flex justify-content-start">
                                <button type="button" className="btn btn-round btn-primary" onClick={() => handleUpdate()} disabled={submitting}>{submitting ? "Loading.." : "Update"}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Language