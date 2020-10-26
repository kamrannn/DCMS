import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import ReactTables from "../../../node_modules/react-table-v6";
import "react-table-v6/react-table.css";

export default class AssignedTask extends Component {

    constructor (props) {
        super(props);
        this.state = {
            data: []
        }
    }

componentDidMount(){
    const url="http://localhost:3306/viewAssignedTasks";
    
    fetch(url,{
        method: "GET"
    }).then(response=> response.json()).then(data=>{
         //console.log("Committees",data)
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
                Header: "Task ID",
                accessor:"idTask",
                style:{
                    textAlign:"center"
                }
            },
            {
                Header: "Task Description",
                accessor:"Description",
                filterable:'',
                style:{
                    textAlign:"center"
                }

            }, 
            {
                Header: "Status",
                accessor:"Status",
                filterable:'',
                style:{
                    textAlign:"center"
                }

            },
            {
                Header: "Assigned Date",
                accessor: "AssignDate",
                filterable:'',
                style:{
                    textAlign:"center"
                }

            },       
            {
                Header: "Deadline",
                accessor: "Deadline",
                style:{
                    textAlign:"center"
                }
    

            },
            {
                Header:"File uploaded",
                accessor:"uploadFile",
                filterable:'',
                style:{
                    textAlign:"center"
                }

            },
            {
                Header:"Comment",
                accessor:"Comment",
                filterable:'',
                style:{
                    textAlign:"center"
                }

            },
            {
                Header:"Name",
                accessor:"Name",
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
                            <h2>Tasks Record</h2>
                            
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
