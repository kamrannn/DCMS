import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import ReactTable from "react-table-6";
import "react-table-6/react-table.css";

export default class ViewCommittees extends Component {

    constructor(props){
    super(props);

    this.state = {
        role: '',
        name: '',
        email: '',
        id: '',
        data : []
    } 
}

componentDidMount() {
    this.fetchData();
}

fetchData = async () => {
    const loginToken = localStorage.getItem('token');
    console.log(loginToken);

    await axios.get('http://localhost:3306/login/verifyToken', { headers: {
        'X-Custom-Header': loginToken
    }}).then(res =>{
        this.setState({
            role: res.data.role,
            name: res.data.name,
            email: res.data.email,
            id: res.data.userId
        })
        var userID = this.state.id
        localStorage.setItem('userid', userID)
        localStorage.setItem('name', this.state.email)

        console.log(res.data);
    }, err => { console.log(err)});


    await axios.get('http://localhost:3306/CommitteesHoc',  { headers: {
        'X-Custom-Header': localStorage.getItem('userid')
    }}).then(res => {this.setState({data: res.data.sessionsData})});
}
    render() {
        const columns = [
        // // {
        // //     Header:"Committee ID",
        // //     accessor:"idCommittee",
        // //     headerStyle: { fontWeight: 'bold' },
        // //     style:{
        // //         textAlign:"center"
        // //     }

        // },
        {
            Header:"Committee Name",
            accessor:"CommitteeName",
            headerStyle: { fontWeight: 'bold' },
            style:{
                textAlign:"center"
            }

        },
        {
            Header:"Committee Goal",
            accessor:"goal",
            headerStyle: { fontWeight: 'bold' },
            filterable:'',
            style:{
                textAlign:"center"
            }
        },
        // {
        //     Header:" Head ",
        //     accessor:"idCommittee "
        // },
        {
            Header:"Creation Date",
            accessor:"committeeCreationDate",
            headerStyle: { fontWeight: 'bold' },
            filterable:'',

            style:{
                textAlign:"center"
            }
        },
        {
            Header:"Desolving Date",
            accessor:"committeeDesolveDate",
            headerStyle: { fontWeight: 'bold' },
            filterable:'',

            style:{
                textAlign:"center"
            }
        },
        {
            Header:"Description",
            accessor:"Description",
            headerStyle: { fontWeight: 'bold' },
            filterable:'',

            style:{
                textAlign:"center"
            }
        },
        {
            Header: "Actions",
            Cell: props => {
                return (
                    
                    <button href="/HOC/SetMilestoneHoc" className="btn btn-primary"> Assign </button>
                    
                )
                
            }
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
                            <ReactTable className="-striped -highlight"
                              columns = {columns} 
                              data = {this.state.data}
                              filterable
                              defaultPageSize={10}>
                            </ReactTable>      

                    
                         </div>
                <hr />            
                    </div> 
                </div> 
           </div>
           
           );
                }
            }

                            {/* <form action="/HOC/ViewCommittees" method="get" onsubmit="return check(this) && false;">    <div style={{ display: 'flex' }}>
                                <p style={{ paddingTop: 7, marginLeft: 20 }}> <b>Search:</b></p> <select className="form-control" id="ListItems" 
                                  name="ListItems" style={{ marginLeft: 5 }}><option selected="selected" value>Select Search Criteria</option>
                                    <option value="Name">Search by Name</option>
                                    <option value="email">Search by Email</option>
                                </select>
                                <p style={{ paddingTop: 7 }} /> <input className="form-control" id="SearchString" name="SearchString" style={{ marginLeft: 5 }} type="text" defaultValue />
                                <input type="submit" defaultValue="Search" className="btn btn-primary" style={{ marginLeft: 5 }} />
                            </div>
                            </form><br /> */}
        
                            {/* <table class="table table-bordered">
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
                                        <td><Link to="/Admin/DeleteAlumni" onClick={() => (window.confirm('Delete the item?'))}><button className="btn btn-primary">Delete</button></Link></td>
                                        <td><Link to="/Admin/EditAlumni" onClick={() => (window.confirm('Edit the item?'))}><button className="btn btn-primary">Edit</button></Link></td>
<td><Link to="/Admin/DetailsAlumni" onClick={() => (window.confirm('Details the item?'))}><button className="btn btn-primary">Details</button></Link></td>
                                    
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
                                        <td><Link to="/Admin/DeleteAlumni" onClick={() => (window.confirm('Delete the item?'))}><button className="btn btn-primary">Delete</button></Link></td>
                                        <td><Link to="/Admin/EditAlumni" onClick={() => (window.confirm('Edit the item?'))}><button className="btn btn-primary">Edit</button></Link></td>
                                        <td><Link to="/Admin/DetailsAlumni" onClick={() => (window.confirm('Details the item?'))}><button className="btn btn-primary">Details</button></Link></td>
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
                                        <td><Link to="/Admin/DeleteAlumni" onClick={() => (window.confirm('Delete the item?'))}><button className="btn btn-primary">Delete</button></Link></td>
                                        <td><Link to="/Admin/EditAlumni" onClick={() => (window.confirm('Edit the item?'))}><button className="btn btn-primary">Edit</button></Link></td>
<td><Link to="/Admin/DetailsAlumni" onClick={() => (window.confirm('Details the item?'))}><button className="btn btn-primary">Details</button></Link></td>                                    
                                    </tr>
                                </tbody>
                            </table> */}
                        {/* /.col-lg-12 */}                    {/* /.row */}
                             
               