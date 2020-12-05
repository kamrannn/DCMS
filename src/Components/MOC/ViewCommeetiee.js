import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ReactTable from "react-table-6";
import "react-table-6/react-table.css"
import axios from 'axios';

export default class ViewCommittees extends Component {

    constructor(props) {
        super(props);

        this.state = {
            role : '',
            name : '',
            email : '',
            id : '',
            posts: []
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


        await axios.get('http://localhost:3306/viewCommitteeMOC',  { headers: {
            'X-Custom-Header': localStorage.getItem('userid')
        }}).then(res => {this.setState({posts: res.data.result})});
        
        // await axios.all([decryptToken, viewCommitteeGet]).then(
        //     axios.spread((...allData) => {
        //         this.setState({
        //             role: allData[0].data.role,
        //             name: allData[0].data.name,
        //             email: allData[0].data.email,
        //             id: allData[0].data.userId
        //         })
        //         var userID = this.state.id
        //         localStorage.setItem('userid', userID)
        //         localStorage.setItem('name', this.state.email)

        //         console.log(allData[0].data);
        //         // console.log(result2.data);
        //     })
        // )
    }

    render() {
        const columns = [ 
            {
                Header: "Committee Name",
                accessor: "CommitteeName",
                style: {
                    textAlign: "center"
                },
                headerStyle: { fontWeight: 'bold' },
                sortable: false
            },
            {
                Header: "Goal",
                accessor: "goal",
                sortable: false,
                style: {
                    textAlign: "center"
                },
                headerStyle: { fontWeight: 'bold' },
                filterable: false
            },
            {
                Header: "Creation Date",
                accessor: "committeeCreationDate",
                style: {
                    textAlign: "center"
                },
                headerStyle: { fontWeight: 'bold' }
            },
            {
                Header: "Desolving Date",
                accessor: "committeeDesolveDate",
                style: {
                    textAlign: "center"
                },
                headerStyle: { fontWeight: 'bold' },
            },
            {
                Header: "Description",
                accessor: "Description",
                sortable: false,
                style: {
                    textAlign: "center"
                },
                headerStyle: { fontWeight: 'bold' },
                filterable: false
            },
            {
                Header: "Actions",
                headerStyle: { fontWeight: 'bold' },
                Cell: props => {
                    return(
                        <Link to="" onClick={() => { console.log(props.row._original);this.detailsRow(props.row.idCommittee)}}><button className="btn btn-primary">Details</button></Link>
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

                        <ReactTable className ="-striped -highlight"
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
            </div>
        )
    }
}
