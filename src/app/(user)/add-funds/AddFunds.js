"use client"
import Loader from '@/_components/global/Loader';
import { useSession } from 'next-auth/react';
import React, { useState,useEffect } from 'react'
import QRCode from 'react-qr-code';

const AddFunds = () => {
    const [amount, setAmount] = useState("");
    const session = useSession();
    console.log(session);

    const generateUPILink = (upiId, payeeName, amount, note) => {
        if (!amount) {
            return "Please Enter the valid amount!"
        }
        return `upi://pay?pa=${upiId}&pn=${payeeName}&am=${amount}&cu=INR&tn=${note}`;
    };

    const upiLink = generateUPILink(
        "8791802003@ybl", // UPI ID
        "Abhishek Sharma", // Payee Name
        amount, // Amount
        "Payment for services" // Transaction Note
    );

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
                            <h1 style={{ color: "#17a2b8" }}>Welcome / Add funds</h1>
                        </div>
                    </div>
                </div>
                <div className="card ">
                    <div className="body">
                        <div className='row'>
                            <div className='col-12 col-md-6'>
                                <h6 className='my-2 mt-4'>Amount</h6>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Amount"
                                        value={amount} onChange={(e) => setAmount(e.target.value)} />
                                </div>

                                <h6 className='my-2 mb-3'>Quick Payment via QR Code</h6>
                                <QRCode
                                    size={256}
                                    style={{ height: "auto", maxWidth: "100%", width: "300px" }}
                                    value={upiLink}
                                    viewBox={`0 0 256 256`}
                                    bgColor='#282b2f'
                                    fgColor='#a5a8ad'
                                />

                                <h6 className='my-2 mt-3'>Instructions</h6>
                                <p className='mb-0 text-info' style={{ fontSize: "13px" }}>1. Ensure your UPI app is installed and linked to your bank account.</p>
                                <p className='mb-0 text-info' style={{ fontSize: "13px" }}>2. Enter the amount (if not pre-filled) and complete the transaction securely.</p>
                                <p className='mb-0 text-info' style={{ fontSize: "13px" }}>3. Scan the QR code using your UPI app to proceed with the payment.</p>

                            </div>


                        </div>
                    </div>
                </div>
            </div >
        </div >

    )
}

export default AddFunds