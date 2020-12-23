import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ReactTable from "react-table-6";
import "react-table-6/react-table.css"

export default class ViewStudents extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: []
        }
    }
    componentDidMount() {
        const url = "http://localhost:3306/viewDetailsStudent";
        fetch(url, {
            method: "GET"
        }).then(response => response.json()).then(post => {
            this.setState({posts: post.result})
        })
    }
    render() {
        const columns = [
            {
                Header: "Name",
                accessor: "Name",
                style:{
                    textAlign:"center"
                },
                headerStyle: { fontWeight: 'bold' },
                sortable: false
            },
            {
                Header: "RegistrationNo",
                accessor: "RegistrationNo",
                style:{
                    textAlign:"center"
                },
                headerStyle: { fontWeight: 'bold' },
                sortable: false
            },
            {
                Header: "Contact",
                accessor: "PhoneNo",
                style:{
                    textAlign:"center"
                },
                headerStyle: { fontWeight: 'bold' },
                sortable: false
            },
            {
                Header: "Email",
                accessor: "Email",
                style:{
                    textAlign:"center"
                },
                headerStyle: { fontWeight: 'bold' },
                sortable: false
            }
        ]
        return (
            <div id="page-wrapper" style={{}}>
                <div className="row">
                    <div className="col-lg-12">
                        <link href="/Content/PagedList.css" rel="stylesheet" type="text/css" />
                        <h2>Student</h2> <br></br>
                        <ReactTable className = "-striped -highlight"
                            columns = {columns}
                            data = {
                                this.state.posts
                            }
                            filterable
                            defaultPageSize = {10}
                            noDataText = {"Please Wait.."}
                            pageSizeOptions = {[2,4,6]}
                            >
                        </ReactTable>
                        </div>
                    {/* /.row */}
                </div>
                <hr />
            </div>

        )
    }
}
