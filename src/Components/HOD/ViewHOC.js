import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ReactTable from "react-table-6";
import "react-table-6/react-table.css"

export default class ViewHOC extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: []
        }
    }
    componentDidMount() {
        const url = "http://localhost:3306/viewDetailsHOC";
        fetch(url, {
            method: "GET"
        }).then(response => response.json()).then(post => {
            this.setState({posts: post.result})
        })
    }
    detailsRow(id){

    }
    updateRow(id){

    }

    render() {
        const columns = [ 
            {
                Header: "Name",
                accessor: "Name",
                style:{
                    textAlign:"center"
                },
                headerStyle: { fontWeight: 'bold' },
                sortable: false
            },
            {
                Header: "Contact",
                accessor: "PhoneNo",
                style:{
                    textAlign:"center"
                },
                headerStyle: { fontWeight: 'bold' },
                sortable: false
            },
            {
                Header: "Assigning Date",
                accessor: "committeeCreationDate",
                style:{
                    textAlign:"center"
                },
                headerStyle: { fontWeight: 'bold' },
                sortable: false
            },
            {
                Header: "Committee Name",
                accessor: "CommitteeName",
                style:{
                    textAlign:"center"
                },
                headerStyle: { fontWeight: 'bold' }
            },
            {
                Header: "Actions",
                headerStyle: { fontWeight: 'bold' },
                Cell: props => {
                    return(
                        // <a href="" className="btn btn-sm btn-danger"> Delete</a> 
                        <Link to="" onClick={() => { console.log(props.row._original);this.deleteRow(props.row.idUser)}}><button className="btn btn-primary">Delete</button></Link>
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
                        <Link to="" onClick={() => { console.log(props.row._original);this.updateRow(props.row.idUser)}}><button className="btn btn-primary">Edit</button></Link>
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
                        <br />
                        <h3>Head of Committees</h3>
                        <br />
                        <ReactTable className="-striped -highlight"
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

        )
    }
}

