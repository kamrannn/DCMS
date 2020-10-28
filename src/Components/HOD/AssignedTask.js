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
    const url="http://localhost:3306/AssignedTaskHOD";
    
    fetch(url,{
        method: "GET"
    }).then(response=> response.json()).then(data=>{
         //console.log("Committees",data)
        this.setState({data:data})
    })
}
    render() {
            const columns = [
            {
                Header: "Task Description",
                accessor:"Description",
                filterable:'',
                style:{
                    textAlign:"center"
                },
                headerStyle: { fontWeight: 'bold' }

            }, 
            {
                Header: "Status",
                accessor:"Status",
                style:{
                    textAlign:"center"
                },
                headerStyle: { fontWeight: 'bold' },
                filterable:''

            },
            {
                Header: "Assigned Date",
                accessor: "AssignDate",
                style:{
                    textAlign:"center"
                },
                headerStyle: { fontWeight: 'bold' },
                filterable:''

            },       
            {
                Header: "Deadline",
                accessor: "Deadline",
                style:{
                    textAlign:"center"
                },
                headerStyle: { fontWeight: 'bold' }
    

            },
            {
                Header:"File uploaded",
                accessor:"uploadFile",
                style:{
                    textAlign:"center"
                },
                headerStyle: { fontWeight: 'bold' },
                filterable:''

            },
            {
                Header:"Comment",
                accessor:"Comment",
                style:{
                    textAlign:"center"
                },
                headerStyle: { fontWeight: 'bold' },
                filterable:''

            },
            {
                Header:"Name",
                accessor:"Name",
                style:{
                    textAlign:"center"
                },
                headerStyle: { fontWeight: 'bold' },
                filterable:''

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
                            <ReactTables className = "-striped -highlight"
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