"use client"

import Particles from '@tsparticles/react'
import React from 'react'

const page = () => {
    return (
        <div className="auth-main particles_js">
            <div className='col-4 w-100 d-flex align-items-center flex-column justify-content-center' style={{height:"100vh",backgroundColor:"white"}} >
                <img src="https://puffintheme.com/template/oculux/assets/images/icon.svg"
                    alt="Oculux Logo" className="img-fluid logo" width={150} />
                <h2>Reel Troop</h2>
                <Particles/>
            </div>
            <div className='col-8'>
                <h2 className='mb-3'>Select Role</h2>
                <div >
                    <a href='#' className='btn btn-info btn-round py-3 mr-2 w-25'>
                        <h5 className='mb-0'>User</h5>
                    </a>
                    <a href='#' className='btn btn-info btn-round py-3 w-25'>
                        <h5 className='mb-0'>Creator</h5>
                    </a>
                </div>
            </div>

        </div>
    )
}

export default page