import React from 'react'
import { Chart as ChartJS, ArcElement, Legend,Tooltip as ToolTipChart } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line, BarChart, Bar, } from 'recharts';


export const data1 = {
    labels: ['Total order', 'Process order','Completed order'],
    datasets: [
        {
            data: [9231, 10850,6850],
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

export const options1 = {
    plugins: {
        legend: {
            display: false,
        },
    },
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




const Home = () => {
    ChartJS.register(ArcElement, Legend,ToolTipChart);


    return (
        <div id="main-content">
            <div class="container-fluid">
                <div class="block-header">
                    <div class="row clearfix">
                        <div class="col-md-6 col-sm-12">
                            <h1 style={{color:"#17a2b8"}}>Dashboard</h1>
                            {/* <nav aria-label="breadcrumb">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item"><a href="#">Oculux</a></li>
                                    <li class="breadcrumb-item"><a href="#">My page</a></li>
                                    <li class="breadcrumb-item active" aria-current="page">Web Analytics</li>
                                </ol>
                            </nav> */}
                        </div>
                        <div class="col-md-6 col-sm-12 text-right hidden-xs">
                            <a class="p-1 text-green mr-3" href="#"><i class="fa fa-save mr-1"></i> Save Report</a>
                            <a class="p-1 text-red mr-3" href="#"><i class="fa fa-file-pdf-o mr-1"></i> Export to
                                PDF</a>
                            <a class="p-1 text-blue" href="#"><i class="fa fa-envelope mr-1"></i>Send to Email</a>
                        </div>
                    </div>
                </div>
                <div class="row clearfix">
                    <div class="col-lg-3 col-md-6">
                        <div class="card">
                            <div class="body w_summary">
                                <div class="s_chart">

                                    <BarChart width={50} height={50} data={data3}>
                                        <Bar dataKey="uv" fill="rgba(54, 162, 235, 1)" />
                                    </BarChart>
                                </div>
                                <div class="s_detail">
                                    <h4 class="mb-0">3,480</h4>
                                    <span>Total Order</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <div class="card">
                            <div class="body w_summary">
                                <div class="s_chart">
                                    <LineChart width={50} height={50} data={data3}>
                                        <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} dot={false} />
                                    </LineChart>
                                </div>
                                <div class="s_detail">
                                    <h4 class="mb-0">2,315</h4>
                                    <span>Complete Order</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <div class="card">
                            <div class="body w_summary">
                                <div class="s_chart">

                                    <BarChart width={50} height={50} data={data3}>
                                        <Bar dataKey="uv" fill="rgba(54, 162, 235, 1)" />
                                    </BarChart>
                                </div>
                                <div class="s_detail">
                                    <h4 class="mb-0">1,258</h4>
                                    <span>Process Order</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <div class="card">
                            <div class="body w_summary">
                                <div class="s_chart">
                                    <LineChart width={50} height={50} data={data3}>
                                        <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} dot={false} />
                                    </LineChart>
                                </div>
                                <div class="s_detail">
                                    <h4 class="mb-0">1025</h4>
                                    <span>Draft</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row clearfix">
                    <div class="col-sm-12">
                        <div class="card">
                            <div class="body">
                                <div class="d-flex justify-content-between align-items-center">
                                    <div>
                                        <h6 class="mb-0">Audience Metrics</h6>
                                    </div>
                                    <ul class="nav nav-tabs2">
                                        <li class="nav-item"><a class="nav-link active show" data-toggle="tab"
                                            href="#today">Today</a></li>
                                        <li class="nav-item"><a class="nav-link" data-toggle="tab"
                                            href="#t-week">Week</a></li>
                                        <li class="nav-item"><a class="nav-link" data-toggle="tab"
                                            href="#t-month">Month</a></li>
                                    </ul>
                                </div>
                                <div class="row clearfix">
                                    <div class="col-lg-4 col-md-12 col-sm-12">
                                        {/* <small>Audience It is a long established fact that a reader will be
                                            distracted</small> */}
                                        {/* <div class="d-flex justify-content-start mt-3">
                                            <div class="mr-5">
                                                <label class="mb-0">Users</label>
                                                <h4>9,231</h4>
                                            </div>
                                            <div class="mr-5">
                                                <label class="mb-0">Sessions</label>
                                                <h4>10,850</h4>
                                            </div>
                                            <div>
                                                <label class="mb-0">Orders</label>
                                                <h4>6850</h4>
                                            </div>
                                        </div> */}
                                        <div id="chart-donut d-flex justify-content-center" style={{ height: "300px" }}>
                                            <Doughnut data={data1} options={options1} />
                                        </div>
                                    </div>
                                    <div class="col-lg-8 col-md-12 col-sm-12">
                                        <div id="flotChart" class="flot-chart">

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

                <div class="row clearfix">
                    <div class="col-lg-8 col-md-12">
                        <div class="table-responsive">
                            <table class="table table-hover table-custom spacing5">
                                <thead>
                                    <tr>
                                        <th style={{ width: "20px" }}>#</th>
                                        <th>Client</th>
                                        <th style={{ width: "50px" }}>Amount</th>
                                        <th style={{ width: "50px" }}>Status</th>
                                        <th style={{ width: "110px" }}>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <span>01</span>
                                        </td>
                                        <td>
                                            <div class="d-flex align-items-center">
                                                <div class="avtar-pic w35 bg-red" data-toggle="tooltip"
                                                    data-placement="top" title="Avatar Name"><span>SS</span></div>
                                                <div class="ml-3">
                                                    <a href="page-invoices-detail.html" title>South Shyanne</a>
                                                    <p class="mb-0"><a
                                                        href="https://puffintheme.com/cdn-cgi/l/email-protection"
                                                        class="__cf_email__"
                                                        data-cfemail="c1b2aeb4b5a9efb2a9b8a0afafa481a4b9a0acb1ada4efa2aeac">[email&#160;protected]</a>
                                                    </p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>$1200</td>
                                        <td><span class="badge badge-success ml-0 mr-0">Done</span></td>
                                        <td>
                                            <button type="button" class="btn btn-sm btn-default" title="Send Invoice"
                                                data-toggle="tooltip" data-placement="top"><i
                                                    class="icon-envelope"></i></button>
                                            <button type="button" class="btn btn-sm btn-default " title="Print"
                                                data-toggle="tooltip" data-placement="top"><i
                                                    class="icon-printer"></i></button>
                                            <button type="button" class="btn btn-sm btn-default" title="Delete"
                                                data-toggle="tooltip" data-placement="top"><i
                                                    class="icon-trash"></i></button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span>02</span>
                                        </td>
                                        <td>
                                            <div class="d-flex align-items-center">
                                                <img src="../assets/images/xs/avatar2.jpg" data-toggle="tooltip"
                                                    data-placement="top" title="Avatar Name" alt="Avatar"
                                                    class="w35 h35 rounded" />
                                                <div class="ml-3">
                                                    <a href="javascript:void(0);" title>Zoe Baker</a>
                                                    <p class="mb-0"><a
                                                        href="https://puffintheme.com/cdn-cgi/l/email-protection"
                                                        class="__cf_email__"
                                                        data-cfemail="661c09034804070d031426031e070b160a034805090b">[email&#160;protected]</a>
                                                    </p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>$378</td>
                                        <td><span class="badge badge-success ml-0 mr-0">Done</span></td>
                                        <td>
                                            <button type="button" class="btn btn-sm btn-default" title="Send Invoice"
                                                data-toggle="tooltip" data-placement="top"><i
                                                    class="icon-envelope"></i></button>
                                            <button type="button" class="btn btn-sm btn-default " title="Print"
                                                data-toggle="tooltip" data-placement="top"><i
                                                    class="icon-printer"></i></button>
                                            <button type="button" class="btn btn-sm btn-default" title="Delete"
                                                data-toggle="tooltip" data-placement="top"><i
                                                    class="icon-trash"></i></button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span>03</span>
                                        </td>
                                        <td>
                                            <div class="d-flex align-items-center">
                                                <div class="avtar-pic w35 bg-indigo" data-toggle="tooltip"
                                                    data-placement="top" title="Avatar Name"><span>CB</span></div>
                                                <div class="ml-3">
                                                    <a href="javascript:void(0);" title>Colin Brown</a>
                                                    <p class="mb-0"><a
                                                        href="https://puffintheme.com/cdn-cgi/l/email-protection"
                                                        class="__cf_email__"
                                                        data-cfemail="94f7fbf8fdfaf6e6fbe3fad4f1ecf5f9e4f8f1baf7fbf9">[email&#160;protected]</a>
                                                    </p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>$653</td>
                                        <td><span class="badge badge-success ml-0 mr-0">Done</span></td>
                                        <td>
                                            <button type="button" class="btn btn-sm btn-default" title="Send Invoice"
                                                data-toggle="tooltip" data-placement="top"><i
                                                    class="icon-envelope"></i></button>
                                            <button type="button" class="btn btn-sm btn-default " title="Print"
                                                data-toggle="tooltip" data-placement="top"><i
                                                    class="icon-printer"></i></button>
                                            <button type="button" class="btn btn-sm btn-default" title="Delete"
                                                data-toggle="tooltip" data-placement="top"><i
                                                    class="icon-trash"></i></button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span>04</span>
                                        </td>
                                        <td>
                                            <div class="d-flex align-items-center">
                                                <div class="avtar-pic w35 bg-green" data-toggle="tooltip"
                                                    data-placement="top" title="Avatar Name"><span>KG</span></div>
                                                <div class="ml-3">
                                                    <a href="javascript:void(0);" title>Kevin Gill</a>
                                                    <p class="mb-0"><a
                                                        href="https://puffintheme.com/cdn-cgi/l/email-protection"
                                                        class="__cf_email__"
                                                        data-cfemail="cfa4aab9a6a1e1a8a6a3a38faab7aea2bfa3aae1aca0a2">[email&#160;protected]</a>
                                                    </p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>$451</td>
                                        <td><span class="badge badge-warning  ml-0 mr-0">Panding</span></td>
                                        <td>
                                            <button type="button" class="btn btn-sm btn-default" title="Send Invoice"
                                                data-toggle="tooltip" data-placement="top"><i
                                                    class="icon-envelope"></i></button>
                                            <button type="button" class="btn btn-sm btn-default " title="Print"
                                                data-toggle="tooltip" data-placement="top"><i
                                                    class="icon-printer"></i></button>
                                            <button type="button" class="btn btn-sm btn-default" title="Delete"
                                                data-toggle="tooltip" data-placement="top"><i
                                                    class="icon-trash"></i></button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span>05</span>
                                        </td>
                                        <td>
                                            <div class="d-flex align-items-center">
                                                <img src="../assets/images/xs/avatar5.jpg" data-toggle="tooltip"
                                                    data-placement="top" title="Avatar Name" alt="Avatar"
                                                    class="w35 h35 rounded" />
                                                <div class="ml-3">
                                                    <a href="javascript:void(0);" title>Brandon Smith</a>
                                                    <p class="mb-0"><a
                                                        href="https://puffintheme.com/cdn-cgi/l/email-protection"
                                                        class="__cf_email__"
                                                        data-cfemail="1e537f6c777f30797772725e7b667f736e727b307d7173">[email&#160;protected]</a>
                                                    </p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>$1,989</td>
                                        <td><span class="badge badge-success  ml-0 mr-0">Done</span></td>
                                        <td>
                                            <button type="button" class="btn btn-sm btn-default" title="Send Invoice"
                                                data-toggle="tooltip" data-placement="top"><i
                                                    class="icon-envelope"></i></button>
                                            <button type="button" class="btn btn-sm btn-default " title="Print"
                                                data-toggle="tooltip" data-placement="top"><i
                                                    class="icon-printer"></i></button>
                                            <button type="button" class="btn btn-sm btn-default" title="Delete"
                                                data-toggle="tooltip" data-placement="top"><i
                                                    class="icon-trash"></i></button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span>06</span>
                                        </td>
                                        <td>
                                            <div class="d-flex align-items-center">
                                                <img src="../assets/images/xs/avatar6.jpg" data-toggle="tooltip"
                                                    data-placement="top" title="Avatar Name" alt="Avatar"
                                                    class="w35 h35 rounded" />
                                                <div class="ml-3">
                                                    <a href="javascript:void(0);" title>Kevin Baker</a>
                                                    <p class="mb-0"><a
                                                        href="https://puffintheme.com/cdn-cgi/l/email-protection"
                                                        class="__cf_email__"
                                                        data-cfemail="533836253a3d7d313238362113362b323e233f367d303c3e">[email&#160;protected]</a>
                                                    </p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>$343</td>
                                        <td><span class="badge badge-warning  ml-0 mr-0">Panding</span></td>
                                        <td>
                                            <button type="button" class="btn btn-sm btn-default" title="Send Invoice"
                                                data-toggle="tooltip" data-placement="top"><i
                                                    class="icon-envelope"></i></button>
                                            <button type="button" class="btn btn-sm btn-default " title="Print"
                                                data-toggle="tooltip" data-placement="top"><i
                                                    class="icon-printer"></i></button>
                                            <button type="button" class="btn btn-sm btn-default" title="Delete"
                                                data-toggle="tooltip" data-placement="top"><i
                                                    class="icon-trash"></i></button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span>07</span>
                                        </td>
                                        <td>
                                            <div class="d-flex align-items-center">
                                                <img src="../assets/images/xs/avatar2.jpg" data-toggle="tooltip"
                                                    data-placement="top" title="Avatar Name" alt="Avatar"
                                                    class="w35 h35 rounded" />
                                                <div class="ml-3">
                                                    <a href="javascript:void(0);" title>Zoe Baker</a>
                                                    <p class="mb-0"><a
                                                        href="https://puffintheme.com/cdn-cgi/l/email-protection"
                                                        class="__cf_email__"
                                                        data-cfemail="63190c064d010208061123061b020e130f064d000c0e">[email&#160;protected]</a>
                                                    </p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>$378</td>
                                        <td><span class="badge badge-success ml-0 mr-0">Done</span></td>
                                        <td>
                                            <button type="button" class="btn btn-sm btn-default" title="Send Invoice"
                                                data-toggle="tooltip" data-placement="top"><i
                                                    class="icon-envelope"></i></button>
                                            <button type="button" class="btn btn-sm btn-default " title="Print"
                                                data-toggle="tooltip" data-placement="top"><i
                                                    class="icon-printer"></i></button>
                                            <button type="button" class="btn btn-sm btn-default" title="Delete"
                                                data-toggle="tooltip" data-placement="top"><i
                                                    class="icon-trash"></i></button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-12 mt-1">
                        <div class="card">
                            {/* <div class="header">
                            <h2>Users</h2>
                        </div> */}
                            <div class="body">
                                <div class="row text-center">
                                    <div class="col-6 border-right pb-4 pt-4">
                                        <label class="mb-0">New Users</label>
                                        <h4 class="font-30 font-weight-bold text-col-blue">2,025</h4>
                                    </div>
                                    <div class="col-6 pb-4 pt-4">
                                        <label class="mb-0">Return Visitors</label>
                                        <h4 class="font-30 font-weight-bold text-col-blue">1,254</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="body">
                                <div class="form-group">
                                    <label class="d-block">New Users <span class="float-right">77%</span></label>
                                    <div class="progress progress-xxs">
                                        <div class="progress-bar progress-bar-success" role="progressbar"
                                            aria-valuenow="77" aria-valuemin="0" aria-valuemax="100"
                                            style={{ width: "77%" }}></div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="d-block">Return Visitors <span class="float-right">50%</span></label>
                                    <div class="progress progress-xxs">
                                        <div class="progress-bar progress-bar-warning" role="progressbar"
                                            aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"
                                            style={{ width: "50%" }}></div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="d-block">Engagement <span class="float-right">23%</span></label>
                                    <div class="progress progress-xxs">
                                        <div class="progress-bar progress-bar-info" role="progressbar"
                                            aria-valuenow="23" aria-valuemin="0" aria-valuemax="100"
                                            style={{ width: "23%" }}></div>
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

export default Home