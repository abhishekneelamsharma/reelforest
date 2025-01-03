import React from 'react'

const New_order = () => {
    return (
        <div id="main-content">
            <div class="container-fluid">
                <div class="block-header">
                    <div class="row clearfix">
                        <div class="col-md-6 col-sm-12">
                            <h1 style={{color:"#17a2b8"}}>Welcome / New order</h1>
                        </div>
                    </div>
                </div>
                <div class="row clearfix mt-5">
                    <div class="col-lg-3 col-md-6">
                        <div class="card">
                            <div class="body">
                                <div class="d-flex align-items-center">
                                    <div class="icon-in-bg bg-indigo text-white rounded-circle"><i
                                        class="fa fa-briefcase"></i></div>
                                    <div class="ml-4">
                                        <span>sources perivate</span>
                                        <h4 class="mb-0 font-weight-medium">4897</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <div class="card">
                            <div class="body">
                                <div class="d-flex align-items-center">
                                    <div class="icon-in-bg bg-azura text-white rounded-circle"><i
                                        class="fa fa-credit-card"></i></div>
                                    <div class="ml-4">
                                        <span>Spent balance</span>
                                        <h4 class="mb-0 font-weight-medium">$0</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <div class="card">
                            <div class="body">
                                <div class="d-flex align-items-center">
                                    <div class="icon-in-bg bg-orange text-white rounded-circle"><i
                                        class="fa fa-users"></i></div>
                                    <div class="ml-4">
                                        <span>Panel orders</span>
                                        <h4 class="mb-0 font-weight-medium">5,805</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <div class="card">
                            <div class="body">
                                <div class="d-flex align-items-center">
                                    <div class="icon-in-bg bg-pink text-white rounded-circle"><i
                                        class="fa fa-life-ring"></i></div>
                                    <div class="ml-4">
                                        <span>Bounce rate</span>
                                        <h4 class="mb-0 font-weight-medium">13,651</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card ">
                    <div class="body">
                        <div className='row'>
                            <div className='col-md-8'>
                                <div className='p-3'>
                                    <h6 className='my-2'>Category</h6>
                                    <div class="input-group mb-3">
                                        <select class="custom-select" id="inputGroupSelect01">
                                            <option selected hidden>Select Category</option>
                                            <option value="1">Premium Creator</option>
                                            <option value="2">Micro Creator</option>
                                            <option value="3">Nano Creator</option>
                                            <option value="3">Bulk Creator</option>
                                            <option value="3">Page Creator</option>
                                        </select>
                                    </div>

                                    <h6 className='my-2'>Select Creator</h6>
                                    <div class="input-group mb-3">
                                        <input type="text" class="form-control" placeholder='Search creator' />
                                        <div class="input-group-append">
                                            <span class="input-group-text">
                                                <i class="fa-solid fa-magnifying-glass"></i>
                                            </span>
                                        </div>
                                    </div>
                                    <div className='influencer-container pr-4 my-2' style={{ height: "400px", overflowY: "scroll" }}>
                                        <div class="user-account m-0  influencer">
                                            <label for="influencer_1" class="w-100 d-flex" >
                                                <div class="" style={{ borderRadius: "50px", margin: "5px" }}>
                                                    <img src="../assets/images/user.png" class="user-photo" alt="User Profile Picture" width={"40px"} style={{ borderRadius: "50px" }} />
                                                </div>
                                                <div className='ml-2 d-flex justify-content-between w-100 align-items-center'>
                                                    <div className='d-flex flex-column mr-4'>
                                                        <span className='mb-0' style={{ color: "white" }}>@carryminati</span>
                                                        <span className='mb-0'>Ajay Nagar </span>
                                                    </div>
                                                    <div className='d-flex flex-column text-center mr-3'>
                                                        <span className='mb-0'><strong>700</strong></span>
                                                        <span className='mb-0' style={{ fontSize: "14px" }}>Posts</span>
                                                    </div>
                                                    <div className='d-flex flex-column text-center mr-3'>
                                                        <span className='mb-0'><strong>27.3K</strong></span>
                                                        <span className='mb-0' style={{ fontSize: "14px" }}>Followers</span>
                                                    </div>
                                                    <div className='d-flex flex-column text-center mr-3'>
                                                        <span className='mb-0'><strong>700</strong></span>
                                                        <span className='mb-0' style={{ fontSize: "14px" }}>Following</span>
                                                    </div>
                                                </div>

                                                <div className='ml-5 mr-2 my-auto'>
                                                    <input type="checkbox" id="influencer_1" />
                                                    <div className='influencer-overlay'></div>
                                                </div>
                                            </label>
                                        </div>

                                        <div class="user-account m-0  influencer">
                                            <label for="influencer_2" class="w-100 d-flex" >
                                                <div class="" style={{ borderRadius: "50px", margin: "5px" }}>
                                                    <img src="../assets/images/user.png" class="user-photo" alt="User Profile Picture" width={"40px"} style={{ borderRadius: "50px" }} />
                                                </div>
                                                <div className='ml-2 d-flex justify-content-between w-100 align-items-center'>
                                                    <div className='d-flex flex-column mr-4'>
                                                        <span className='mb-0' style={{ color: "white" }}>@carryminati</span>
                                                        <span className='mb-0'>Ajay Nagar </span>
                                                    </div>
                                                    <div className='d-flex flex-column text-center mr-3'>
                                                        <span className='mb-0'><strong>700</strong></span>
                                                        <span className='mb-0' style={{ fontSize: "14px" }}>Posts</span>
                                                    </div>
                                                    <div className='d-flex flex-column text-center mr-3'>
                                                        <span className='mb-0'><strong>27.3K</strong></span>
                                                        <span className='mb-0' style={{ fontSize: "14px" }}>Followers</span>
                                                    </div>
                                                    <div className='d-flex flex-column text-center mr-3'>
                                                        <span className='mb-0'><strong>700</strong></span>
                                                        <span className='mb-0' style={{ fontSize: "14px" }}>Following</span>
                                                    </div>
                                                </div>

                                                <div className='ml-5 mr-2 my-auto'>
                                                    <input type="checkbox" id="influencer_2" />
                                                    <div className='influencer-overlay'></div>
                                                </div>
                                            </label>
                                        </div>

                                        <div class="user-account m-0  influencer">
                                            <label for="influencer_3" class="w-100 d-flex" >
                                                <div class="" style={{ borderRadius: "50px", margin: "5px" }}>
                                                    <img src="../assets/images/user.png" class="user-photo" alt="User Profile Picture" width={"40px"} style={{ borderRadius: "50px" }} />
                                                </div>
                                                <div className='ml-2 d-flex justify-content-between w-100 align-items-center'>
                                                    <div className='d-flex flex-column mr-4'>
                                                        <span className='mb-0' style={{ color: "white" }}>@carryminati</span>
                                                        <span className='mb-0'>Ajay Nagar </span>
                                                    </div>
                                                    <div className='d-flex flex-column text-center mr-3'>
                                                        <span className='mb-0'><strong>700</strong></span>
                                                        <span className='mb-0' style={{ fontSize: "14px" }}>Posts</span>
                                                    </div>
                                                    <div className='d-flex flex-column text-center mr-3'>
                                                        <span className='mb-0'><strong>27.3K</strong></span>
                                                        <span className='mb-0' style={{ fontSize: "14px" }}>Followers</span>
                                                    </div>
                                                    <div className='d-flex flex-column text-center mr-3'>
                                                        <span className='mb-0'><strong>700</strong></span>
                                                        <span className='mb-0' style={{ fontSize: "14px" }}>Following</span>
                                                    </div>
                                                </div>

                                                <div className='ml-5 mr-2 my-auto'>
                                                    <input type="checkbox" id="influencer_3" />
                                                    <div className='influencer-overlay'></div>
                                                </div>
                                            </label>
                                        </div>

                                        <div class="user-account m-0  influencer">
                                            <label for="influencer_4" class="w-100 d-flex" >
                                                <div class="" style={{ borderRadius: "50px", margin: "5px" }}>
                                                    <img src="../assets/images/user.png" class="user-photo" alt="User Profile Picture" width={"40px"} style={{ borderRadius: "50px" }} />
                                                </div>
                                                <div className='ml-2 d-flex justify-content-between w-100 align-items-center'>
                                                    <div className='d-flex flex-column mr-4'>
                                                        <span className='mb-0' style={{ color: "white" }}>@carryminati</span>
                                                        <span className='mb-0'>Ajay Nagar </span>
                                                    </div>
                                                    <div className='d-flex flex-column text-center mr-3'>
                                                        <span className='mb-0'><strong>700</strong></span>
                                                        <span className='mb-0' style={{ fontSize: "14px" }}>Posts</span>
                                                    </div>
                                                    <div className='d-flex flex-column text-center mr-3'>
                                                        <span className='mb-0'><strong>27.3K</strong></span>
                                                        <span className='mb-0' style={{ fontSize: "14px" }}>Followers</span>
                                                    </div>
                                                    <div className='d-flex flex-column text-center mr-3'>
                                                        <span className='mb-0'><strong>700</strong></span>
                                                        <span className='mb-0' style={{ fontSize: "14px" }}>Following</span>
                                                    </div>
                                                </div>

                                                <div className='ml-5 mr-2 my-auto'>
                                                    <input type="checkbox" id="influencer_4" />
                                                    <div className='influencer-overlay'></div>
                                                </div>
                                            </label>
                                        </div>

                                        <div class="user-account m-0  influencer">
                                            <label for="influencer_5" class="w-100 d-flex" >
                                                <div class="" style={{ borderRadius: "50px", margin: "5px" }}>
                                                    <img src="../assets/images/user.png" class="user-photo" alt="User Profile Picture" width={"40px"} style={{ borderRadius: "50px" }} />
                                                </div>
                                                <div className='ml-2 d-flex justify-content-between w-100 align-items-center'>
                                                    <div className='d-flex flex-column mr-4'>
                                                        <span className='mb-0' style={{ color: "white" }}>@carryminati</span>
                                                        <span className='mb-0'>Ajay Nagar </span>
                                                    </div>
                                                    <div className='d-flex flex-column text-center mr-3'>
                                                        <span className='mb-0'><strong>700</strong></span>
                                                        <span className='mb-0' style={{ fontSize: "14px" }}>Posts</span>
                                                    </div>
                                                    <div className='d-flex flex-column text-center mr-3'>
                                                        <span className='mb-0'><strong>27.3K</strong></span>
                                                        <span className='mb-0' style={{ fontSize: "14px" }}>Followers</span>
                                                    </div>
                                                    <div className='d-flex flex-column text-center mr-3'>
                                                        <span className='mb-0'><strong>700</strong></span>
                                                        <span className='mb-0' style={{ fontSize: "14px" }}>Following</span>
                                                    </div>
                                                </div>

                                                <div className='ml-5 mr-2 my-auto'>
                                                    <input type="checkbox" id="influencer_5" />
                                                    <div className='influencer-overlay'></div>
                                                </div>
                                            </label>
                                        </div>

                                        <div class="user-account m-0  influencer">
                                            <label for="influencer_6" class="w-100 d-flex" >
                                                <div class="" style={{ borderRadius: "50px", margin: "5px" }}>
                                                    <img src="../assets/images/user.png" class="user-photo" alt="User Profile Picture" width={"40px"} style={{ borderRadius: "50px" }} />
                                                </div>
                                                <div className='ml-2 d-flex justify-content-between w-100 align-items-center'>
                                                    <div className='d-flex flex-column mr-4'>
                                                        <span className='mb-0' style={{ color: "white" }}>@carryminati</span>
                                                        <span className='mb-0'>Ajay Nagar </span>
                                                    </div>
                                                    <div className='d-flex flex-column text-center mr-3'>
                                                        <span className='mb-0'><strong>700</strong></span>
                                                        <span className='mb-0' style={{ fontSize: "14px" }}>Posts</span>
                                                    </div>
                                                    <div className='d-flex flex-column text-center mr-3'>
                                                        <span className='mb-0'><strong>27.3K</strong></span>
                                                        <span className='mb-0' style={{ fontSize: "14px" }}>Followers</span>
                                                    </div>
                                                    <div className='d-flex flex-column text-center mr-3'>
                                                        <span className='mb-0'><strong>700</strong></span>
                                                        <span className='mb-0' style={{ fontSize: "14px" }}>Following</span>
                                                    </div>
                                                </div>

                                                <div className='ml-5 mr-2 my-auto'>
                                                    <input type="checkbox" id="influencer_6" />
                                                    <div className='influencer-overlay'></div>
                                                </div>
                                            </label>
                                        </div>

                                        <div class="user-account m-0  influencer">
                                            <label for="influencer_7" class="w-100 d-flex" >
                                                <div class="" style={{ borderRadius: "50px", margin: "5px" }}>
                                                    <img src="../assets/images/user.png" class="user-photo" alt="User Profile Picture" width={"40px"} style={{ borderRadius: "50px" }} />
                                                </div>
                                                <div className='ml-2 d-flex justify-content-between w-100 align-items-center'>
                                                    <div className='d-flex flex-column mr-4'>
                                                        <span className='mb-0' style={{ color: "white" }}>@carryminati</span>
                                                        <span className='mb-0'>Ajay Nagar </span>
                                                    </div>
                                                    <div className='d-flex flex-column text-center mr-3'>
                                                        <span className='mb-0'><strong>700</strong></span>
                                                        <span className='mb-0' style={{ fontSize: "14px" }}>Posts</span>
                                                    </div>
                                                    <div className='d-flex flex-column text-center mr-3'>
                                                        <span className='mb-0'><strong>27.3K</strong></span>
                                                        <span className='mb-0' style={{ fontSize: "14px" }}>Followers</span>
                                                    </div>
                                                    <div className='d-flex flex-column text-center mr-3'>
                                                        <span className='mb-0'><strong>700</strong></span>
                                                        <span className='mb-0' style={{ fontSize: "14px" }}>Following</span>
                                                    </div>
                                                </div>

                                                <div className='ml-5 mr-2 my-auto'>
                                                    <input type="checkbox" id="influencer_7" />
                                                    <div className='influencer-overlay'></div>
                                                </div>
                                            </label>
                                        </div>

                                        <div class="user-account m-0  influencer">
                                            <label for="influencer_8" class="w-100 d-flex" >
                                                <div class="" style={{ borderRadius: "50px", margin: "5px" }}>
                                                    <img src="../assets/images/user.png" class="user-photo" alt="User Profile Picture" width={"40px"} style={{ borderRadius: "50px" }} />
                                                </div>
                                                <div className='ml-2 d-flex justify-content-between w-100 align-items-center'>
                                                    <div className='d-flex flex-column mr-4'>
                                                        <span className='mb-0' style={{ color: "white" }}>@carryminati</span>
                                                        <span className='mb-0'>Ajay Nagar </span>
                                                    </div>
                                                    <div className='d-flex flex-column text-center mr-3'>
                                                        <span className='mb-0'><strong>700</strong></span>
                                                        <span className='mb-0' style={{ fontSize: "14px" }}>Posts</span>
                                                    </div>
                                                    <div className='d-flex flex-column text-center mr-3'>
                                                        <span className='mb-0'><strong>27.3K</strong></span>
                                                        <span className='mb-0' style={{ fontSize: "14px" }}>Followers</span>
                                                    </div>
                                                    <div className='d-flex flex-column text-center mr-3'>
                                                        <span className='mb-0'><strong>700</strong></span>
                                                        <span className='mb-0' style={{ fontSize: "14px" }}>Following</span>
                                                    </div>
                                                </div>

                                                <div className='ml-5 mr-2 my-auto'>
                                                    <input type="checkbox" id="influencer_8" />
                                                    <div className='influencer-overlay'></div>
                                                </div>
                                            </label>
                                        </div>

                                        <div class="user-account m-0  influencer">
                                            <label for="influencer_9" class="w-100 d-flex" >
                                                <div class="" style={{ borderRadius: "50px", margin: "5px" }}>
                                                    <img src="../assets/images/user.png" class="user-photo" alt="User Profile Picture" width={"40px"} style={{ borderRadius: "50px" }} />
                                                </div>
                                                <div className='ml-2 d-flex justify-content-between w-100 align-items-center'>
                                                    <div className='d-flex flex-column mr-4'>
                                                        <span className='mb-0' style={{ color: "white" }}>@carryminati</span>
                                                        <span className='mb-0'>Ajay Nagar </span>
                                                    </div>
                                                    <div className='d-flex flex-column text-center mr-3'>
                                                        <span className='mb-0'><strong>700</strong></span>
                                                        <span className='mb-0' style={{ fontSize: "14px" }}>Posts</span>
                                                    </div>
                                                    <div className='d-flex flex-column text-center mr-3'>
                                                        <span className='mb-0'><strong>27.3K</strong></span>
                                                        <span className='mb-0' style={{ fontSize: "14px" }}>Followers</span>
                                                    </div>
                                                    <div className='d-flex flex-column text-center mr-3'>
                                                        <span className='mb-0'><strong>700</strong></span>
                                                        <span className='mb-0' style={{ fontSize: "14px" }}>Following</span>
                                                    </div>
                                                </div>

                                                <div className='ml-5 mr-2 my-auto'>
                                                    <input type="checkbox" id="influencer_9" />
                                                    <div className='influencer-overlay'></div>
                                                </div>
                                            </label>
                                        </div>


                                    </div>


                                    <h6 className='my-2 mt-4'>Audio Link</h6>
                                    <div class="input-group mb-3">
                                        <input type="text" class="form-control" placeholder="Audio link" aria-label="Username"
                                            aria-describedby="basic-addon1" />
                                    </div>

                                    <h6 className='my-2'>Amount</h6>
                                    <div class="input-group mb-3">
                                        <input type="text" class="form-control" placeholder="Amount" aria-label="Username"
                                            aria-describedby="basic-addon1" />
                                    </div>
                                    <div>
                                        <button className='btn btn-info btn-round mr-2'>Submit</button>
                                        <button className='btn btn-outline-info btn-round '>Save & Continue</button>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-4'>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default New_order