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
        const url = "http://localhost:3307/viewCommittee";
        fetch(url, {
            method: "GET"
        }).then(response => response.json()).then(post => {
            this.setState({posts: post.result})
        })
    }

    deleteRow(idCommittee) {
        const url = `http://localhost:3307/viewCommittee/delCommittee/${idCommittee}`;
        fetch(url, {
            method: "DELETE"
        })
    }

    updateRow(id){

    }
    
    render() {
        const columns = [ 
            {
                Header: "CommitteeId",
                accessor: "idCommittee",
                style: {
                    textAlign: "center"
                },
                width: 100,
                maxWidth: 100,
                minWidth: 100
            },
            {
                Header: "Committee Name",
                accessor: "CommitteeName",
                sortable: false
            },
            {
                Header: "Goal",
                accessor: "goal",
                sortable: false,
                filterable: false
            },
            {
                Header: "Head",
                accessor: "Name",
                sortable: false
            },
            {
                Header: "Creation Date",
                accessor: "committeeCreationDate"
            },
            {
                Header: "Desolving Date",
                accessor: "committeeDesolveDate"
            },
            {
                Header: "Total Members",
                accessor: "Email"
            },
            {
                Header: "Description",
                accessor: "Description",
                sortable: false,
                filterable: false
            },
            {
                Header: "Actions",
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
            <div>
                <div id="page-wrapper" style={{}}>
                    <div className="row">
                       <div className="col-lg-12">
                            <link href="/Content/PagedList.css" rel="stylesheet" type="text/css" />
                            <h2>Committees in CS Department</h2>
                            <hr></hr>


                            {/* <form action="/HOD/ViewCommittees" method="get" onsubmit="return check(this) && false;">    <div style={{ display: 'flex' }}>
                                <p style={{ paddingTop: 7, marginLeft: 20 }}> <b>Search:</b></p> <select className="form-control" id="ListItems" name="ListItems" style={{ marginLeft: 5 }}><option selected="selected" value>Select Search Criteria</option>
                                    <option value="Name">Search by Name</option>
                            <option value="email">Search by Email</option>
                                </select>
                            <p style={{ paddingTop: 7 }} /> <input className="form-control" id="SearchString" name="SearchString" style={{ marginLeft: 5 }} type="text" defaultValue />
                                <input type="submit" defaultValue="Search" className="btn btn-primary" style={{ marginLeft: 5 }} />
                            </div>
                            </form><br /> */}
                            <ReactTable
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
                            
                            


                            <table class="table table-bordered">
                                <thead>
                                     <tr>
                                         <th scope="col">#</th>
                                         <th scope="col">Committee Name</th>
                                         <th scope="col">Goal</th>
                                         <th scope="col">Head</th>
                                         <th scope="col">Creation Date</th>
                                         <th scope="col">Desolving Date</th>
                                         <th scope="col">Total Members</th>
                                         <th scope="col">Description</th>
                                         <th scope="col">Assign</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        
                                        <td>FYP Committee</td>
                                        <td>To Do FYP evaluation of Spring 2020</td>
                                        <td>Kamran Abbasi</td>
                                        <td>20-08-2020</td>
                                        <td>30-08-2020</td>
                                        <td>20</td>
                                        <td>Description of Committee Goes here</td>
                                        <td><Link to="/HOD/ViewCommittees" onClick={() => (window.confirm('Delete the item?'))}><button className="btn btn-primary">Delete</button></Link></td>
                                        <td><Link to="/HOD/ViewCommittees" onClick={() => (window.confirm('Edit the item?'))}><button className="btn btn-primary">Edit</button></Link></td>
                                        <td><Link to="/HOD/DetailsAlumni" onClick={() => (window.confirm('Details the item?'))}><button className="btn btn-primary">Details</button></Link></td>
                                    
                                            </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Exams Committee</td>
                                        <td>To Do Exams evaluation of Spring 2020</td>
                                        <td>Dr. Musab Khatri</td>
                                        <td>20-07-2020</td>
                                        <td>10-08-2020</td>
                                        <td>10</td>
                                        <td>Description of Committee Goes here</td>
                                        <td><Link to="/HOD/ViewCommittees" onClick={() => (window.confirm('Delete the item?'))}><button className="btn btn-primary">Delete</button></Link></td>
                                        <td><Link to="/HOD/ViewCommittees" onClick={() => (window.confirm('Edit the item?'))}><button className="btn btn-primary">Edit</button></Link></td>
                                        <td><Link to="/HOD/DetailsAlumni" onClick={() => (window.confirm('Details the item?'))}><button className="btn btn-primary">Details</button></Link></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Thesis Committee</td>
                                        <td>To Do Thesis evaluation of Fall 2020</td>
                                        <td>Dr. Yasir Faheem</td>
                                        <td>20-10-2020</td>
                                        <td>30-12-2020</td>
                                        <td>5</td>
                                        <td>Description of Committee Goes here</td>
                                        <td><Link to="/HOD/DetailsAlumni" onClick={() => (window.confirm('Delete the item?'))}><button className="btn btn-primary">Delete</button></Link></td>
                                        <td><Link to="/HOD/DetailsAlumni" onClick={() => (window.confirm('Edit the item?'))}><button className="btn btn-primary">Edit</button></Link></td>
                                        <td><Link to="/HOD/DetailsAlumni" onClick={() => (window.confirm('Details the item?'))}><button className="btn btn-primary">Details</button></Link></td>                                    
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                         {/* /.col-lg-12 */}
                     </div>
                     {/* /.row */}
                 </div>
                 <hr />
             </div>
        );
    }
}
