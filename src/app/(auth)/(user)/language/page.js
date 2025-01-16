"use client"

import React, { useState } from 'react'
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { signIn } from 'next-auth/react';

const Language = () => {
    const router = useRouter();
    const [language, setLanguage] = useState([]);
    const [continueLoading, setContinueLoading] = useState(false);


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
        await signIn("user-credentials", { role: "User", redirect: false, language: language });
        setContinueLoading(true);
        router.push("/")
    }

    const handleLanguageChange = (e) => {
        const language = e.target.value;
        if (e.target.checked) {
            setLanguage((prev) => [...prev, language])
        } else {
            setLanguage((prev) => prev.filter((lan) => lan !== language))
        }
    }


    return (
        <>
            <div className='d-flex align-items-center justify-content-center' style={{ height: "100vh" }}>
                <div>
                    <h2 className='my-4'>Select Your Preferred Language</h2>
                    <div>
                        <label htmlFor="language_1" className='language w-100  d-flex px-3 py-2'>
                            <div className='w-100 my-auto'>
                                <h5 className='mb-0'>English</h5>
                            </div>
                            <input type="checkbox" id='language_1' value="English" onChange={handleLanguageChange} />
                            <div className='language-overlay'></div>
                        </label>
                    </div>
                    <div>
                        <label htmlFor="language_2" className='language w-100  d-flex px-3 py-2'>
                            <div className='w-100 my-auto'>
                                <h5 className='mb-0'>Hindi</h5>
                            </div>
                            <input type="checkbox" id='language_2' value="Hindi" onChange={handleLanguageChange} />
                            <div className='language-overlay'></div>
                        </label>
                    </div>
                    <div>
                        <label htmlFor="language_3" className='language w-100  d-flex px-3 py-2'>
                            <div className='w-100 my-auto'>
                                <h5 className='mb-0'>Marathi</h5>
                            </div>
                            <input type="checkbox" id='language_3' value="Marathi" onChange={handleLanguageChange} />
                            <div className='language-overlay'></div>
                        </label>
                    </div>
                    <div>
                        <label htmlFor="language_4" className='language w-100  d-flex px-3 py-2'>
                            <div className='w-100 my-auto'>
                                <h5 className='mb-0'>Telgu</h5>
                            </div>
                            <input type="checkbox" id='language_4' value="Telgu" onChange={handleLanguageChange} />
                            <div className='language-overlay'></div>
                        </label>
                    </div>
                    <div>
                        <label htmlFor="language_5" className='language w-100  d-flex px-3 py-2'>
                            <div className='w-100 my-auto'>
                                <h5 className='mb-0'>Tamil</h5>
                            </div>
                            <input type="checkbox" id='language_5' value="Tamil" onChange={handleLanguageChange} />
                            <div className='language-overlay'></div>
                        </label>
                    </div>

                    <div>
                        <button className='btn btn-info btn-round px-5 py-3 w-100 my-3' disabled={continueLoading}><p className='mb-0' style={{ fontSize: "18px", fontWeight: "400" }}
                            onClick={handleContinue}
                        >{continueLoading ? "Loading..." : "Continue"}</p></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Language