"use client";

import DateFomatter from '@/_helper/DateFomatter';
import axios from 'axios';
import React, { act, useEffect, useState } from 'react'
import Link from 'next/link';
import Loader from '@/_components/global/Loader';

const Order = () => {

    const [orderData, setOrderData] = useState();
    const [active, setActive] = useState(0);

    useEffect(() => {
        getData();
    }, [])

    const getData = async () => {
        try {
            const res = await axios.get("/api/order/get_all_orders");

            if (res.data.status == 1) {
                setOrderData(res.data.data);
                setLoading(false)
            }
        } catch (err) {
            console.log(err);
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
                            <h1 style={{ color: "#17a2b8" }}>Welcome / Order</h1>
                        </div>
                    </div>
                </div>
                <div className="mb-4 d-flex flex-column flex-sm-row" style={{ gap: "5px" }}>
                    <button type="button" className={`btn btn-round px-4 ${active == 0 ? "btn-info" : "btn-outline-info"}`}
                        onClick={() => setActive(0)}>Pending
                    </button>
                    <button type="button" className={`btn btn-round px-4 ${active == 1 ? "btn-info" : "btn-outline-info"}`}
                        onClick={() => setActive(1)}>Completed
                    </button>
                </div>
                <div className="col-12">
                    <div className="table-responsive">
                        <table className="table header-border table-hover table-custom spacing5">
                            <thead>
                                {
                                    active == 0 ?
                                        <tr>
                                            <th><strong style={{ color: "#17a2b8" }}>#</strong></th>
                                            <th><strong style={{ color: "#17a2b8" }}>OrderId</strong></th>
                                            <th className='text-center'><strong style={{ color: "#17a2b8" }} >UserName</strong></th>
                                            <th className='text-center'><strong style={{ color: "#17a2b8" }} >Total Creator</strong></th>
                                            <th className='text-center'><strong style={{ color: "#17a2b8" }} >Total Amount</strong></th>
                                            <th className='text-center'><strong style={{ color: "#17a2b8" }} >Audio Link</strong></th>
                                            <th className='text-center'><strong style={{ color: "#17a2b8" }} >Status</strong></th>
                                            <th className='text-center'><strong style={{ color: "#17a2b8" }} >Date</strong></th>
                                            <th className='text-center'><strong style={{ color: "#17a2b8" }} >Request</strong></th>
                                        </tr> : <tr>
                                            <th><strong style={{ color: "#17a2b8" }}>#</strong></th>
                                            <th><strong style={{ color: "#17a2b8" }}>OrderId</strong></th>
                                            <th className='text-center'><strong style={{ color: "#17a2b8" }} >UserName</strong></th>
                                            <th className='text-center'><strong style={{ color: "#17a2b8" }} >Total Creator</strong></th>
                                            <th className='text-center'><strong style={{ color: "#17a2b8" }} >Total Amount</strong></th>
                                            <th className='text-center'><strong style={{ color: "#17a2b8" }} >Audio Link</strong></th>
                                            <th className='text-center'><strong style={{ color: "#17a2b8" }} >Status</strong></th>
                                            <th className='text-center'><strong style={{ color: "#17a2b8" }} >Date</strong></th>
                                        </tr>
                                }
                            </thead>
                            <tbody>
                                {
                                    orderData?.map((ele, ind) => {
                                        if (active == 0) {
                                            if (ele.completedOrder < ele.total_no_of_creators) {
                                                return (
                                                    <tr key={ind}>
                                                        <th className="w60">{ind + 1}</th>
                                                        <td>{ele._id}</td>
                                                        <td className='text-center'>{ele.username}</td>
                                                        <td className='text-center'>{ele.total_no_of_creators}</td>
                                                        <td className='text-center'>{ele.total_amount}</td>
                                                        <td className='text-center'>
                                                            <a href={ele.audio_link} target='_blank'>Link</a>
                                                        </td>
                                                        <td className='text-center'><span className=" badge-warning " >
                                                            {ele.completedOrder}/{ele.total_no_of_creators}</span>
                                                        </td>
                                                        <td className='text-center'><DateFomatter time={ele.createdAt || ''} /></td>
                                                        <td className='text-center'>
                                                            <Link href={{
                                                                pathname: "/admin/order/order-request",
                                                                query: { id: ele._id }
                                                            }} className="badge badge-warning ">view</Link>
                                                        </td>
                                                    </tr>
                                                )
                                            }
                                        } else {
                                            if (ele.completedOrder >= ele.total_no_of_creators) {
                                                return (
                                                    <tr key={ind}>
                                                        <th className="w60">{ind + 1}</th>
                                                        <td>{ele._id}</td>
                                                        <td className='text-center'>{ele.username}</td>
                                                        <td className='text-center'>{ele.total_no_of_creators}</td>
                                                        <td className='text-center'>{ele.total_amount}</td>
                                                        <td className='text-center'>
                                                            <a href={ele.audio_link} target='_blank'>Link</a>
                                                        </td>
                                                        <td className='text-center'><span className=" badge-warning " >
                                                            {ele.completedOrder}/{ele.total_no_of_creators}</span>
                                                        </td>
                                                        <td className='text-center'><DateFomatter time={ele.createdAt || ''} /></td>
                                                        {/* <td className='text-center'>
                                                            <Link href={{
                                                                pathname: "/admin/order/order-request",
                                                                query: { id: ele._id }
                                                            }} className="badge badge-warning ">view</Link>
                                                        </td> */}
                                                    </tr>
                                                )
                                            }
                                        }
                                    }
                                    )
                                }


                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </div >
    )
}

export default Order