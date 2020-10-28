import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ReactTable from "react-table-6";
import "react-table-6/react-table.css"

export default class UpcomingMeetings extends Component {

    constructor(props) {
        super(props);

        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        const url = "http://localhost:3306/viewUpcommingMeetingMOC";
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
                style:{
                    textAlign:"center"
                },
                headerStyle: { fontWeight: 'bold' },
                sortable: false
            },
            {
                Header: "Time",
                accessor: "Time",
                style:{
                    textAlign:"center"
                },
                headerStyle: { fontWeight: 'bold' },
                sortable: false,
                filterable: false
            },
            {
                Header: "Duration",
                accessor: "Duration",
                style:{
                    textAlign:"center"
                },
                headerStyle: { fontWeight: 'bold' },
                sortable: false
            },
            {
                Header: "Agenda",
                accessor: "Agenda",
                style:{
                    textAlign:"center"
                },
                headerStyle: { fontWeight: 'bold' }
            },
            {
                Header: "Venue",
                accessor: "Venue",
                style:{
                    textAlign:"center"
                },
                headerStyle: { fontWeight: 'bold' }
                
            },
            {
                Header: "Participants Invited",
                accessor: "ParticipantInvited",
                style:{
                    textAlign:"center"
                },
                headerStyle: { fontWeight: 'bold' }

            },
            {
                Header: "Head of Committee",
                accessor: "Name",
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
                        <h2>Upcoming Meeting Details</h2>
                        <hr></hr>
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

                            
                        
                        {/* /.col-lg-12 */}
                    </div>
                    {/* /.row */}
                </div>
                <hr />
            </div>

        )
    }
}
