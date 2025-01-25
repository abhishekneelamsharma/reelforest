"use client"

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import axios from 'axios';
import toast from 'react-hot-toast';
import Loader from '@/_components/global/Loader';

const Category = () => {

    const [data, setData] = useState();

    const getData = async () => {
        try {
            const res = await axios.get("/api/category/get_all_category");
            setData(res.data.data);
            setLoading(false)
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getData();
    }, [])

    

    const [loading, setLoading] = useState(true);
    // useEffect(() => {
    //     setTimeout(() => {
    //         setLoading(false);
    //     }, 700)
    // }, [])

    if (loading) {
        return <Loader />
    }

    const handleStatusChange = async (id, status) => {
        try {
            const res = await axios.post("/api/category/change_status", {
                id: id, status: status
            });
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

    return (
        <div id="main-content">
            <div className="container-fluid">
                <div className="block-header">
                    <div className="row clearfix">
                        <div className="col-md-6 col-sm-12">
                            <h1 style={{ color: "#17a2b8" }} className='ml-3'>CATEGORIES</h1>
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <div className="table-responsive">
                        <table className="table header-border table-hover table-custom spacing5">
                            <thead>
                                <tr>
                                    <th className='text-center'><strong style={{ color: "#17a2b8" }}>#</strong></th>
                                    <th className='text-center'><strong style={{ color: "#17a2b8" }}>Category Name</strong></th>
                                    <th className='text-center'><strong style={{ color: "#17a2b8" }}>Minimum Creators</strong></th>
                                    <th className='text-center'><strong style={{ color: "#17a2b8" }}>Amount</strong></th>
                                    <th className='text-center'><strong style={{ color: "#17a2b8" }}>Status</strong></th>
                                    <th className='text-center'><strong style={{ color: "#17a2b8" }}>Action</strong></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data?.map((ele, ind) =>
                                        <tr key={ind}>
                                            <th className="w60 text-center">{ind + 1}</th>
                                            <td className='text-center'>{ele.category_name}</td>
                                            <td className='text-center'>{ele.min_no_of_creators}</td>
                                            <td className='text-center'>{ele.amount}</td>
                                            <td className='text-center'><a href='#'
                                                className={`badge ${ele.status ? "badge-warning" : "badge-danger"}`} onClick={() => handleStatusChange(ele._id, ele.status)}>{ele.status == 1 ? "Active" : "Inactive"}</a>
                                            </td>
                                            <td className='text-center'> <span >
                                                <Link href={{
                                                    pathname: "/admin/category/edit",
                                                    query: { id: ele._id }
                                                }}
                                                    className='btn btn-outline-info py-1 px-3'>Edit</Link>
                                            </span></td>
                                        </tr>)
                                }
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </div >
    )
}

export default Category