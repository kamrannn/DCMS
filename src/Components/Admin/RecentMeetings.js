import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ReactTables from "../../../node_modules/react-table-v6";
import "react-table-v6/react-table.css";

export default class RecentMeetings extends Component {

    
    constructor (props) {
        super(props);
        this.state = {
            data: []
        }
    }

componentDidMount(){
    const url="http://localhost:3306/viewRecentMeetings";
    
    fetch(url,{
        method: "GET"
    }).then(response=> response.json()).then(data=>{
        console.log("Committees",data)
        this.setState({data:data})
    })
}
    render() {
        const columns = [
            //     {
            //     Header: "ID",
            //     accessor:"idMilestone"
                
            // },
            { 
                Header: "Meeting ID",
                accessor:"idMeeting",
                style:{
                    textAlign:"center"
                }
            },
            {
                Header: "Meeting Date",
                accessor:"Date",
                filterable:'',
                style:{
                    textAlign:"center"
                }

            }, 
            {
                Header: "Meeting Time",
                accessor:"Time",
                filterable:'',
                style:{
                    textAlign:"center"
                }

            },
            {
                Header: "Duration",
                accessor: "Duration",
                filterable:'',
                style:{
                    textAlign:"center"
                }

            },       
            {
                Header: "MeetingMinutes",
                accessor: "MeetingMinutes",
                style:{
                    textAlign:"center"
                }
    

            },
            {
                Header:"Agenda",
                accessor:"Agenda",
                filterable:'',
                style:{
                    textAlign:"center"
                }

            },
            {
                Header:"Venue",
                accessor:"Venue",
                filterable:'',
                style:{
                    textAlign:"center"
                }

            },
            {
                Header:"ParticipantInvited",
                accessor:"ParticipantInvited",
                filterable:'',
                style:{
                    textAlign:"center"
                }

            },
            {
                Header:"CommitteeName",
                accessor:"CommitteeName",
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
                            <ReactTables
                              columns = {columns}
                              data = {this.state.data}
                              filterable
                              defaultPageSize={10}>
                            </ReactTables>      
                        </div>
                       
                    </div>
                </div>
                <hr />
            </div>
        )
    }
}
