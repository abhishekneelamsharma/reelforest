"use client"

import { DataTable } from "simple-datatables"
import React, { useEffect, useState } from 'react'
import axios from "axios"

const Users = () => {
    const [data, setData] = useState();

    useEffect(() => {
        if (data) {
            new DataTable("#myTable")
        }
    }, [data])

    useEffect(() => {
        getData();
    }, [])

    const getData = async () => {
        try {
            const res = await axios.get("/api/user/get_all_users");
            console.log(res.data);
            setData(res.data.data)
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div id="main-content">
            <div className="container-fluid">
                <div className="block-header">
                    <div className="row clearfix">
                        <div className="col-md-6 col-sm-12">
                            <h1 style={{ color: "#17a2b8" }} > All Users</h1>
                        </div>
                    </div>
                </div>
                <div className="body">
                    <div className="table-responsive">
                        <table id="myTable" className="table table-hover js-basic-example dataTable table-custom spacing5">
                            <thead>
                                <tr>
                                    <th style={{ color: "#17a2b8" }}>Name</th>
                                    <th style={{ color: "#17a2b8" }}>Email</th>
                                </tr>
                            </thead>
                            <tfoot>
                                <tr>
                                    <th style={{ color: "#17a2b8" }}>Name</th>
                                    <th style={{ color: "#17a2b8" }}>Email</th>
                                </tr>
                            </tfoot>
                            <tbody>
                                {
                                    data?.map((ele, ind) =>
                                        <tr key={ind}>
                                            <td>{ele.name}</td>
                                            <td>{ele.email}</td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Users