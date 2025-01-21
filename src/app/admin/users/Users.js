"use client"

import { DataTable } from "simple-datatables"
import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useForm } from "react-hook-form"
import Loader from "@/_components/global/Loader"

const Users = () => {
    const [data, setData] = useState();
    const [toggleFunds, setToggleFunds] = useState(false);
    const [userId, setUserId] = useState();
    const { register, handleSubmit, reset, formState: { errors, isSubmitting }, } = useForm({
        defaultValues: {
            walletAmount: "", 
        }
    })
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        if (data) {
            new DataTable("#myTable")
        }
    }, [data])

    useEffect(() => {
        getData();
    }, [])

    const getData = async () => {
        try {
            const res = await axios.get("/api/user/get_all_users");
            setData(res.data.data)
            setLoading(false);
        } catch (err) {
            console.log(err);
        }
    }
    const handleAddFunds = async (data) => {
        try {
            const res = await axios.post("/api/user/add_funds", {
                id: userId,
                walletAmount: data.walletAmount
            });
            if (res.data.status == 1) {
                reset();
                getData();
                setToggleFunds(!toggleFunds)
            }
        } catch (err) {
            console.log(err);
        }
    }

    
    if (loading) {
        return <Loader />
    }

    return (
        <div id="main-content">
            <div className="container-fluid">
                <div className="block-header">
                    <div className="row clearfix">
                        <div className="col-md-6 col-sm-12">
                            <h1 style={{ color: "#17a2b8" }} > All Users</h1>
                        </div>
                    </div>
                </div>
                <div className="body">
                    <div className="table-responsive">
                        <table id="myTable" className="table table-hover js-basic-example dataTable table-custom spacing5">
                            <thead>
                                <tr>
                                    <th style={{ color: "#17a2b8" }}>User Id</th>
                                    <th style={{ color: "#17a2b8" }}>Name</th>
                                    <th style={{ color: "#17a2b8" }}>Email</th>
                                    <th style={{ color: "#17a2b8" }} className="text-center">Wallet Amount</th>
                                    <th style={{ color: "#17a2b8" }} className="text-center">Add Funds</th>
                                </tr>
                            </thead>
                            {/* <tfoot>
                                <tr>
                                    <th style={{ color: "#17a2b8" }}>User Id</th>
                                    <th style={{ color: "#17a2b8" }}>Name</th>
                                    <th style={{ color: "#17a2b8" }}>Email</th>
                                </tr>
                            </tfoot> */}
                            <tbody>
                                {
                                    data?.map((ele, ind) =>
                                        <tr key={ind}>
                                            <td>{ele._id}</td>
                                            <td>{ele.name}</td>
                                            <td>{ele.email}</td>
                                            <td className="text-center">{ele.walletAmount}</td>
                                            <td className="text-center">
                                                <a href="#" className="badge badge-warning" onClick={() => {
                                                    setToggleFunds(!toggleFunds)
                                                    setUserId(ele._id)
                                                }}>
                                                    Add
                                                </a>
                                            </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className={toggleFunds ? `modal fade show` : `modal fade`} id="exampleModalCenter" tabIndex="-1" role="dialog"
                    aria-labelledby="exampleModalCenterTitle" aria-hidden="true" style={toggleFunds ? { display: "block", backgroundColor: "rgba(0,0,0,0.6)" } : {}}>
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalCenterTitle" >Add Funds</h5>
                                <button type="button" className="close" data-dismiss="modal"
                                    aria-label="Close" onClick={() => setToggleFunds(!toggleFunds)}>
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="input-group ">
                                    <input type="number" min={0} className={`form-control ${errors.walletAmount ? "border-danger" : ""}`} placeholder="Enter the amount to add" {...register("walletAmount", {
                                        required: {
                                            value: "true",
                                            message: "Required field!"
                                        },
                                        min: {
                                            value: 0,
                                            message: "Invalid value"
                                        }
                                    })} />
                                    <div className="input-group-prepend">
                                        <span className={`input-group-text ${errors.walletAmount ? "border-danger" : ""}`}>
                                            &#8377;
                                        </span>
                                    </div>
                                </div>
                                {errors.walletAmount && <p className='mb-0 text-danger' >{errors.walletAmount.message}</p>}
                            </div>
                            <div className="modal-footer d-flex justify-content-start">
                                <button type="button" className="btn btn-round btn-primary" onClick={handleSubmit(handleAddFunds)} disabled={isSubmitting}>{isSubmitting ? "Add Funds.." : "Add Fund"}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Users