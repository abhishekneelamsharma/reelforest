import React, { Suspense } from 'react'
import OrderRequest from './OrderRequest'

const page = () => {
    return (
        <Suspense>
            <OrderRequest />
        </Suspense>
    )
}

export default page