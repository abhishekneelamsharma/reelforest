"use client"
import axios from 'axios';
import { useRouter, useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { useForm } from "react-hook-form"
import Loader from '@/_components/global/Loader';

const EditCategory = () => {
    const [data, setData] = useState();
    const { register, handleSubmit, reset, formState: { errors, isSubmitting }, } = useForm()
    const searchParams = useSearchParams();
    const id = searchParams.get("id");
    const router = useRouter();

    const handleUpdate = async (data) => {
        try {
            const res = await axios.post("/api/category/edit_category", { id: id, min_no_of_creators: data.min_no_of_creators, category_name: data.category_name,amount:data.amount });
            if (res.data.status == 1) {
                toast.success(res.data.message, {
                    style: {
                        borderRadius: '10px',
                        background: '#333',
                        color: '#fff',
                    },
                })
                router.push("/admin/category")
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
            const res = await axios.post('/api/category/get_category_by_id', {
                id: id
            });

            if (res.data.status == 1) {
                setData(res.data.data);
                setLoading(false)
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
                                <h1 style={{ color: "#17a2b8" }} className='ml-3'>Edit category </h1>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="body">
                            <div className='row'>
                                <div className='col-6'>
                                    <h6 className='my-2'>Category Name</h6>
                                    <div className="input-group">
                                        <input type="text" className={`form-control ${errors.category_name ? "border-danger" : ""}`} placeholder="Category name" {...register("category_name", {
                                            required: {
                                                value: "true",
                                                message: "Required field!"
                                            }
                                        })} />
                                    </div>
                                    {errors.category_name && <p className='mb-0 text-danger'>{errors.category_name.message}</p>}
                                </div>
                                <div className='col-6'>
                                </div>
                                <div className='col-6'>
                                    <h6 className='my-2'>Minimum Number of Creators</h6>
                                    <div className="input-group ">
                                        <input type="number" min={0} className={`form-control ${errors.min_no_of_creators ? "border-danger" : ""}`} placeholder="Number of creators" {...register("min_no_of_creators", {
                                            required: {
                                                value: "true",
                                                message: "Required field!"
                                            },
                                            min: {
                                                value: 0,
                                                message: "Invalid value"
                                            }
                                        })} />
                                    </div>
                                    {errors.min_no_of_creators && <p className='mb-0 text-danger' >{errors.min_no_of_creators.message}</p>}
                                </div>
                                <div className='col-6'>
                                </div>
                                <div className='col-6'>
                                    <h6 className='my-2'>Amount</h6>
                                    <div className="input-group ">
                                        <input type="number" min={0} className={`form-control ${errors.amount ? "border-danger" : ""}`} placeholder="Number of creators" {...register("amount", {
                                            required: {
                                                value: "true",
                                                message: "Required field!"
                                            },
                                            min: {
                                                value: 0,
                                                message: "Invalid value"
                                            }
                                        })} />
                                    </div>
                                    {errors.amount && <p className='mb-0 text-danger' >{errors.amount.message}</p>}
                                </div>
                                <div className='col-6'>
                                </div>
                                <div className='col-6 my-3'>
                                    <button className='btn btn-outline-info btn-round' onClick={handleSubmit(handleUpdate)}>{isSubmitting ? "Updating..." : "Update"}</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default EditCategory