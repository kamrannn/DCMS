import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ReactTable from "react-table-6";
import "react-table-6/react-table.css"

export default class ViewMeeting extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        const url = "http://localhost:3306/viewRecentMeetingMOC";
        fetch(url, {
            method: "GET"
        }).then(response => response.json()).then(post => {
            this.setState({posts: post.result})
        })
    }
    render() {
        const columns = [ 
            {
                Header: "Date",
                accessor: "Date",
                headerStyle: { fontWeight: 'bold' },
                style: {
                    textAlign: "center"
                },
                sortable: false
            },
            {
                Header: "Time",
                accessor: "Time",
                headerStyle: { fontWeight: 'bold' },
                style: {
                    textAlign: "center"
                },
                sortable: false,
                filterable: false
            },
            {
                Header: "Duration",
                accessor: "Duration",
                headerStyle: { fontWeight: 'bold' },
                style: {
                    textAlign: "center"
                },
                sortable: false
            },
            {
                Header: "Agenda",
                accessor: "Agenda",
                headerStyle: { fontWeight: 'bold' },
                style: {
                    textAlign: "center"
                }
            },
            {
                Header: "Venue",
                accessor: "Venue",
                headerStyle: { fontWeight: 'bold' },
                style: {
                    textAlign: "center"
                }
            },
            {
                Header: "Participants Invited",
                accessor: "ParticipantInvited",
                headerStyle: { fontWeight: 'bold' },
                style: {
                    textAlign: "center"
                }
            },
            {
                Header: "Head of Committee",
                accessor: "Name",
                sortable: false,
                headerStyle: { fontWeight: 'bold' },
                style: {
                    textAlign: "center"
                }
            },
            {
                Header: "Actions",
                headerStyle: { fontWeight: 'bold' },
                Cell: props => {
                    return(
                        // <a href="" className="btn btn-sm btn-danger"> Delete</a> 
                        <Link to="" onClick={() => { if(window.confirm('Delete the item?')){ this.deleteRow(props.row.idMeeting)}}}><button className="btn btn-primary">Delete</button></Link>
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
                        <h2>Recent Meeting Details</h2>
                        <hr></hr>
                        <ReactTable className = "-stripped -highlight"
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
