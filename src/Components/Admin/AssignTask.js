import React, { Component } from 'react'
import axios from 'axios';
import Select from 'react-select';
import { Link, Redirect } from 'react-router-dom';
import ReactTable from "react-table-6";
import "react-table-6/react-table.css";

export default class AssignTask extends Component {
    
    constructor(props){
        super(props)
        this.state = {
        selectOptions : [],
        userID:"",
        Description:"",
        Status:"",
        AssignDate:"",
        Deadline:"",
        uploadFile:""
        }
    }
    async getOptions(){
        const res = await axios.get('http://localhost:3306/assignTaskADMIN')
        const data = res.data
    
        const options = data.map(d => ({
            "value" : d.idUser,
            "label" : d.Name
        }))

        // console.log(options);
    
        this.setState({selectOptions: options})
    }
    
    //////////////////////////////////
   
    // handleMultipleMembersChange(e){
    //     this.setState({Members: e})
    //     console.log(e)
    //    }

    // handleNameChange = (event) => {
    //     this.setState({
    //         Name: event.target.value,
    //     })
    // }
    handleChange(e){
        this.setState({userID:e.value})
        console.log(e.value)
    }


    handleDescriptionchange = (event) => {
        this.setState({
            Description: event.target.value
        })
    }
    
    handleStatuschange = (event) => {
        this.setState({
            Status: event.target.value
        })
        // console.log(event.target.value)
    }

    handleAssignDatechange = (event) => {
        this.setState({
            AssignDate: event.target.value
        })
        // console.log(event.target.value)
    }

    handleDeadlinechange = (event) => {
        this.setState({
            Deadline: event.target.value
        })
    }

    handleuplaodFilechange = (event) => {
        this.setState({
            uploadFile: event.target.value
        })
    }
    componentDidMount(){
        this.getOptions()
    }

    resetForm() {
        this.setState({
            userID:"",
            Description:"",
            Status:"",
            AssignDate:"",
            Deadline:"",
            uploadFile:"",           
        })
    }
    state = {
        redirect: false
    }
    
    setRedirect = () => {
        this.setState({
        redirect: true
        })
    }
    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/HOC/AssignTasks' />
        }
    }

AssignTask = async () => {

    try {
        var userID  = this.state.userID;
        var Description = this.state.Description;
        var Status = this.state.Status;
        var AssignDate = this.state.AssignDate;
        var Deadline = this.state.Deadline;
        // var uploadFile =  this.state.uploadFile;
        

        var res = await axios({
            method: 'post',
            url: 'http://localhost:3306/assignTaskADMIN',
            data: {
                userID: userID,
                Description: Description,
                Status: Status,
                AssignDate: AssignDate,
                Deadline: Deadline,
                // uploadFile : uploadFile,
          
            }
        })
        var result = res.data;
        console.log(result.success);
        if (result) {
            alert("Task has been Created !!");
            this.resetForm();
        }

        else if (result && result.success === false) {
            alert(result.err);
            this.resetForm();
        }
    }
    catch (e) {
        console.log(e);
    }
}


    render() {
        // console.log(this.state.selectOptions)
        const mystyle = {
            color: "white",
            padding: "20px",
            fontFamily: "Arial",
            textAlign: "center",
            font: "900 40px",
            width:"100%"
        };
        return (
        <div>
            <div id="page-wrapper" style={{}}>
                <h1>Assign Task</h1>
                <hr></hr>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="form-group">
                                <label className="control-label col-md-2">
                                Name
                                </label>
                                <div className="col-md-10">
                                <Select options={this.state.selectOptions} onChange={this.handleChange.bind(this)}  />
                                {/* <input onChange={this.NameChange} type="input" className="form-control text-box single-line" ></input> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <br></br>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="form-group">
                                <label className="control-label col-md-2">
                                    Description
                                </label>
                                <div className="col-md-10">
                                    <input onChange={this.handleDescriptionchange} type="text" className="form-control text-box single-line" ></input>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br></br>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="form-group">
                                <label className="control-label col-md-2">
                                    Status
                                </label>
                                <div className="col-md-10">
                                    {/* <input onChange={this.handleCommitteeCreationDatechange} type="date" className="form-control text-box single-line" defaultValue="2020-10-27"></input> */}
                                    <input onChange={this.handleStatuschange} type="text" className="form-control text-box single-line" />

                                </div>
                            </div>
                        </div>
                    </div>
                    <br></br>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="form-group">
                                <label className="control-label col-md-2">
                                    AsssignDate
                                </label>
                                <div className="col-md-10">
                                    <input onChange={this.handleAssignDatechange} type="date" className="form-control text-box single-line"  placeholder="YYYY-MM-DD" required pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}" ></input>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br></br>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="form-group">
                                <label className="control-label col-md-2">
                                    Deadline
                                </label>
                                <div className="col-md-10">
                                    <input onChange={this.handleDeadlinechange} type="date" className="form-control text-box single-line"  placeholder="YYYY-MM-DD" required pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}" ></input>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br></br>
                    {/* <div className="row">
                        <div className="col-lg-12">
                            <div className="form-group">
                                <label className="control-label col-md-2">
                                    Upload File
                                </label>
                                <div className="col-md-10">
                                 <input  onChange={this.handleuplaodFilechange} type="file" id="myFile" name="filename"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br></br> */}
               
                    <br></br>
                    <div className="row">
                        <div className="col-md-offset-2 col-md-10">
                            <div className="form-group">
                            {/* <input type="submit" defaultValue="Create" onClick={() => this.AssignTask()} className="btn btn-primary" />
                            <Link to="/HOC/AssignTasksHoc"> </Link>  */}
                            <div className="container-fluid" style={mystyle}><Link to="/Admin/ViewCommittees">
                                    <input style={mystyle} type="submit" defaultValue="Create" onClick={() => this.AssignTask()} className="btn btn-primary" /></Link>
                                </div>

                            <div>
                                {/* {this.renderRedirect()}
                                <button onClick={this.setRedirect}><input type="submit" defaultValue="Create" onClick={() => this.CreateCommittee()} className="btn btn-primary" /></button> */}
                            </div>
                            </div>
                        </div>
                    </div>
                    <br></br>
                </div>
        
        </div>

        )
    }

}