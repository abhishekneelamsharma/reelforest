"use client"

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { signIn, signOut, useSession } from 'next-auth/react';
import axios from 'axios';
import Loader from '@/_components/global/Loader';

const Language = () => {
    const router = useRouter();
    const [language, setLanguage] = useState([]);
    const [continueLoading, setContinueLoading] = useState(false);
    const [data, setData] = useState();
    const session = useSession();
    const user_id = session?.data?.user?.user_id
    const username = session?.data?.user?.username

    

    const handleContinue = async (e) => {
        e.preventDefault();
        if (language.length == 0) {
            toast.error("Please select at least one language", {
                style: {
                    borderRadius: '10px',
                    background: '#333',
                    color: '#fff',
                },
            })
            return;
        }

        setContinueLoading(true);
        await signIn("user-credentials", { role: "User", user_id: user_id, redirect: false, language: language, username: username });
        setContinueLoading(false);

        router.replace("/new-order")
    }
   

    const handleLanguageChange = (e) => {
        const language = e.target.value;
        if (e.target.checked) {
            setLanguage((prev) => [...prev, language])
        } else {
            setLanguage((prev) => prev.filter((lan) => lan !== language))
        }
    }

   

    useEffect(() => {
        getData();
    }, [])

    const getData = async () => {
        try {
            const res = await axios.get("/api/language/get_active_language");
            setData(res.data.data);
        } catch (err) {
            console.log(err);
        }
    }

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
        <>
            <div className='d-flex align-items-center justify-content-center' style={{ height: "100vh" }}>
                <div>
                    <h2 className='my-4'>Select Your Preferred Language</h2>
                    {
                        data?.map((ele, ind) =>
                            <div key={ind}>
                                <label htmlFor={`language_${ind}`} className='language w-100  d-flex px-3 py-2'>
                                    <div className='w-100 my-auto'>
                                        <h5 className='mb-0'>{ele.language}</h5>
                                    </div>
                                    <input type="checkbox" id={`language_${ind}`} value={ele.language} onChange={handleLanguageChange} />
                                    <div className='language-overlay'></div>
                                </label>
                            </div>)
                    }

                    <div>
                        <button className='btn btn-info btn-round px-5 py-3 w-100 my-3' disabled={continueLoading}  onClick={handleContinue}><p className='mb-0' style={{ fontSize: "18px", fontWeight: "400" }}
                           
                        >{continueLoading ? "Loading..." : "Continue"}</p></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Language