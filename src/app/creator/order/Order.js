"use client";

import Loader from '@/_components/global/Loader';
import DateFomatter from '@/_helper/DateFomatter';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const Order = () => {
    const [data, setData] = useState();
    const [toggleVideo, setToggleVideo] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [videoLink, setVideoLink] = useState("");
    const [orderId, setOrderId] = useState();
    const session = useSession();
    const creator_id = session?.data?.user?.user_id


    const getData = async () => {
        try {
            const res = await axios.post("/api/order/get_order_by_creator", {
                creator_id: creator_id
            });
            setData(res.data.data);
            setLoading(false);
        } catch (err) {
            console.log(err);
        }
    }

    const handlePost = async () => {
        try {
            if (!videoLink) {
                toast.error("Video link is requied!", {
                    style: {
                        borderRadius: '10px',
                        background: '#333',
                        color: '#fff',
                    },
                })
                return;
            }
            setSubmitting(true)
            const res = await axios.post("/api/order/post_video", {
                creator_id: creator_id,
                order_id: orderId,
                video_link: videoLink
            });
            setSubmitting(false)
            if (res.data.status == 1) {
                toast.success(res.data.message, {
                    style: {
                        borderRadius: '10px',
                        background: '#333',
                        color: '#fff',
                    },
                })
                getData();
                setVideoLink("");
                setToggleVideo(false);
                
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
            setSubmitting(false)
            console.log(err);
        }
    }

    useEffect(() => {
        if (creator_id) {
            getData();
        }
    }, [creator_id])


    const [loading, setLoading] = useState(true);
   
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
                                    <th className='text-center'><strong style={{ color: "#17a2b8" }}>Audio Link</strong></th>
                                    <th className='text-center'><strong style={{ color: "#17a2b8" }} >Status</strong></th>
                                    <th className='text-center'><strong style={{ color: "#17a2b8" }}>Action</strong></th>
                                    <th className='text-center'><strong style={{ color: "#17a2b8" }}>Date</strong></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data?.length > 0 ?
                                        data?.map((ele, ind) =>
                                            <tr key={ind}>
                                                <th className="w60">{ind + 1}</th>
                                                <td className='text-center'>
                                                    <a href={ele.audio_link} target='_blank'>Link</a>
                                                </td>
                                                <td className='text-center'><span className="badge-warning">
                                                    {ele.completedOrder}/{ele.total_no_of_creators}
                                                </span>
                                                </td>
                                                <td className='text-center'>
                                                    <a href="#" className="badge badge-warning" onClick={() => {
                                                        setToggleVideo(!toggleVideo)
                                                        setOrderId(ele._id);
                                                    }}>
                                                        Post Video
                                                    </a>
                                                </td>
                                                <td className='text-center'>
                                                    <DateFomatter time={ele.createdAt} />
                                                </td>
                                            </tr>
                                        ) :
                                        <tr>
                                            <td>No Data Found !</td>
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

                <div className={toggleVideo ? `modal fade show` : `modal fade`} id="exampleModalCenter" tabIndex="-1" role="dialog"
                    aria-labelledby="exampleModalCenterTitle" aria-hidden="true" style={toggleVideo ? { display: "block", backgroundColor: "rgba(0,0,0,0.6)" } : {}}>
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalCenterTitle" >Post Video Link</h5>
                                <button type="button" className="close" data-dismiss="modal"
                                    aria-label="Close" onClick={() => setToggleVideo(!toggleVideo)}>
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="input-group my-2">
                                    <input type="text" className="form-control" placeholder='Video Link' value={videoLink} onChange={(e) => setVideoLink(e.target.value)} />
                                </div>
                            </div>
                            <div className="modal-footer d-flex justify-content-start">
                                <button type="button" className="btn btn-round btn-primary"
                                    onClick={handlePost} disabled={submitting}>{submitting ? "Submitting.." : "Submit"}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Order