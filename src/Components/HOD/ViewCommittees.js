import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ReactTable from "react-table-6";
import "react-table-6/react-table.css"

export default class ViewCommittees extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            posts: []
        }
    }
    
    componentDidMount() {
        const url = "http://localhost:3306/viewCommitteeHOD";
        fetch(url, {
            method: "GET"
        }).then(response => response.json()).then(post => {
            this.setState({posts: post.result})
        })
    }

    deleteRow(idCommittee) {
        const url = `http://localhost:3307/viewCommitteeHOD/delCommittee/${idCommittee}`;
        fetch(url, {
            method: "DELETE"
        })
    }

    updateRow(id){

    }
    
    render() {
        const columns = [ 
            {
                Header: "Committee Name",
                accessor: "CommitteeName",
                style:{
                    textAlign:"center"
                },
                headerStyle: { fontWeight: 'bold' },
                sortable: false
            },
            {
                Header: "Goal",
                accessor: "goal",
                style:{
                    textAlign:"center"
                },
                headerStyle: { fontWeight: 'bold' },
                sortable: false,
                filterable: false
            },
            {
                Header: "Creation Date",
                accessor: "committeeCreationDate",
                style:{
                    textAlign:"center"
                },
                headerStyle: { fontWeight: 'bold' }
            },
            {
                Header: "Desolving Date",
                accessor: "committeeDesolveDate",
                style:{
                    textAlign:"center"
                },
                headerStyle: { fontWeight: 'bold' }
            },
            {
                Header: "Description",
                accessor: "Description",
                style:{
                    textAlign:"center"
                },
                headerStyle: { fontWeight: 'bold' },
                sortable: false,
                filterable: false
            },
            {
                Header: "Actions",
                headerStyle: { fontWeight: 'bold' },
                Cell: props => {
                    return(
                        // <a href="" className="btn btn-sm btn-danger"> Delete</a> 
                        <Link to="/HOD/ViewCommittees" onClick={() => { if(window.confirm('Delete the item?')){ this.deleteRow(props.row.idCommittee)}}}><button className="btn btn-primary">Delete</button></Link>
                    )
                },
                sortable: false,
                filterable: false,
                width: 100,
                maxWidth: 100,
                minWidth: 100
            },
            {
                Header: "Actions",
                headerStyle: { fontWeight: 'bold' },
                Cell: props => {
                    return(
                        // <a href="" className="btn btn-sm btn-danger"> Delete</a> 
                        <Link to="/HOD/CreateCommittee" onClick={() => { console.log(props.row._original);this.updateRow(props.row.idCommittee)}}><button className="btn btn-primary">Edit</button></Link>
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
                        <link href="/Content/PagedList.css" rel="stylesheet" type="text/css" />
                        <h2>Committees in CS Department</h2>
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
                       </div>
                 </div>
                 <hr />
             </div>
        );
    }
}
