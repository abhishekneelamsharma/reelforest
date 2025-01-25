"use client"
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { useForm } from "react-hook-form"
import Loader from '@/_components/global/Loader';

const Charges = () => {
    const [data, setData] = useState();
    const { register, handleSubmit, reset, formState: { errors, isSubmitting }, } = useForm()


    const handleUpdate = async (values) => {
        try {
            values.id = data._id
            const res = await axios.post("/api/charges/update_charges", values);
            if (res.data.status == 1) {
                toast.success(res.data.message, {
                    style: {
                        borderRadius: '10px',
                        background: '#333',
                        color: '#fff',
                    },
                })
                setLoading(false)
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

    useEffect(() => {
        getData();
    }, [])

    const getData = async () => {
        try {
            const res = await axios.get('/api/charges/get_charges');
            if (res.data.status == 1) {
                setData(res.data.data);
                setLoading(false);
            }
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        if (data) {
            reset(data);
        }
    }, [data])


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
        <>
            <div id="main-content">
                <div className="container-fluid">
                    <div className="block-header">
                        <div className="row clearfix">
                            <div className="col-md-6 col-sm-12">
                                <h1 style={{ color: "#17a2b8" }} className='ml-3'>Manage Charges</h1>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="body">
                            <div className='row'>

                                <div className='col-6'>
                                    <h6 className='my-2'>Plateform Charges</h6>
                                    <div className="input-group ">

                                        <input type="number" min={0} className={`form-control ${errors.min_no_of_creators ? "border-danger" : ""}`} placeholder="Plateform Charges" {...register("plateform_charges", {
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
                                            <span className="input-group-text">
                                                &#8377;
                                            </span>
                                        </div>
                                    </div>

                                    {errors.min_no_of_creators && <p className='mb-0 text-danger' >{errors.min_no_of_creators.message}</p>}
                                </div>
                                <div className='col-6'>
                                </div>
                                <div className='col-6'>
                                    <h6 className='my-2'>Service Charges</h6>
                                    <div className="input-group ">
                                        <input type="number" min={0} className={`form-control ${errors.amount ? "border-danger" : ""}`} placeholder="Service Charges" {...register("service_charges", {
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
                                            <span className="input-group-text">
                                                %
                                            </span>
                                        </div>
                                    </div>
                                    {errors.amount && <p className='mb-0 text-danger' >{errors.amount.message}</p>}
                                </div>
                                <div className='col-6'>
                                </div>

                                <div className='col-6 my-3'>
                                    <button className='btn btn-outline-info btn-round' onClick={handleSubmit(handleUpdate)} disabled={isSubmitting}>{isSubmitting ? "Updating..." : "Update"}</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Charges