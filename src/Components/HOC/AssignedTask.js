import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import ReactTable from "react-table-6";
import "react-table-6/react-table.css";

export default class AssignedTask extends Component {

       
    constructor (props) {
        super(props);
        this.state = {
            data: []
        }
    }

    async componentDidMount() {
        await axios.get('http://localhost:3307/AllassignTasks').then(
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
           
               { 
                Header: "ID",
                accessor:"",
                width:"30",
                filterable:'',
                style:{
                    textAlign:"center"
                }
            },
            {
                Header: "First Name",
                accessor:"",
                width:"150",

                style:{
                    textAlign:"center"
                }

            }, 
            {
                Header: "Last Name",
                accessor:"",
                width:"150",

                filterable:'',

                style:{
                    textAlign:"center"
                }

            },
            {
                Header: "Major Role",
                accessor:"",
                width:"150",
                filterable:'',
                

                style:{
                    textAlign:"center"
                }

            },
            {
                Header: "Assigning Date",
                accessor:"",
                width:"150",
                filterable:'',
                

                style:{
                    textAlign:"center"
                }

            },
            {
                Header: "Task Deadine",
                accessor:"",
                width:"150",
                filterable:'',
                

                style:{
                    textAlign:"center"
                }

            },
            {
                Header: "Task Description",
                accessor:"",
                width:"150",
                filterable:'',
                

                style:{
                    textAlign:"center"
                }

            },
            {
                Header: "Action",
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
                            <h2>Lists of Assigned Tasks</h2>
                            
                            <hr></hr>
                            <ReactTable
                              columns = {columns} 
                              data = {this.state.data}
                              filterable
                              noDataText={"Please Wait..."}
                              defaultPageSize={10}>
                            </ReactTable>      

                        


                       
                        </div>
                       
                    </div>
                </div>
            </div>


        )
    }
}
}
