import React from 'react'

const Order = () => {
    return (
        <div id="main-content">
            <div className="container-fluid">
                <div className="block-header">
                    <div className="row clearfix">
                        <div className="col-md-6 col-sm-12">
                            <h1 style={{color:"#17a2b8"}}>Welcome / Order</h1>
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <div className="table-responsive">
                        <table className="table header-border table-hover table-custom spacing5">
                            <thead>
                                <tr>
                                    <th><strong style={{color:"#17a2b8"}}>#</strong></th>
                                    <th><strong style={{color:"#17a2b8"}}>OrderId</strong></th>
                                    <th><strong style={{color:"#17a2b8"}}>Total Creator</strong></th>
                                    <th><strong style={{color:"#17a2b8"}}>Total Amount</strong></th>
                                    <th><strong style={{color:"#17a2b8"}}>Audio Link</strong></th>
                                    <th><strong style={{color:"#17a2b8"}}>Status</strong></th>
                                    <th><strong style={{color:"#17a2b8"}}>Date</strong></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th className="w60">1</th>
                                    <td>Premium Creator</td>
                                    <td>Premium Creator</td>
                                    <td>link</td>
                                    <td>20000</td>
                                    <td><span className="badge badge-warning">Pending</span>
                                    </td>
                                    <td>01/01/2025</td>
                                </tr>
                               
                            </tbody>
                        </table>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Order