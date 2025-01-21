"use client"

import axios from 'axios';
import React, { useEffect, useState } from 'react'
import * as motion from "motion/react-client"
import Link from 'next/link';
import toast from 'react-hot-toast';
import { useSession } from 'next-auth/react';
import Loader from '@/_components/global/Loader';


const NewOrder = () => {
    const [categoryId, setCategoryId] = useState();
    const [categoryData, setCategoryData] = useState()
    const [activeCategory, setActiveCategory] = useState();
    const [minNoOfCreators, setMinNoOfCreators] = useState(0);
    const [creatorData, setCreatorData] = useState();
    const [creatorAllData, setCreatorAllData] = useState();
    const [selectedCreator, setSelectedCreator] = useState([]);
    const [cartData, setCartData] = useState();
    const [amount, setAmount] = useState(0);
    const [cartLoading, setCartLoading] = useState(false);
    const [selectedNumberOfCretor, setSelectedNumberOfCretor] = useState(minNoOfCreators);
    const [audioLink, setAudioLink] = useState("");
    const [finalSubmitLoading, setFinalSubmitLoading] = useState(false);
    const [charges, setCharges] = useState();
    const [walletData, setWalletData] = useState();
    const [totalData, setTotalData] = useState({
        sub_total: 0,
        total_no_of_creator: 0,
        plateform_charges: 0,
        service_charges: 0,
        total_amount: 0
    });

    const session = useSession();
    const language = session?.data?.user?.language
    const user_id = session?.data?.user?.user_id


    const getWalletData = async () => {
        try {
            const res = await axios.post("/api/user/get_user_info", {
                user_id: user_id
            })
            setWalletData(res.data.data.walletAmount);
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

    const handleCategoryId = (ind, id, min_no_of_creators, amount) => {
        setCategoryId(id);
        setActiveCategory(ind + 1);
        setMinNoOfCreators(min_no_of_creators);
        setSelectedNumberOfCretor(min_no_of_creators)
        setSelectedCreator([])
        setAmount(amount)
    }

    const getCreatorData = async () => {
        try {
            const res = await axios.post("/api/creator/get_active_creator_by_category", {
                category_id: categoryId,
                language: language
            })
            console.log(res.data)
            setCreatorData(res.data.data);
            setCreatorAllData(res.data.data);
        } catch (err) {
            console.log(err);
        }
    }

    const handleSelectCreator = (e) => {
        const creator = e.target.value;
        if (!selectedCreator.includes(creator)) {
            setSelectedCreator((prev) => [...prev, creator]);
        } else {

            setSelectedCreator((prev) => prev.filter((item) => item != creator));
        }

    }

    const getCartData = async () => {
        try {
            const res = await axios.post("/api/cart/get_cart_data", {
                user_id: "677e0f727dda11ef3bdf8110"
            })
            setCartData(res.data.data);
        } catch (err) {
            console.log(err);
        }
    }

    const handleSearchCreator = (e) => {
        if (e.target.value == '') {
            setCreatorData(creatorAllData)
            return;
        }
        const filteredData = creatorAllData.filter((ele) =>
            ele.username.toLowerCase().includes(e.target.value.toLowerCase()) || ele.fullname.toLowerCase().includes(e.target.value.toLowerCase())
        )
        setCreatorData(filteredData);
    }

    const addtoKart = async () => {
        try {

            if (activeCategory == 1 || activeCategory == 2 || activeCategory == 5) {
                if (selectedCreator?.length < minNoOfCreators) {
                    toast.error(`Minimum ${minNoOfCreators} creators are required!`, {
                        style: {
                            borderRadius: '10px',
                            background: '#333',
                            color: '#fff',
                        },
                    })
                    return;
                }
            }
            if (activeCategory == 3 || activeCategory == 4) {
                if (selectedNumberOfCretor < minNoOfCreators) {
                    toast.error(`Minimum ${minNoOfCreators} creators are required!`, {
                        style: {
                            borderRadius: '10px',
                            background: '#333',
                            color: '#fff',
                        },
                    })
                    return;
                }
            }

            setCartLoading(true)
            const res = await axios.post("/api/cart/add_to_cart", {
                user_id: "677e0f727dda11ef3bdf8110",
                item: {
                    category_id: categoryId,
                    Creators: selectedCreator?.length == 0 ? null : selectedCreator,
                    number_of_creators: selectedCreator?.length == 0 ? selectedNumberOfCretor : selectedCreator?.length,
                    amount: amount
                }
            })
            setCartLoading(false)
            if (res.data.status == 1) {
                toast.success(res.data.message, {
                    style: {
                        borderRadius: '10px',
                        background: '#333',
                        color: '#fff',
                    },
                })
                getCartData();
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
            setCartLoading(false)
            console.log(err);
        }
    }

    const getTotalData = () => {
        let sub_total = 0;
        let total_no_of_creator = 0
        let service_charges = 0
        let total_amount = 0

        cartData?.item?.forEach((ele) => {
            sub_total = sub_total + ele.amount
            total_no_of_creator = total_no_of_creator + ele.number_of_creators
        })

        service_charges = (sub_total * charges?.service_charges) / 100;
        total_amount = sub_total + charges?.plateform_charges + service_charges

        setTotalData({
            sub_total: sub_total,
            total_no_of_creator: total_no_of_creator,
            plateform_charges: charges?.plateform_charges,
            service_charges: service_charges,
            total_amount: total_amount
        })

    }

    const getCharges = async () => {
        try {
            const res = await axios.get("/api/charges/get_charges");
            setCharges(res.data.data);
        } catch (err) {
            console.log(err);
        }
    }

    const finalSubmit = async () => {
        if (!cartData) {
            toast.error(`Add the at least one item!`, {
                style: {
                    borderRadius: '10px',
                    background: '#333',
                    color: '#fff',
                },
            })
            return;
        }
        if (!audioLink) {
            toast.error(`Audio link is required!`, {
                style: {
                    borderRadius: '10px',
                    background: '#333',
                    color: '#fff',
                },
            })
            return;
        }
        if (walletData < totalData?.total_amount) {
            toast.error(`Insufficient funds! Please add funds to continue.`, {
                style: {
                    borderRadius: '10px',
                    background: '#333',
                    color: '#fff',
                },
            })
            return;
        }

        setFinalSubmitLoading(true);
        const res = await axios.post("/api/order/place_order", {
            user_id: user_id,
            cart_id: cartData._id,
            audio_link: audioLink,
            total_no_of_creators: totalData.total_no_of_creator,
            total_amount: totalData.total_amount
        });
        setFinalSubmitLoading(false);
        if (res.data.status == 1) {
            toast.success(res.data.message, {
                style: {
                    borderRadius: '10px',
                    background: '#333',
                    color: '#fff',
                },
            })
            window.location.reload();
            getCartData();
            setActiveCategory("");
            setTotalData({
                sub_total: 0,
                total_no_of_creator: 0,
                plateform_charges: 0,
                service_charges: 0,
                total_amount: 0
            })
        } else {
            toast.error(res.data.message, {
                style: {
                    borderRadius: '10px',
                    background: '#333',
                    color: '#fff',
                },
            })
        }

    }


    useEffect(() => {
        if (categoryId) {
            getCreatorData();
        }
    }, [categoryId])

    useEffect(() => {
        getCategoryData();
        getCartData();
        getCharges()
    }, [])

    useEffect(() => {
        if (user_id) {
            getWalletData()
        }
    }, [user_id])

    useEffect(() => {
        if (cartData) {
            getTotalData();
        }
    }, [cartData])

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
                            <h1 style={{ color: "#17a2b8" }}>Welcome / New order</h1>
                        </div>
                    </div>
                </div>
                <div className="row clearfix mt-5">
                    <div className="col-lg-3 col-md-6">
                        <div className="card">
                            <div className="body">
                                <div className="d-flex align-items-center">
                                    <div className="icon-in-bg bg-indigo text-white rounded-circle"><i
                                        className="fa fa-briefcase"></i></div>
                                    <div className="ml-4">
                                        <span>sources perivate</span>
                                        <h4 className="mb-0 font-weight-medium">4897</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="card">
                            <div className="body">
                                <div className="d-flex align-items-center">
                                    <div className="icon-in-bg bg-azura text-white rounded-circle"><i
                                        className="fa fa-credit-card"></i></div>
                                    <div className="ml-4">
                                        <span>Spent balance</span>
                                        <h4 className="mb-0 font-weight-medium">$0</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="card">
                            <div className="body">
                                <div className="d-flex align-items-center">
                                    <div className="icon-in-bg bg-orange text-white rounded-circle"><i
                                        className="fa fa-users"></i></div>
                                    <div className="ml-4">
                                        <span>Panel orders</span>
                                        <h4 className="mb-0 font-weight-medium">5,805</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="card">
                            <div className="body">
                                <div className="d-flex align-items-center">
                                    <div className="icon-in-bg bg-pink text-white rounded-circle"><i
                                        className="fa fa-life-ring"></i></div>
                                    <div className="ml-4">
                                        <span>Bounce rate</span>
                                        <h4 className="mb-0 font-weight-medium">13,651</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="card ">
                    <div className="body">
                        <div className='row'>
                            <div className='col-12 col-lg-8'>
                                <div className='p-3'>
                                    <div className='d-flex justify-content-between'>
                                        <h6 className='my-2'>Select Category</h6>

                                    </div>
                                    <div className="d-flex flex-column flex-sm-row" style={{ gap: "5px" }}>
                                        {
                                            categoryData?.map((ele, ind) =>
                                                <button type="button" className={`btn btn-round ${(activeCategory == ind + 1) ? "btn-info" : "btn-outline-info"}`}
                                                    data-target="#exampleModalCenter" style={{ width: "110px" }} onClick={() => handleCategoryId(ind, ele._id, ele.min_no_of_creators, ele.amount)} key={ind}>{ele.category_name?.split(" ")[0]} </button>)
                                        }
                                    </div>


                                    {
                                        activeCategory == 1 && (
                                            <>
                                                <motion.div
                                                    initial={{ y: 200 }}
                                                    animate={{ y: 0 }}
                                                    transition={{ duration: 0.3, ease: "linear" }}>
                                                    <div className='d-flex justify-content-between'>
                                                        <h6 className='my-2'>Select Creator</h6>
                                                        <span className='mb-0 my-auto' style={{ fontSize: "12px" }}>Minimum number of creators - {minNoOfCreators}</span>
                                                    </div>
                                                    <div className="input-group mb-3">
                                                        <input type="text" className="form-control" placeholder='Search creator' onChange={handleSearchCreator} />
                                                        <div className="input-group-append">
                                                            <span className="input-group-text">
                                                                <i className="fa-solid fa-magnifying-glass"></i>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className='influencer-container pr-4 my-2' style={{ maxHeight: "400px", overflowY: "scroll" }}>

                                                        {
                                                            creatorData?.length > 0 ? (
                                                                creatorData?.map((ele, ind) =>
                                                                    <div className="user-account m-0  influencer" key={ind}>
                                                                        <label htmlFor={`influencer_${ind}`} className="w-100 d-flex justify-content-between ">
                                                                            <div className='d-flex'>
                                                                                <div className="" style={{ borderRadius: "50px", margin: "auto 5px" }}>
                                                                                    <img src={`/uploads/${ele.profile_image}`} className="user-photo" alt="User Profile Picture" width={"40px"} height={"40px"} style={{ borderRadius: "50px", objectFit: "cover" }} />
                                                                                </div>
                                                                                <div className='d-flex flex-column'>
                                                                                    <span className='mb-0' style={{ color: "white" }}>@<Link href={ele.profile_link} style={{ color: "white", textDecoration: "underline" }}>{ele.username}</Link></span>
                                                                                    <span className='mb-0' style={{ fontSize: "12px" }}>{ele.fullname} </span>
                                                                                </div>
                                                                            </div>
                                                                            <div className='d-flex justify-content-around w-75 align-items-center'>
                                                                                <div className='d-none d-md-flex flex-column text-center'>
                                                                                    <span className='mb-0'><strong>{ele.posts.toUpperCase()}</strong></span>
                                                                                    <span className='mb-0' style={{ fontSize: "14px" }}>Posts</span>
                                                                                </div>
                                                                                <div className='d-flex flex-column text-center'>
                                                                                    <span className='mb-0'><strong>{ele.followers.toUpperCase()}</strong></span>
                                                                                    <span className='mb-0' style={{ fontSize: "14px" }}>Followers</span>
                                                                                </div>
                                                                                <div className='d-none d-md-flex flex-column text-center'>
                                                                                    <span className='mb-0'><strong>{ele.followings.toUpperCase()}</strong></span>
                                                                                    <span className='mb-0' style={{ fontSize: "14px" }}>Following</span>
                                                                                </div>
                                                                                <div className='d-none d-md-flex flex-column text-center'>
                                                                                    <span className='mb-0'><strong>{ele.engagement.toUpperCase()}</strong></span>
                                                                                    <span className='mb-0' style={{ fontSize: "14px" }}>Engagements</span>
                                                                                </div>
                                                                                <div className='d-none d-md-flex flex-column text-center'>
                                                                                    <span className='mb-0'><strong>{ele.views.toUpperCase()}</strong></span>
                                                                                    <span className='mb-0' style={{ fontSize: "14px" }}>Views </span>
                                                                                </div>
                                                                            </div>
                                                                            <div className='mr-2 my-auto'>
                                                                                <input type="checkbox" id={`influencer_${ind}`} value={ele._id} onChange={handleSelectCreator} />
                                                                                <div className='influencer-overlay'></div>
                                                                            </div>
                                                                        </label>
                                                                    </div>)
                                                            ) : (
                                                                <div>
                                                                    No creator found !
                                                                </div>
                                                            )
                                                        }

                                                    </div>
                                                    <h6 className='my-2 mt-4'>Number of creators</h6>
                                                    <div className="input-group mb-3">
                                                        <input type="text" min={0} className="form-control pe-none" placeholder="number of creator" defaultValue={selectedCreator.length || 0} key={selectedCreator.length} style={{ pointerEvents: "none" }} />
                                                    </div>

                                                    <h6 className='my-2'>Amount</h6>
                                                    <div className="input-group mb-3">
                                                        <input type="text" className="form-control" placeholder="Amount" aria-label="Username"
                                                            aria-describedby="basic-addon1" defaultValue={amount || 0} style={{ pointerEvents: "none" }} />
                                                    </div>
                                                    <div className='mt-4'>
                                                        <button className='btn btn-outline-info btn-round ' onClick={addtoKart} disabled={cartLoading}>{cartLoading ? "Loading..." : "Save & Continue"}</button>
                                                    </div>
                                                </motion.div>
                                            </>
                                        )
                                    }

                                    {
                                        activeCategory == 2 && (
                                            <motion.div
                                                initial={{ y: 200 }}
                                                animate={{ y: 0 }}
                                                transition={{ duration: 0.3, ease: "linear" }}>
                                                <div className='d-flex justify-content-between'>
                                                    <h6 className='my-2'>Select Creator</h6>
                                                    <span className='mb-0 my-auto' style={{ fontSize: "12px" }}>Minimum number of creators - {minNoOfCreators}</span>
                                                </div>
                                                <div className="input-group mb-3">
                                                    <input type="text" className="form-control" placeholder='Search creator' onChange={handleSearchCreator} />
                                                    <div className="input-group-append">
                                                        <span className="input-group-text">
                                                            <i className="fa-solid fa-magnifying-glass"></i>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className='influencer-container pr-4 my-2' style={{ maxHeight: "400px", overflowY: "scroll" }}>

                                                    {
                                                        creatorData?.length > 0 ? (
                                                            creatorData?.map((ele, ind) =>
                                                                <div className="user-account m-0  influencer" key={ind}>
                                                                    <label htmlFor={`influencer_${ind}`} className="w-100 d-flex justify-content-between ">
                                                                        <div className='d-flex'>
                                                                            <div className="" style={{ borderRadius: "50px", margin: "auto 5px" }}>
                                                                                <img src={`/uploads/${ele.profile_image}`} className="user-photo" alt="User Profile Picture" width={"40px"} height={"40px"} style={{ borderRadius: "50px", objectFit: "cover" }} />
                                                                            </div>
                                                                            <div className='d-flex flex-column'>
                                                                                <span className='mb-0' style={{ color: "white" }}>@<Link href={ele.profile_link} style={{ color: "white", textDecoration: "underline" }}>{ele.username}</Link></span>
                                                                                <span className='mb-0' style={{ fontSize: "12px" }}>{ele.fullname} </span>
                                                                            </div>
                                                                        </div>
                                                                        <div className='d-flex justify-content-around w-75 align-items-center'>
                                                                            <div className='d-none d-md-flex flex-column text-center'>
                                                                                <span className='mb-0'><strong>{ele.posts.toUpperCase()}</strong></span>
                                                                                <span className='mb-0' style={{ fontSize: "14px" }}>Posts</span>
                                                                            </div>
                                                                            <div className='d-flex flex-column text-center'>
                                                                                <span className='mb-0'><strong>{ele.followers.toUpperCase()}</strong></span>
                                                                                <span className='mb-0' style={{ fontSize: "14px" }}>Followers</span>
                                                                            </div>
                                                                            <div className='d-none d-md-flex flex-column text-center'>
                                                                                <span className='mb-0'><strong>{ele.followings.toUpperCase()}</strong></span>
                                                                                <span className='mb-0' style={{ fontSize: "14px" }}>Following</span>
                                                                            </div>
                                                                            <div className='d-none d-md-flex flex-column text-center'>
                                                                                <span className='mb-0'><strong>{ele.engagement.toUpperCase()}</strong></span>
                                                                                <span className='mb-0' style={{ fontSize: "14px" }}>Engagements</span>
                                                                            </div>
                                                                            <div className='d-none d-md-flex flex-column text-center'>
                                                                                <span className='mb-0'><strong>{ele.views.toUpperCase()}</strong></span>
                                                                                <span className='mb-0' style={{ fontSize: "14px" }}>Views </span>
                                                                            </div>
                                                                        </div>
                                                                        <div className='mr-2 my-auto'>
                                                                            <input type="checkbox" id={`influencer_${ind}`} value={ele._id} onChange={handleSelectCreator} />
                                                                            <div className='influencer-overlay'></div>
                                                                        </div>
                                                                    </label>
                                                                </div>)
                                                        ) : (
                                                            <div>
                                                                No creator found !
                                                            </div>
                                                        )
                                                    }

                                                </div>
                                                <h6 className='my-2 mt-4'>Number of creators</h6>
                                                <div className="input-group mb-3">
                                                    <input type="text" min={0} className="form-control pe-none" placeholder="number of creator" defaultValue={selectedCreator?.length || 0} key={selectedCreator.length} style={{ pointerEvents: "none" }} />
                                                </div>

                                                <h6 className='my-2'>Amount</h6>
                                                <div className="input-group mb-3">
                                                    <input type="text" className="form-control" placeholder="Amount" aria-label="Username"
                                                        aria-describedby="basic-addon1" defaultValue={amount || 0} style={{ pointerEvents: "none" }} />
                                                </div>
                                                <div className='mt-4'>
                                                    <button className='btn btn-outline-info btn-round ' onClick={addtoKart} disabled={cartLoading}>{cartLoading ? "Loading..." : "Save & Continue"}</button>
                                                </div>
                                            </motion.div>
                                        )
                                    }

                                    {
                                        activeCategory == 3 && (
                                            <>
                                                <motion.div
                                                    initial={{ y: 200 }}
                                                    animate={{ y: 0 }}
                                                    transition={{ duration: 0.3, ease: "linear" }}>

                                                    <div className='d-flex justify-content-between my-1 mt-2'>
                                                        <h6 className=''>Number of Creator</h6>
                                                        <span className='mb-0 my-auto' style={{ fontSize: "12px" }}>Min number of creators - {minNoOfCreators}</span>
                                                    </div>
                                                    <div className="input-group mb-3">
                                                        <input type="number" min={100} className="form-control" placeholder="number of creator" defaultValue={selectedNumberOfCretor || 0}
                                                            onChange={(e) => setSelectedNumberOfCretor(e.target.value)} />
                                                    </div>

                                                    <h6 className='my-2'>Amount</h6>
                                                    <div className="input-group mb-3">
                                                        <input type="text" className="form-control" placeholder="Amount" defaultValue={amount || 0}
                                                            style={{ pointerEvents: 'none' }} />
                                                    </div>
                                                    <div className='mt-4'>
                                                        <button className='btn btn-outline-info btn-round ' onClick={addtoKart} disabled={cartLoading}>{cartLoading ? "Loading..." : "Save & Continue"}</button>
                                                    </div>
                                                </motion.div>
                                            </>
                                        )
                                    }

                                    {
                                        activeCategory == 4 && (
                                            <>
                                                <motion.div
                                                    initial={{ y: 200 }}
                                                    animate={{ y: 0 }}
                                                    transition={{ duration: 0.3, ease: "linear" }}>
                                                    <div className='d-flex justify-content-between my-1 mt-2'>
                                                        <h6 className=''>Number of Creator</h6>
                                                        <span className='mb-0 my-auto' style={{ fontSize: "12px" }}>Min number of creators - {minNoOfCreators}</span>
                                                    </div>
                                                    <div className="input-group mb-3">
                                                        <input type="number" min={1000} className="form-control" placeholder="number of creator" defaultValue={selectedNumberOfCretor || 0} onChange={(e) => setSelectedNumberOfCretor(e.target.value)} />
                                                    </div>

                                                    <h6 className='my-2'>Amount</h6>
                                                    <div className="input-group mb-3">
                                                        <input type="text" className="form-control" placeholder="Amount" defaultValue={amount || 0} style={{ pointerEvents: "none" }} onChange={() => setSelectedNumberOfCretor(e.target.value)} />
                                                    </div>
                                                    <div className='mt-4'>
                                                        <button className='btn btn-outline-info btn-round ' onClick={addtoKart} disabled={cartLoading}>{cartLoading ? "Loading..." : "Save & Continue"}</button>
                                                    </div>
                                                </motion.div>
                                            </>
                                        )
                                    }

                                    {
                                        activeCategory == 5 && (
                                            <>
                                                <motion.div
                                                    initial={{ y: 200 }}
                                                    animate={{ y: 0 }}
                                                    transition={{ duration: 0.3, ease: "linear" }}>

                                                    <div className='d-flex justify-content-between'>
                                                        <h6 className='my-2'>Select Page </h6>
                                                        <span className='mb-0 my-auto' style={{ fontSize: "12px" }}>Min number of creators - {minNoOfCreators}</span>
                                                    </div>
                                                    <div className='input-group mb-3'>
                                                        <select className="custom-select" >
                                                            <option defaultChecked hidden>Select Page </option>
                                                            <option value="3">Meme Creator</option>
                                                            <option value="1">Fan Creator</option>
                                                            <option value="2">Fitness Creator</option>
                                                            <option value="4">Car Creator</option>
                                                            <option value="5">Celebrity page</option>
                                                            <option value="6">Lyrical Page </option>

                                                        </select>
                                                    </div>
                                                    <h6 className='my-2'>Select Creator</h6>
                                                    <div className="input-group mb-3">
                                                        <input type="text" className="form-control" placeholder='Search creator' />
                                                        <div className="input-group-append">
                                                            <span className="input-group-text">
                                                                <i className="fa-solid fa-magnifying-glass"></i>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className='influencer-container pr-4 my-2' style={{ maxHeight: "400px", overflowY: "scroll" }}>
                                                        <div className="user-account m-0  influencer">
                                                            <label htmlFor="influencer_1" className="w-100 d-flex justify-content-between ">
                                                                <div className='d-flex'>
                                                                    <div className="" style={{ borderRadius: "50px", margin: "5px" }}>
                                                                        <img src="../assets/images/user.png" className="user-photo" alt="User Profile Picture" width={"40px"} style={{ borderRadius: "50px" }} />
                                                                    </div>
                                                                    <div className='d-flex flex-column'>
                                                                        <span className='mb-0' style={{ color: "white" }}>@carryminati</span>
                                                                        <span className='mb-0'>Ajay Nagar </span>
                                                                    </div>
                                                                </div>
                                                                <div className='d-flex justify-content-around w-100 align-items-center'>
                                                                    <div className='d-none d-md-flex flex-column text-center'>
                                                                        <span className='mb-0'><strong>700</strong></span>
                                                                        <span className='mb-0' style={{ fontSize: "14px" }}>Posts</span>
                                                                    </div>
                                                                    <div className='d-flex flex-column text-center'>
                                                                        <span className='mb-0'><strong>27.3K</strong></span>
                                                                        <span className='mb-0' style={{ fontSize: "14px" }}>Followers</span>
                                                                    </div>
                                                                    <div className='d-none d-md-flex flex-column text-center'>
                                                                        <span className='mb-0'><strong>700</strong></span>
                                                                        <span className='mb-0' style={{ fontSize: "14px" }}>Following</span>
                                                                    </div>
                                                                </div>
                                                                <div className='mr-2 my-auto'>
                                                                    <input type="checkbox" id="influencer_1" />
                                                                    <div className='influencer-overlay'></div>
                                                                </div>
                                                            </label>
                                                        </div>

                                                        <div className="user-account m-0  influencer">
                                                            <label htmlFor="influencer_8" className="w-100 d-flex justify-content-between ">
                                                                <div className='d-flex'>
                                                                    <div className="" style={{ borderRadius: "50px", margin: "5px" }}>
                                                                        <img src="../assets/images/user.png" className="user-photo" alt="User Profile Picture" width={"40px"} style={{ borderRadius: "50px" }} />
                                                                    </div>
                                                                    <div className='d-flex flex-column'>
                                                                        <span className='mb-0' style={{ color: "white" }}>@carryminati</span>
                                                                        <span className='mb-0'>Ajay Nagar </span>
                                                                    </div>
                                                                </div>
                                                                <div className='d-flex justify-content-around w-100 align-items-center'>
                                                                    <div className='d-none d-md-flex flex-column text-center'>
                                                                        <span className='mb-0'><strong>700</strong></span>
                                                                        <span className='mb-0' style={{ fontSize: "14px" }}>Posts</span>
                                                                    </div>
                                                                    <div className='d-flex flex-column text-center'>
                                                                        <span className='mb-0'><strong>27.3K</strong></span>
                                                                        <span className='mb-0' style={{ fontSize: "14px" }}>Followers</span>
                                                                    </div>
                                                                    <div className='d-none d-md-flex flex-column text-center'>
                                                                        <span className='mb-0'><strong>700</strong></span>
                                                                        <span className='mb-0' style={{ fontSize: "14px" }}>Following</span>
                                                                    </div>
                                                                </div>
                                                                <div className='mr-2 my-auto'>
                                                                    <input type="checkbox" id="influencer_8" />
                                                                    <div className='influencer-overlay'></div>
                                                                </div>
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <h6 className='my-2 mt-4'>Audio Link</h6>
                                                    <div className="input-group mb-3">
                                                        <input type="text" className="form-control" placeholder="Audio link" aria-label="Username"
                                                            aria-describedby="basic-addon1" />
                                                    </div>

                                                    <h6 className='my-2'>Amount</h6>
                                                    <div className="input-group mb-3">
                                                        <input type="text" className="form-control" placeholder="Amount" aria-label="Username"
                                                            aria-describedby="basic-addon1" />
                                                    </div>
                                                    <div className='mt-4'>
                                                        <button className='btn btn-outline-info btn-round '>Save & Continue</button>
                                                    </div>
                                                </motion.div>
                                            </>
                                        )
                                    }

                                </div>
                            </div>

                            {
                                activeCategory &&
                                <div className="col-12 col-lg-4 mt-5">

                                    {
                                        cartData?.item.map((ele, ind) =>
                                            <div className="card" style={{ border: "1px solid #393d42" }} key={ind}>
                                                <div className="body">
                                                    <div className="form-group">
                                                        <label className="d-block">Category <span className="float-right">{ele.category_name}</span></label>
                                                        <div className="progress progress-xxs">
                                                            <div className="progress-bar progress-bar-success" role="progressbar"
                                                                aria-valuenow="77" aria-valuemin="0" aria-valuemax="100"
                                                                style={{ width: "23%" }}></div>
                                                        </div>
                                                    </div>
                                                    <div className="form-group">
                                                        <label className="d-block">Number of creators<span className="float-right">{ele.number_of_creators}</span></label>
                                                        <div className="progress progress-xxs">
                                                            <div className="progress-bar progress-bar-warning" role="progressbar"
                                                                aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"
                                                                style={{ width: "43%" }}></div>
                                                        </div>
                                                    </div>
                                                    <div className="form-group">
                                                        <label className="d-block">Amount <span className="float-right">{ele.amount}</span></label>
                                                        <div className="progress progress-xxs">
                                                            <div className="progress-bar progress-bar-info" role="progressbar"
                                                                aria-valuenow="23" aria-valuemin="0" aria-valuemax="100"
                                                                style={{ width: "21%" }}></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>)
                                    }
                                    <h6 className='my-2 mt-4'>Audio Link</h6>
                                    <div className="input-group mb-3">
                                        <input type="text" className="form-control" placeholder="Audio link"
                                            value={audioLink} onChange={(e) => setAudioLink(e.target.value)} />
                                    </div>
                                    <h6 className='my-2 mt-4'>Total number of creators</h6>
                                    <div className="input-group mb-3">
                                        <input type="text" className="form-control" placeholder="total number of creators" defaultValue={totalData?.total_no_of_creator} key={totalData.total_no_of_creator}
                                            style={{
                                                pointerEvents: "none"
                                            }} />
                                    </div>
                                    <h6 className='my-2 mt-4'>Sub Total</h6>
                                    <div className="input-group mb-3">
                                        <input type="text" className="form-control" placeholder="total amount" defaultValue={totalData?.sub_total} key={totalData.sub_total} style={{
                                            pointerEvents: "none"
                                        }} />
                                    </div>
                                    <h6 className='my-2 mt-4'>Plateform Charges</h6>
                                    <div className="input-group mb-3">
                                        <input type="text" className="form-control" placeholder="total amount" defaultValue={totalData?.plateform_charges} key={totalData.plateform_charges} style={{
                                            pointerEvents: "none"
                                        }} />
                                    </div>
                                    <h6 className='my-2 mt-4'>Service Charges</h6>
                                    <div className="input-group mb-3">
                                        <input type="text" className="form-control" placeholder="total amount" defaultValue={totalData?.service_charges} key={totalData.service_charges} style={{
                                            pointerEvents: "none"
                                        }} />
                                    </div>
                                    <h6 className='my-2 mt-4'>Total Amount</h6>
                                    <div className="input-group mb-3">
                                        <input type="text" className="form-control" placeholder="total amount" defaultValue={totalData?.total_amount} key={totalData.total_amount} style={{
                                            pointerEvents: "none"
                                        }} />
                                    </div>
                                    <div className='d-flex justify-content-center'>
                                        <button className='btn btn-info btn-round mr-2' onClick={finalSubmit} disabled={finalSubmitLoading}> {finalSubmitLoading ? "Submitting..." : "Final Submit"}</button>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default NewOrder