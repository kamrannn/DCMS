import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ReactTable from "react-table-6";
import "react-table-6/react-table.css"

export default class AddMeeting extends Component {

    constructor(props) {
        super(props);

        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        const url = "http://localhost:3307/viewUpcommingMeeting";
        fetch(url, {
            method: "GET"
        }).then(response => response.json()).then(post => {
            this.setState({posts: post.result})
        })
    }
    render() {
        const columns = [ 
            {
                Header: "MeetingID",
                accessor: "idMeeting",
                style: {
                    textAlign: "center"
                },
                width: 100,
                maxWidth: 100,
                minWidth: 100
            },
            {
                Header: "Date",
                accessor: "Date",
                sortable: false
            },
            {
                Header: "Time",
                accessor: "Time",
                sortable: false,
                filterable: false
            },
            {
                Header: "Duration",
                accessor: "Duration",
                sortable: false
            },
            {
                Header: "Agenda",
                accessor: "Agenda"
            },
            {
                Header: "Venue",
                accessor: "Venue"
            },
            {
                Header: "Participants Invited",
                accessor: "ParticipantInvited"
            },
            {
                Header: "Head of Committee",
                accessor: "Name",
                sortable: false
            }
        ]
        return (
            <div>
                <div id="page-wrapper" style={{}}>
                    <div className="row">
                        <div className="col-lg-12">
                            <h2>Upcoming Meeting Details</h2>
                            <hr></hr>
                            <ReactTable
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

                            {/* <table className="table table-striped table-condensed table-bordered">
                                <tbody><tr>
                                    <th>
                                        Meeting ID
              </th>
                                    <th>
                                        Date
              </th>
                                    <th>
                                        Time
              </th>
              <th>
                                        Duration
              </th>
              <th>
                                        Agenda
              </th>
              <th>
                                        Venue
              </th>
              <th>
                                        participants Invited
              </th>
                                    <th />
                                </tr>
                                    <tr>
                                        <td>
                                            1
              </td>
                                        <td>
                                            20-08-2020
              </td>
                                        <td>
                                            9:00 am
              </td>
              <td>
                                            1 hour
              </td>
                                        <td>
                                            Scope discussion
              </td>
                                        <td>
                                            room G06, CS Department
              </td>
              <td>
                                            7
              </td>
                                        <td>
                                        
                <a href="/MOC/AddMeeting">Delete</a>
                                        </td>
                                    </tr>

                                </tbody></table> */}
                            <div id="spinner" className="spinner" style={{ display: 'none' }}>
                                <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', margin: '0 auto', backgroundColor: '#000', opacity: '.4', zIndex: 999999 }}>
                                    <img id="img-spinner" src={`${process.env.PUBLIC_URL}/Assets/spinner.gif`} alt="Loading" style={{ position: 'absolute', height: 'auto!important', width: 'auto!important', left: '47%', top: '47%' }} /><br />
                                    <p style={{ position: 'absolute', height: 'auto !important', width: 'auto !important', left: '51%', top: '51%', fontSize: 20, color: 'white' }}>Please Wait</p>
                                </div>
                            </div>
                        </div>
                        {/* /.col-lg-12 */}
                    </div>
                    {/* /.row */}
                </div>
                <hr />
            </div>

        )
    }
}
