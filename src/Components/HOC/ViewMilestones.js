import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import ReactTable from "react-table-6";
import "react-table-6/react-table.css";


export default class ViewMilestones extends Component {

    
    constructor (props) {
        super(props);
        this.state = {
            data: []
        }
    }

    async componentDidMount() {
        await axios.get('http://localhost:3307/ViewMilestones').then(
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

        {
            const columns = [
            //     {
            //     Header: "ID",
            //     accessor:"idMilestone"
                
            // },
               { 
                Header: "Name",
                accessor:"Name",
                style:{
                    textAlign:"center"
                }
            },
            {
                Header: "Create Date",
                accessor:"CreateDate",
                filterable:'',
                style:{
                    textAlign:"center"
                }

            }, 
            {
                Header: "Completion Date",
                accessor:"CompleteOn",
                filterable:'',
                style:{
                    textAlign:"center"
                }

            },
            {
                Header: "Total Task",
                accessor: "TotalTask",
                filterable:'',
                style:{
                    textAlign:"center"
                }

            },       
            {
                Header: "Status",
                accessor: "Status",
                style:{
                    textAlign:"center"
                }
    

            },
            {
                Header:"Committee",
                accessor:"CommitteeName",
                filterable:'',
                style:{
                    textAlign:"center"
                }

            }
]
        return (
            <div>
                <div id="page-wrapper" style={{}}>
                    <div className="row">
                        <div className="col-lg-12">
                            <br></br>
                            <h2>Milestone</h2>
                            
                            <hr></hr>
                            <ReactTable
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
}
