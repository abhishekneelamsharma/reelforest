"use client";

import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Order = () => {

    const [orderData, setOrderData] = useState();

    useEffect(() => {
        getData();
    }, [])

    const getData = async () => {
        try {
            const res = await axios.get("/api/order/get_all_orders");
            console.log(res.data);
            if (res.data.status == 1) {
                setOrderData(res.data.data);
            }
        } catch (err) {
            console.log(err);
        }
    }
    console.log(orderData);
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
                <div className="col-12">
                    <div className="table-responsive">
                        <table className="table header-border table-hover table-custom spacing5">
                            <thead>
                                <tr>
                                    <th><strong style={{ color: "#17a2b8" }}>#</strong></th>
                                    <th><strong style={{ color: "#17a2b8" }}>OrderId</strong></th>
                                    <th className='text-center'><strong style={{ color: "#17a2b8" }} >UserName</strong></th>
                                    <th className='text-center'><strong style={{ color: "#17a2b8" }} >Total Creator</strong></th>
                                    <th className='text-center'><strong style={{ color: "#17a2b8" }} >Total Amount</strong></th>
                                    <th className='text-center'><strong style={{ color: "#17a2b8" }} >Audio Link</strong></th>
                                    <th className='text-center'><strong style={{ color: "#17a2b8" }} >Status</strong></th>
                                    {/* <th className='text-center'><strong style={{ color: "#17a2b8" }} >Date</strong></th> */}
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    orderData?.map((ele,ind) => 
                                        <tr key={ind}>
                                            <th className="w60">1</th>
                                            <td>{ele._id}</td>
                                            <td className='text-center'>{ele.username}</td>
                                            <td className='text-center'>{ele.total_no_of_creators}</td>
                                            <td className='text-center'>{ele.total_amount}</td>
                                            <td className='text-center'>{ele.audio_link}</td>
                                            <td className='text-center'><span className="badge badge-warning p-3 py-3" style={{borderRadius:"50%"}}>
                                            {ele.completedOrder}/{ele.total_no_of_creators}</span>
                                            </td>
                                            {/* <td className='text-center'>{ele.order_date}</td> */}
                                        </tr>
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