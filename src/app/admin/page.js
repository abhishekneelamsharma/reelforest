"use client"

import React, { useEffect, useState } from 'react'
import { Chart as ChartJS, ArcElement, Legend, Tooltip as ToolTipChart } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { Area, XAxis, YAxis, Tooltip, ResponsiveContainer, Line, Bar, } from 'recharts';

import dynamic from 'next/dynamic';
import Loader from '@/_components/global/Loader';
import axios from 'axios';
const AreaChart = dynamic(() => import('recharts').then((mod) => mod.AreaChart), { ssr: false });
const LineChart = dynamic(() => import('recharts').then((mod) => mod.LineChart), { ssr: false });
const BarChart = dynamic(() => import('recharts').then((mod) => mod.BarChart), { ssr: false });





export const options1 = {
    plugins: {
        legend: {
            display: false,
        },
    },
};



const data3 = [
    {
        name: 'Page A',
        uv: 1000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Page D',
        uv: 4000,
        pv: 3508,
        amt: 2000,
    },
    {
        name: 'Page E',
        uv: 3000,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];



const page = () => {
    ChartJS.register(ArcElement, Legend, ToolTipChart);

    const [loading, setLoading] = useState(true);
    const [mainData, setMainData] = useState();
    const [active, setActive] = useState("day");
    const [orderData, setOrderData] = useState();

    const getMainData = async () => {
        try {
            const res = await axios.get("/api/admin/analytics/maindata");
            console.log(res.data);
            setMainData(res.data.data)
            setLoading(false)
        } catch (err) {
            console.log(err);
        }
    }

    const getOrderAsPerTime = async () => {
        try {
            const res = await axios.post("/api/admin/analytics/order-time-period", {
                time_period: active
            });
            setOrderData(res.data.data);
        } catch (err) {
            console.log(err);
        }
    }

    const data1 = {
        labels: ['Total order', 'Pending order', 'Completed order'],
        datasets: [
            {
                data: [orderData?.totalOrder, orderData?.completedOrder, orderData?.pendingOrder],
                backgroundColor: [
                    'rgba(54, 162, 235)',
                    'rgba(153, 102, 255)',
                    '#82ca9d'
                ],
                borderColor: [
                    'rgba(54, 162, 235, 1)',
                    'rgba(153, 102, 255, 1)',
                    '#82ca9d'
                ],
                hoverOffset: 10,
                cutout: "62%",
                radius: "80%"
            },
        ],
    };

    const data2 = [
        {
            "name": "Page A",
            "uv": 4000,
            "pv": 2400,
            "amt": 2400
        },
        {
            "name": "Page B",
            "uv": 3000,
            "pv": 1398,
            "amt": 2210
        },
        {
            "name": "Page C",
            "uv": 2000,
            "pv": 9800,
            "amt": 2290
        },
        {
            "name": "Page D",
            "uv": 2780,
            "pv": 3908,
            "amt": 2000
        },
        {
            "name": "Page E",
            "uv": 1890,
            "pv": 4800,
            "amt": 2181
        },
        {
            "name": "Page F",
            "uv": 2390,
            "pv": 3800,
            "amt": 2500
        },
        {
            "name": "Page G",
            "uv": 3490,
            "pv": 4300,
            "amt": 2100
        }
    
    ]

    useEffect(() => {
        if (active) {
            getOrderAsPerTime();
        }
    }, [active])

    // useEffect(() => {
    //     setTimeout(() => {
    //         setLoading(false);
    //     }, 700)
    // }, [])

    useEffect(() => {
        getMainData();
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
                            <h1 style={{ color: "#17a2b8" }}>Dashboard</h1>
                            {/* <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="#">Oculux</a></li>
                                    <li className="breadcrumb-item"><a href="#">My page</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Web Analytics</li>
                                </ol>
                            </nav> */}
                        </div>
                        {/* <div className="col-md-6 col-sm-12 text-right hidden-xs">
                            <a className="p-1 text-green mr-3" href="#"><i className="fa fa-save mr-1"></i> Save Report</a>
                            <a className="p-1 text-red mr-3" href="#"><i className="fa fa-file-pdf-o mr-1"></i> Export to
                                PDF</a>
                            <a className="p-1 text-blue" href="#"><i className="fa fa-envelope mr-1"></i>Send to Email</a>
                        </div> */}
                    </div>
                </div>
                <div className="row clearfix">
                    <div className="col-lg-3 col-md-6">
                        <div className="card">
                            <div className="body w_summary">
                                <div className="s_chart">

                                    <BarChart width={50} height={50} data={data3}>
                                        <Bar dataKey="uv" fill="rgba(54, 162, 235, 1)" />
                                    </BarChart>
                                </div>
                                <div className="s_detail">
                                    {/* <h4 className="mb-0">{mainData?.totalOrder}</h4> */}
                                    <h4 className="font-30 font-weight-bold text-col-blue mb-0">{mainData?.totalOrder}</h4>
                                    <span>Total Order</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="card">
                            <div className="body w_summary">
                                <div className="s_chart">
                                    <LineChart width={50} height={50} data={data3}>
                                        <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} dot={false} />
                                    </LineChart>
                                </div>
                                <div className="s_detail">
                                    {/* <h4 className="mb-0">{mainData?.completedOrders}</h4> */}
                                    <h4 className="font-30 font-weight-bold text-col-blue mb-0">{mainData?.completedOrders}</h4>
                                    <span>Completed Order</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="card">
                            <div className="body w_summary">
                                <div className="s_chart">

                                    <BarChart width={50} height={50} data={data3}>
                                        <Bar dataKey="uv" fill="rgba(54, 162, 235, 1)" />
                                    </BarChart>
                                </div>
                                <div className="s_detail">
                                    {/* <h4 className="mb-0" >{mainData?.processOrder}</h4> */}
                                    <h4 className="font-30 font-weight-bold text-col-blue mb-0">{mainData?.processOrder}</h4>
                                    <span>Pending Order</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="card">
                            <div className="body w_summary">
                                <div className="s_chart">
                                    <LineChart width={50} height={50} data={data3}>
                                        <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} dot={false} />
                                    </LineChart>
                                </div>
                                <div className="s_detail">
                                    <h4 className="font-30 font-weight-bold text-col-blue mb-0">{mainData?.totalCategory}</h4>
                                    <span>Categories</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row clearfix">
                    <div className="col-sm-12">
                        <div className="card">
                            <div className="body">
                                <div className="d-flex justify-content-between align-items-center">
                                    <div>
                                        <h6 className="mb-0">Orders</h6>
                                    </div>
                                    <ul className="nav nav-tabs2">
                                        <li className="nav-item" onClick={() => setActive("day")}><a className={`nav-link ${active == "day" ? "active show" : ""}`} data-toggle="tab"
                                            href="#">Today</a></li>
                                        <li className="nav-item" onClick={() => setActive("month")}><a className={`nav-link ${active == "month" ? "active show" : ""}`} data-toggle="tab"
                                            href="#">Month</a></li>
                                        <li className="nav-item" onClick={() => setActive("year")}><a className={`nav-link ${active == "year" ? "active show" : ""}`} data-toggle="tab"
                                            href="#">Year</a></li>
                                    </ul>
                                </div>
                                <div className="row clearfix">
                                    <div className="col-lg-4 col-md-12 col-sm-12">
                                        {/* <small>Audience It is a long established fact that a reader will be
                                            distracted</small> */}
                                        <div className="d-flex justify-content-sm-start justify-content-md-center mt-4">
                                            <div className="mr-5" style={{ marginTop: "-10px" }}>
                                                <label className="mb-0">Total </label>
                                                <h4 className='text-center'>{orderData?.totalOrder}</h4>
                                            </div>
                                            <div className="mr-5" style={{ marginTop: "-10px" }}>
                                                <label className="mb-0">Complete </label>
                                                <h4 className='text-center'>{orderData?.completedOrder}</h4>
                                            </div>
                                            <div style={{ marginTop: "-10px" }}>
                                                <label className="mb-0">Pending</label>
                                                <h4 className='text-center'>{orderData?.pendingOrder}</h4>
                                            </div>
                                        </div>
                                        <div id="chart-donut d-flex justify-content-center" style={{
                                            height: "250px",
                                            display: "flex",
                                            justifyContent: "center"
                                        }}>
                                            <Doughnut data={data1} options={options1} />
                                        </div>
                                    </div>
                                    <div className="col-lg-8 col-md-12 col-sm-12">
                                        <div id="flotChart" className="flot-chart">
                                            <ResponsiveContainer>
                                                <AreaChart data={data2}
                                                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                                                    <defs>
                                                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                                            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                                                            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                                                        </linearGradient>
                                                        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                                                            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                                                            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                                                        </linearGradient>
                                                    </defs>
                                                    <XAxis dataKey="name" />
                                                    <YAxis />
                                                    {/* <CartesianGrid strokeDasharray="1 1" /> */}
                                                    <Tooltip />
                                                    <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                                                    <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                                                </AreaChart>
                                            </ResponsiveContainer>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row clearfix">
                    <div className="col-lg-8 col-md-12">
                        <div className="table-responsive">
                            <table className="table table-hover table-custom spacing5">
                                <thead>
                                    <tr>
                                        <th style={{ width: "20px" }}>#</th>
                                        <th>Creator Info</th>
                                        <th style={{ width: "50px" }}>Followers</th>
                                        <th style={{ width: "50px" }}>Followings</th>
                                        <th style={{ width: "110px" }}>Engagement</th>
                                        <th style={{ width: "110px" }} className='text-center'>Posts</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {
                                        mainData?.creatorData?.map((ele, ind) =>
                                            <tr key={ind}>
                                                <td>
                                                    <span>{ind + 1}</span>
                                                </td>
                                                <td className='text-center'><div className="user-account m-0  influencer">
                                                    <label htmlFor="influencer_2" style={{ border: "none" }} className="w-100 d-flex justify-content-between ">
                                                        <div className='d-flex'>
                                                            <div className="" style={{ borderRadius: "50px", margin: "5px" }}>
                                                                <img src={`/uploads/${ele.profile_image}`} className="user-photo" alt="Profile pic" width={"40px"} height={"40px"} style={{ borderRadius: "50px", objectFit: "cover" }} />
                                                            </div>
                                                            <div className='d-flex flex-column align-items-start justify-content-center'>
                                                                <span className='mb-0' style={{ color: "white" }}><em>@</em><a href={ele.profile_link} style={{ color: "white", textDecoration: "underline" }} target='_blank'>{ele.username}</a></span>
                                                                <span className='mb-0' style={{ fontSize: "13px" }}>{ele.fullname.toUpperCase()}</span>
                                                            </div>
                                                        </div>
                                                    </label>
                                                </div>
                                                </td>
                                                <td className='text-center'>{ele.followers?.toUpperCase()}</td>
                                                <td className='text-center'>{ele.followings?.toUpperCase()}</td>
                                                <td className='text-center'>{ele.engagement?.toUpperCase()}</td>
                                                <td className='text-center'>{ele.posts?.toUpperCase()}</td>
                                            
                                            </tr>)
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12 mt-1">
                        <div className="card">
                            {/* <div className="header">
                            <h2>Users</h2>
                        </div> */}
                            <div className="body">
                                <div className="row text-center">
                                    <div className="col-6 border-right pb-4 pt-4">
                                        <label className="mb-0">Total Users</label>
                                        <h4 className="font-30 font-weight-bold text-col-blue">{mainData?.totalUser}</h4>
                                    </div>
                                    <div className="col-6 pb-4 pt-4">
                                        <label className="mb-0">Total Creators</label>
                                        <h4 className="font-30 font-weight-bold text-col-blue">{mainData?.totalCreator}</h4>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default page