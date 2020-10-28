import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ReactTable from "react-table-6";
import "react-table-6/react-table.css"

export default class ViewCommittees extends Component {

    constructor(props) {
        super(props);

        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        const url = "http://localhost:3306/viewCommitteeMOC";
        fetch(url, {
            method: "GET"
        }).then(response => response.json()).then(post => {
            this.setState({posts: post.result})
        })
    }

    render() {
        const columns = [ 
            {
                Header: "Committee Name",
                accessor: "CommitteeName",
                style: {
                    textAlign: "center"
                },
                headerStyle: { fontWeight: 'bold' },
                sortable: false
            },
            {
                Header: "Goal",
                accessor: "goal",
                sortable: false,
                style: {
                    textAlign: "center"
                },
                headerStyle: { fontWeight: 'bold' },
                filterable: false
            },
            {
                Header: "Creation Date",
                accessor: "committeeCreationDate",
                style: {
                    textAlign: "center"
                },
                headerStyle: { fontWeight: 'bold' }
            },
            {
                Header: "Desolving Date",
                accessor: "committeeDesolveDate",
                style: {
                    textAlign: "center"
                },
                headerStyle: { fontWeight: 'bold' },
            },
            {
                Header: "Description",
                accessor: "Description",
                sortable: false,
                style: {
                    textAlign: "center"
                },
                headerStyle: { fontWeight: 'bold' },
                filterable: false
            },
            {
                Header: "Actions",
                headerStyle: { fontWeight: 'bold' },
                Cell: props => {
                    return(
                        <Link to="" onClick={() => { console.log(props.row._original);this.detailsRow(props.row.idCommittee)}}><button className="btn btn-primary">Details</button></Link>
                    )
                },
                sortable: false,
                filterable: false,
                width: 100,
                maxWidth: 100,
                minWidth: 100
            }
        ]
        return (
            <div id="page-wrapper" style={{}}>
                <div className="row">
                    <div className="col-lg-12">
                        <link href="/Content/PagedList.css" rel="stylesheet" type="text/css" />
                        <h2>Committees in CS Department</h2>
                        <hr></hr>
                        
                        <ReactTable className ="-striped -highlight"
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
                </div>
            </div>
        )
    }
}
