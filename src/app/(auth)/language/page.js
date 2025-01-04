import React from 'react'


const Language = () => {
    return (
        <>
            <div className='d-flex align-items-center justify-content-center' style={{ height: "100vh" }}>
                <div>
                    <h2 className='my-4'>Select Your Preferred Language</h2>
                    <div>
                        <label htmlFor="language_1" className='language w-100  d-flex px-3 py-2'>
                            <div className='w-100 '>
                                <h5>English</h5>
                            </div>
                            <input type="checkbox" id='language_1' />
                            <div className='language-overlay'></div>
                        </label>
                    </div>
                    <div>
                        <label htmlFor="language_2" className='language w-100  d-flex px-3 py-2'>
                            <div className='w-100 '>
                                <h5>Hindi</h5>
                            </div>
                            <input type="checkbox" id='language_2' />
                            <div className='language-overlay'></div>
                        </label>
                    </div>
                    <div>
                        <label htmlFor="language_3" className='language w-100  d-flex px-3 py-2'>
                            <div className='w-100 '>
                                <h5>Marathi</h5>
                            </div>
                            <input type="checkbox" id='language_3' />
                            <div className='language-overlay'></div>
                        </label>
                    </div>
                    <div>
                        <label htmlFor="language_4" className='language w-100  d-flex px-3 py-2'>
                            <div className='w-100 '>
                                <h5>Telgu</h5>
                            </div>
                            <input type="checkbox" id='language_4' />
                            <div className='language-overlay'></div>
                        </label>
                    </div>
                    <div>
                        <label htmlFor="language_5" className='language w-100  d-flex px-3 py-2'>
                            <div className='w-100 '>
                                <h5>Tamil</h5>
                            </div>
                            <input type="checkbox" id='language_5' />
                            <div className='language-overlay'></div>
                        </label>
                    </div>
                    <div>
                        <label htmlFor="language_6" className='language w-100  d-flex px-3 py-2'>
                            <div className='w-100 '>
                                <h5>Malayam</h5>
                            </div>
                            <input type="checkbox" id='language_6' />
                            <div className='language-overlay'></div>
                        </label>
                    </div>
                    <div>
                        <button className='btn btn-info btn-round px-5 py-3 w-100 my-3'><p className='mb-0' style={{fontSize:"18px",fontWeight:"400"}} 
                        // onClick={()=>navigate("/")}
                        >Continue</p></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Language