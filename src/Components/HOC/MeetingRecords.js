import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import ReactTable from "react-table-6";
import "react-table-6/react-table.css";


export default class MeetingRecords extends Component {

    
    constructor (props) {
        super(props);
        this.state = {
            data: []
        }
    }

async componentDidMount() {
    await axios.get('http://localhost:3306/MeetingRecordsHoc').then(
        res => {
            this.setState({
                data: res.data.sessionsData
            })
            console.log(res.data.sessionsData)
        },
        err => {
            console.log(err);
        }
    )
}
    render() {
        const columns = [
            //     {
            //     Header: "ID",
            //     accessor:"idMilestone"
                
            // },
            // { 
            //     Header: "Meeting ID",
            //     accessor:"idMeeting",
            //     style:{
            //         textAlign:"center"
            //     }
            // },
            {
                Header: "Meeting Date",
                accessor:"Date",
                headerStyle: { fontWeight: 'bold' },
                filterable:'',
                style:{
                    textAlign:"center"
                }

            }, 
            {
                Header: "Meeting Time",
                accessor:"Time",
                headerStyle: { fontWeight: 'bold' },
                filterable:'',
                style:{
                    textAlign:"center"
                }

            },
            {
                Header: "Duration",
                accessor: "Duration",
                headerStyle: { fontWeight: 'bold' },
                filterable:'',
                style:{
                    textAlign:"center"
                }

            },       
            {
                Header: "MeetingMinutes",
                accessor: "MeetingMinutes",
                headerStyle: { fontWeight: 'bold' },
                style:{
                    textAlign:"center"
                }
    

            },
            {
                Header:"Agenda",
                accessor:"Agenda",
                headerStyle: { fontWeight: 'bold' },
                filterable:'',
                style:{
                    textAlign:"center"
                }

            },
            {
                Header:"Venue",
                accessor:"Venue",
                headerStyle: { fontWeight: 'bold' },
                filterable:'',
                style:{
                    textAlign:"center"
                }

            },
            {
                Header:"ParticipantInvited",
                accessor:"ParticipantInvited",
                headerStyle: { fontWeight: 'bold' },
                filterable:'',
                style:{
                    textAlign:"center"
                }

            },
            {
                Header:"CommitteeName",
                accessor:"CommitteeName",
                headerStyle: { fontWeight: 'bold' },
                filterable:'',
                style:{
                    textAlign:"center"
                }

            },
]
        return (
            <div>
                <div id="page-wrapper" style={{}}>
                    <div className="row">
                        <div className="col-lg-12">
                            <br></br>
                            <h2>Meeting Records</h2>
                            
                            <hr></hr>
                            <ReactTable className="-striped -highlight"
                              columns = {columns}
                              data = {this.state.data}
                              filterable
                              defaultPageSize={10}>
                            </ReactTable>      
                        </div>
                       
                    </div>
                </div>
                <hr />
            </div>
        )
    }
}