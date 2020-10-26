import React, { Component } from 'react'
import axios from 'axios'
import Select from 'react-select'
import "react-table-6/react-table.css";

export default class CreateCommittee extends Component 
{
    constructor(props){
        super(props)
        this.state = {
        selectOptions : [],
        Members:[],
        headID: "",
        CommitteeName:"",
        CommitteeGoal:"",
        CommitteeCreationDate:"",
        CommitteeDesolvingDate:"",
        CommitteeDescription:"",
        }
    }
    async getOptions(){
        const res = await axios.get('http://localhost:3306/ADMINcreateCommittee')
        const data = res.data
    
        const options = data.map(d => ({
            "value" : d.idUser,
            "label" : d.Name
        }))
    
        this.setState({selectOptions: options})
    }
    
    //////////////////////////////////
    handleChange(e){
        this.setState({headID:e.value})
        // console.log(e.value)
    }
    
    handleMultipleMembersChange(e){
        this.setState({Members: e})
        console.log(e)
       }

    handleCommitteeNameChange = (event) => {
        this.setState({
            CommitteeName: event.target.value,
        })
    }

    handleCommitteeGoalchange = (event) => {
        this.setState({
            CommitteeGoal: event.target.value
        })
    }
    
    handleCommitteeCreationDatechange = (event) => {
        this.setState({
            CommitteeCreationDate: event.target.value
        })
    }

    handleCommitteeDesolvingDatechange = (event) => {
        this.setState({
            CommitteeDesolvingDate: event.target.value
            
        })
    }

    handleCommitteeDescriptionchange = (event) => {
        this.setState({
            CommitteeDescription: event.target.value
        })
    }
    ///////////////////////////////////////////////////
    componentDidMount(){
        this.getOptions()
    }
// componentDidMount(){
//         const url="http://localhost:3306/ADMINcreateCommittee";
        
//         fetch(url,{
//             method: "GET"
//         }).then(response=> response.json()).then(data=>{
//             // console.log("Committees",data)
//             this.setState({data:data})
//         })
//     }

CreateCommittee = async () => {

    try {
        var CommitteeName = this.state.CommitteeName;
        var CommitteeGoal = this.state.CommitteeGoal;
        var CommitteeCreationDate = this.state.CommitteeCreationDate;
        var CommitteeDesolvingDate = this.state.CommitteeDesolvingDate;
        var CommitteeDescription = this.state.CommitteeDescription;
        var headID =  this.state.headID;
        var Members = this.state.Members;

        var res = await axios({
            method: 'post',
            url: 'sessions',
            data: {
                CommitteeName: CommitteeName,
                CommitteeGoal: CommitteeGoal,
                CommitteeCreationDate: CommitteeCreationDate,
                CommitteeDesolvingDate: CommitteeDesolvingDate,
                CommitteeDescription: CommitteeDescription,
                headID : headID,
                Members: Members
            }
        })
        var result = res.data;
        console.log(result.success);
        if (result) {
            alert("Session Added");
            // this.resetForm();
        }

        else if (result && result.success === false) {
            alert(result.err);
            // this.resetForm();
        }
    }
    catch (e) {
        console.log(e);
    }
}


    render() {
        // console.log(this.state.selectOptions)
        return (
        <div>
            <div id="page-wrapper" style={{}}>
                <h1>Create Committee</h1>
                <hr></hr>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="form-group">
                                <label className="control-label col-md-2">
                                    Committee Name
                                </label>
                                <div className="col-md-10">
                                    <input onChange={this.handleCommitteeNameChange} type="input" className="form-control text-box single-line"></input>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br></br>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="form-group">
                                <label className="control-label col-md-2">
                                    Committee Goal
                                </label>
                                <div className="col-md-10">
                                    <input onChange={this.handleCommitteeGoalchange} type="text" className="form-control text-box single-line"></input>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br></br>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="form-group">
                                <label className="control-label col-md-2">
                                    Committee Creation Date
                                </label>
                                <div className="col-md-10">
                                    <input onChange={this.handleCommitteeCreationDatechange} type="date" className="form-control text-box single-line"></input>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br></br>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="form-group">
                                <label className="control-label col-md-2">
                                    Committee Desolving Date
                                </label>
                                <div className="col-md-10">
                                    <input onChange={this.handleCommitteeDesolvingDatechange} type="date" className="form-control text-box single-line"></input>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br></br>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="form-group">
                                <label className="control-label col-md-2">
                                    Committee Description
                                </label>
                                <div className="col-md-10">
                                    {/* <input type="text" className="form-control text-box single-line"></input> */}
                                    <textarea onChange={this.handleCommitteeDescriptionchange}></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br></br>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="form-group">
                                <label className="control-label col-md-2">
                                    Select Head
                                </label>
                                <div className="col-md-10">
                                    <Select options={this.state.selectOptions} onChange={this.handleChange.bind(this)} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <br></br>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="form-group">
                                <label className="control-label col-md-2">
                                    Add Members
                                </label>
                                <div className="col-md-10">
                                    <Select options={this.state.selectOptions} onChange={this.handleMultipleMembersChange.bind(this)} isMulti />
                                </div>
                            </div>
                        </div>
                    </div>
                    <br></br>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="form-group">
                            <input type="submit" defaultValue="Create" onClick={() => this.CreateCommittee()} className="btn btn-primary" />
                            </div>
                        </div>
                    </div>
                    <br></br>
                </div>
        
        </div>

        )
    }
    // render() {
    //     return (
    //         <div>
    //             <div id="page-wrapper" style={{}}>
    //                 <div className="row">
    //                     <div className="col-lg-12">
    //                         <h2>Create Committee</h2>
    //                         <hr></hr>
    //                         <form action="/Admin/CreateCommittee"><input name="__RequestVerificationToken" type="hidden" defaultValue="9VoIdSnaplP2kJk8caDA2b19kWHDL5FZMPBNnUz4ZVSzNY-_C4Q_pZXVjyMjDp3OFtATglj0Lxb7vb1SILyaZMfQuz5DCse0Da26Y-8t5Cv_nPNZZYtO8CEUhhZuaIwz0" />    <div className="form-horizontal">
    //                             <div className="form-group">
    //                                 <label className="control-label col-md-2" htmlFor="SemesterNo">Date</label>
    //                                 <div className="col-md-10">
    //                                     <input type="date" className="form-control text-box single-line"></input>
    //                                     {/* <span className="field-validation-valid" data-valmsg-for="SemesterNo" data-valmsg-replace="true" /> */}
    //                                 </div>
    //                             </div>
    //                             <div className="form-group">
    //                                 <label className="control-label col-md-2" htmlFor="SectionNo">Committee name</label>
    //                                 <div className="col-md-10">
    //                                 <input type="text" className="form-control text-box single-line"></input>
    //                                     {/* <input className="form-control text-box single-line" data-val="true" data-val-required="The Section field is required." id="SectionNo" name="SectionNo" type="text" defaultValue /> eg. A,B,C...
    //                                     <span className="field-validation-valid" data-valmsg-for="SectionNo" data-valmsg-replace="true" /> */}
    //                                 </div>
    //                             </div>
    //                             <div className="form-group">
    //                                 <label className="control-label col-md-2" htmlFor="SectionNo">Head</label>
    //                                 <div className="col-md-10">
    //                                 {/* <input type="text" className="form-control text-box single-line"></input> */}
    //                                 <div class="dropdown">
    //                                     <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Select the Head
    //                                     <span class="caret"></span></button>
    //                                 </div>
    //                                     {/* <input className="form-control text-box single-line" data-val="true" data-val-required="The Section field is required." id="SectionNo" name="SectionNo" type="text" defaultValue /> eg. A,B,C...
    //                                     <span className="field-validation-valid" data-valmsg-for="SectionNo" data-valmsg-replace="true" /> */}
    //                                 </div>
    //                             </div>
    //                             <div className="form-group">
    //                                 <label className="control-label col-md-2" htmlFor="SectionNo" for="comment">Goal</label>
    //                                 <div className="col-md-10">
    //                                 <textarea class="form-control" rows="5" id="comment"></textarea>
    //                                 {/* <input type="input" className="form-control text-box single-line"></input> */}
    //                                     {/* <input className="form-control text-box single-line" data-val="true" data-val-required="The Section field is required." id="SectionNo" name="SectionNo" type="text" defaultValue /> eg. A,B,C...
    //                                     <span className="field-validation-valid" data-valmsg-for="SectionNo" data-valmsg-replace="true" /> */}
    //                                 </div>
    //                             </div>
                                
    //                             <div className="form-group">
    //                                 <label className="control-label col-md-2" htmlFor="SectionNo"> Add Members</label>
    //                                 <div className="col-md-10">
    //                                 <div class="dropdown">
    //                                     <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Select the Participants
    //                                     <span class="caret"></span></button>
    //                                 {/* <ul class="dropdown-menu">
    //                                     <li>
    //                                         <a href="#">
    //                                             <label class="checkbox">
    //                                                 <input type="checkbox" value=""/>Kamran Abbasi
    //                                             </label>
    //                                         </a>
    //                                     </li>
    //                                     <li>
    //                                         <a href="#">
    //                                             <label class="checkbox">
    //                                                 <input type="checkbox" value=""/>Rohan Ilyas
    //                                             </label>
    //                                         </a>
    //                                     </li>
    //                                     <li>
    //                                         <a href="#">
    //                                             <label class="checkbox">
    //                                                 <input type="checkbox" value=""/>Musab Khatri
    //                                             </label>
    //                                         </a>
    //                                     </li>
    //                                 </ul>  */}
    //                             </div>
    //                                 {/* <input type="search" className="form-control text-box single-line"></input> */}
    //                                     {/* <input className="form-control text-box single-line" data-val="true" data-val-required="The Section field is required." id="SectionNo" name="SectionNo" type="text" defaultValue /> eg. A,B,C...
    //                                     <span className="field-validation-valid" data-valmsg-for="SectionNo" data-valmsg-replace="true" /> */}
    //                                 </div>
    //                             </div>
    //                             <div className="form-group">
    //                                 <label className="control-label col-md-2" htmlFor="SectionNo">Head of Committee</label>
    //                                 <div className="col-md-10">
    //                                 <input type="search" className="form-control text-box single-line"></input>
    //                                     {/* <input className="form-control text-box single-line" data-val="true" data-val-required="The Section field is required." id="SectionNo" name="SectionNo" type="text" defaultValue /> eg. A,B,C...
    //                                     <span className="field-validation-valid" data-valmsg-for="SectionNo" data-valmsg-replace="true" /> */}
    //                                 </div>
    //                             </div>
    //                             <div className="form-group">
    //                                 <div className="col-md-offset-2 col-md-10">
    //                                     <input type="submit" defaultValue="Create" className="btn btn-default" />
    //                                 </div>
    //                             </div>
    //                         </div>
    //                         </form>
    //                         <div>
    //                             <Link to="/Admin/ViewCommittees">Back to List</Link>
    //                         </div>
    //                     </div>
    //                     {/* /.col-lg-12 */}
    //                 </div>
    //                 {/* /.row */}
    //             </div>
    //             <hr />
    //         </div>
    //     )
    // }

}
