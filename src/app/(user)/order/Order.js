"use client";

import Loader from '@/_components/global/Loader';
import DateFomatter from '@/_helper/DateFomatter';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react'

const Order = () => {

    const [orderData, setOrderData] = useState();
    const [active, setActive] = useState(0);
    const session = useSession();
    const user_id = session?.data?.user?.user_id;

    useEffect(() => {
        getData();
    }, [user_id])

    const getData = async () => {
        try {
            const res = await axios.post("/api/order/get_order_by_user", {
                user_id: user_id
            });
            console.log(res.data);
            if (res.data.status == 1) {
                setOrderData(res.data.data);
            }
        } catch (err) {
            console.log(err);
        }
    }

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
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
                                <tr>
                                    <th><strong style={{ color: "#17a2b8" }}>#</strong></th>
                                    <th><strong style={{ color: "#17a2b8" }}>OrderId</strong></th>
                                    <th className='text-center'><strong style={{ color: "#17a2b8" }} >Total Creator</strong></th>
                                    <th className='text-center'><strong style={{ color: "#17a2b8" }} >Total Amount</strong></th>
                                    <th className='text-center'><strong style={{ color: "#17a2b8" }} >Audio Link</strong></th>
                                    <th className='text-center'><strong style={{ color: "#17a2b8" }} >Status</strong></th>
                                    <th className='text-center'><strong style={{ color: "#17a2b8" }} >Date</strong></th>
                                </tr>
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
                                                        <td className='text-center'>{ele.total_no_of_creators}</td>
                                                        <td className='text-center'>{ele.total_amount}</td>
                                                        <td className='text-center'>
                                                            <a href={ele.audio_link} target='_blank'>Link</a>
                                                        </td>
                                                        <td className='text-center'><span className=" badge-warning " >
                                                            {ele.completedOrder}/{ele.total_no_of_creators}</span>
                                                        </td>
                                                        <td className='text-center'><DateFomatter time={ele.createdAt || ''} /></td>
                                                    </tr>
                                                )
                                            }
                                        } else {
                                            if (ele.completedOrder >= ele.total_no_of_creators) {
                                                return (
                                                    <tr key={ind}>
                                                        <th className="w60">{ind + 1}</th>
                                                        <td>{ele._id}</td>
                                                        <td className='text-center'>{ele.total_no_of_creators}</td>
                                                        <td className='text-center'>{ele.total_amount}</td>
                                                        <td className='text-center'>
                                                            <a href={ele.audio_link} target='_blank'>Link</a>
                                                        </td>
                                                        <td className='text-center'><span className=" badge-warning " >
                                                            {ele.completedOrder}/{ele.total_no_of_creators}</span>
                                                        </td>
                                                        <td className='text-center'><DateFomatter time={ele.createdAt || ''} /></td>
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
        </div>
    )
}

export default Order