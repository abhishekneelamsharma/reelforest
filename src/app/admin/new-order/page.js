import React from 'react'

const page = () => {
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
                            <div className='col-12 col-md-8'>
                                <div className='p-3'>
                                    <h6 className='my-2'>Category</h6>
                                    <div className="input-group mb-3">
                                        <select className="custom-select" id="inputGroupSelect01">
                                            <option defaultChecked hidden>Select Category</option>
                                            <option value="1">Premium Creator</option>
                                            <option value="2">Micro Creator</option>
                                            <option value="3">Nano Creator</option>
                                            <option value="3">Bulk Creator</option>
                                            <option value="3">Page Creator</option>
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
                                    <div className='influencer-container pr-4 my-2' style={{ height: "400px", overflowY: "scroll" }}>
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
                                            <label htmlFor="influencer_2" className="w-100 d-flex justify-content-between ">
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
                                                    <input type="checkbox" id="influencer_2" />
                                                    <div className='influencer-overlay'></div>
                                                </div>
                                            </label>
                                        </div>

                                        <div className="user-account m-0  influencer">
                                            <label htmlFor="influencer_3" className="w-100 d-flex justify-content-between ">
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
                                                    <input type="checkbox" id="influencer_3" />
                                                    <div className='influencer-overlay'></div>
                                                </div>
                                            </label>
                                        </div>

                                        <div className="user-account m-0  influencer">
                                            <label htmlFor="influencer_4" className="w-100 d-flex justify-content-between ">
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
                                                    <input type="checkbox" id="influencer_4" />
                                                    <div className='influencer-overlay'></div>
                                                </div>
                                            </label>
                                        </div>

                                        <div className="user-account m-0  influencer">
                                            <label htmlFor="influencer_5" className="w-100 d-flex justify-content-between ">
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
                                                    <input type="checkbox" id="influencer_5" />
                                                    <div className='influencer-overlay'></div>
                                                </div>
                                            </label>
                                        </div>

                                        <div className="user-account m-0  influencer">
                                            <label htmlFor="influencer_7" className="w-100 d-flex justify-content-between ">
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
                                                    <input type="checkbox" id="influencer_7" />
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

                                        <div className="user-account m-0  influencer">
                                            <label htmlFor="influencer_9" className="w-100 d-flex justify-content-between ">
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
                                                    <input type="checkbox" id="influencer_9" />
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
                                </div>
                            </div>
                            <div className="col-12 col-md-4 mt-5">
                                <div className="card " style={{ border: "1px solid #393d42" }}>
                                    <div className="body">
                                        <div className="form-group">
                                            <label className="d-block">Category <span className="float-right">Premium</span></label>
                                            <div className="progress progress-xxs">
                                                <div className="progress-bar progress-bar-success" role="progressbar"
                                                    aria-valuenow="77" aria-valuemin="0" aria-valuemax="100"
                                                    style={{ width: "23%" }}></div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="d-block">Number of Creator<span className="float-right">14</span></label>
                                            <div className="progress progress-xxs">
                                                <div className="progress-bar progress-bar-warning" role="progressbar"
                                                    aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"
                                                    style={{ width: "43%" }}></div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="d-block">Amount <span className="float-right">5,600</span></label>
                                            <div className="progress progress-xxs">
                                                <div className="progress-bar progress-bar-info" role="progressbar"
                                                    aria-valuenow="23" aria-valuemin="0" aria-valuemax="100"
                                                    style={{ width: "21%" }}></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card " style={{ border: "1px solid #393d42" }}>
                                    <div className="body">
                                        <div className="form-group">
                                            <label className="d-block">Category <span className="float-right">Micro</span></label>
                                            <div className="progress progress-xxs">
                                                <div className="progress-bar progress-bar-success" role="progressbar"
                                                    aria-valuenow="77" aria-valuemin="0" aria-valuemax="100"
                                                    style={{ width: "23%" }}></div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="d-block">Number of Creator<span className="float-right">34</span></label>
                                            <div className="progress progress-xxs">
                                                <div className="progress-bar progress-bar-warning" role="progressbar"
                                                    aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"
                                                    style={{ width: "43%" }}></div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="d-block">Amount <span className="float-right">3,600</span></label>
                                            <div className="progress progress-xxs">
                                                <div className="progress-bar progress-bar-info" role="progressbar"
                                                    aria-valuenow="23" aria-valuemin="0" aria-valuemax="100"
                                                    style={{ width: "21%" }}></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-center'>
                                    <button className='btn btn-info btn-round mr-2'> Final Submit</button>
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