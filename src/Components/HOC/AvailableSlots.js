import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import ReactTable from "react-table-6";
import "react-table-6/react-table.css";


export default class SubmittedTask extends Component {
    constructor (props) {
        super(props);
        this.state = {
            data: []
        }
    }

    async componentDidMount() {
        await axios.get('http://localhost:3307/Availableslots').then(
            res => {
                this.setState({
                    data: res.data.sessionsData
                })
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
               { 
                Header: "S.No",
                accessor:"",
                width:"100",
                filterable:'',
                style:{
                    textAlign:"center"
                }
            },
            {
                Header: "Date",
                accessor:"",
                width:"150",
                filterable:'',
                style:{
                    textAlign:"center"
                }

            }, 
            {
                Header: "Start Time",
                accessor:"",
                width:"150",
                filterable:'',
                

                style:{
                    textAlign:"center"
                }

            },

            {
                Header: "End Time",
                accessor:"",
                width:"150",
                filterable:'',
                

                style:{
                    textAlign:"center"
                }

            },
            {
                Header: "Duration",
                accessor:"",
                width:"150",
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
                            <h2>Available Slot Details</h2>
                            
                            <hr></hr>
                            <ReactTable
                              columns = {columns} 
                              data = {this.state.data}
                              filterable
                              noDataText={"Please Wait..."}
                              defaultPageSize={5}>
                            </ReactTable>      

                        


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
