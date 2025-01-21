"use client";


import Loader from '@/_components/global/Loader';
import axios from 'axios';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';

const OrderRequest = () => {

    const [orderData, setOrderData] = useState();
    const searchParams = useSearchParams();
    const id = searchParams.get("id");

    useEffect(() => {
        getData();
    }, [])

    const getData = async () => {
        try {
            const res = await axios.post("/api/order/get_order_verification_request", {
                order_id: id
            });
            if (res.data.status == 1) {
                setOrderData(res.data.data);
            }
        } catch (err) {
            console.log(err);
        }
    }

    const handleVerification = async (creator_id, creator_charges) => {
        const result = await Swal.fire({
            icon: "warning",
            width: "400px",
            background: "#282b2f",
            title: "Are you sure?",
            allowOutsideClick: false,
            showCancelButton: true,
            showConfirmButton: true,
            confirmButtonText: `Verify`,
            customClass: {
                confirmButton: "btn btn-primary",
                cancelButton: "btn btn-outline-secondary",
            }
        })
        if (result.isConfirmed) {
            try {
                const res = await axios.post(`/api/order/verify_order_request`, {
                    order_id: id,
                    creator_id: creator_id,
                    creator_charges: creator_charges
                })
                if (res.data.status === 1) {
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
                                    <th><strong style={{ color: "#17a2b8" }}>CreatorId</strong></th>
                                    <th><strong style={{ color: "#17a2b8" }} >Creator Info</strong></th>
                                    <th className='text-center'><strong style={{ color: "#17a2b8" }} >Video Link</strong></th>
                                    <th className='text-center'><strong style={{ color: "#17a2b8" }} > Creator Charges</strong></th>
                                    <th className='text-center'><strong style={{ color: "#17a2b8" }} >Action</strong></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    orderData?.length > 0 ? (
                                        orderData?.map((ele, ind) =>
                                            <tr key={ind}>
                                                <th className="w60">{ind + 1}</th>
                                                <td>{ele.creator_id}</td>
                                                <td >@{ele.username} <br />{ele.fullname}</td>
                                                <td className='text-center'>
                                                    <a href={ele.video_link} target='_blank'>Link</a>
                                                </td>
                                                <td className='text-center'>{ele.creator_charges}</td>
                                                <td className='text-center'><a href="#" className="badge badge-warning " onClick={() => handleVerification(ele.creator_id, ele.creator_charges)}>
                                                    Verify</a>
                                                </td>
                                            </tr>
                                        )
                                    ) :
                                        <tr>
                                            <td>No Data Found!</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                }

                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default OrderRequest