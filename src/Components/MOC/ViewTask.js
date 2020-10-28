import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ReactTable from "react-table-6";
import "react-table-6/react-table.css"

export default class ViewTask extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: []
        }
    }
    componentDidMount() {
        const url = "http://localhost:3306/viewTaskMOC";
        fetch(url, {
            method: "GET"
        }).then(response => response.json()).then(post => {
            this.setState({posts: post.result})
        })
    }
    submitRow(id){

    }
    render() {
        const columns = [
            { 
                Header: "Assigned Date",
                accessor:"AssignDate",
                headerStyle: { fontWeight: 'bold' },
                style:{
                    textAlign:"center"
                }
            },
            {
                Header: "Assigned to",
                accessor:"Name",
                headerStyle: { fontWeight: 'bold' },
                filterable:'',
                style:{
                    textAlign:"center"
                }
            }, 
            {
                Header: "Due Date",
                accessor:"Deadline",
                headerStyle: { fontWeight: 'bold' },
                filterable:'',
                style:{
                    textAlign:"center"
                }
            },
            {
                Header: "Status",
                accessor: "Status",
                headerStyle: { fontWeight: 'bold' },
                style:{
                    textAlign:"center"
                }
            },
            {
                Header: "Actions",
                headerStyle: { fontWeight: 'bold' },
                Cell: props => {
                    return(
                        // <a href="" className="btn btn-sm btn-danger"> Delete</a> 
                        <Link to="" onClick={() => { if(window.confirm('Delete the item?')){ this.submitRow(props.row.idTask)}}}><button className="btn btn-primary">Submit</button></Link>
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
                        <h2>Tasks</h2><hr></hr>
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
                    </div>
                    {/* /.row */}
                </div>
                <hr />
            </div>

        )
    }
}
