import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'
import SelectSearch from 'react-select-search'

import MultiSearchSelect from "react-search-multi-select";

export default class CreateCommittee extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            CommitteeName: '',
            goal: '',
            committeeCreationDate: null,
            HeadName: '',
            values: ["Allison","Arthur","Beryl","Chantal","Cristobal","Danielle","Dennis","Ernesto","Felix","Fay","Grace","Gaston","Gert","Gordon"]
        }
    }
    handleChange = (arr) => {
        console.log(arr);
      }

    changeHandlerHeadName = (e) => {
        this.setState({HeadName: e.target.value})
    }

    changeHandlerDate = (e) => {
        this.setState({committeeCreationDate: e.target.value})
    }

    changeHandlerCommitteeName = (e) => {
        this.setState({CommitteeName: e.target.value})
    }

    changeHandlerGoal = (e) => {
        this.setState({goal: e.target.value})
    }
    
    // changeHandlerMOC = (e) => {
    //     this.setState({MOCname: e.target.value})
    // }
    submitHandler = e => {
        e.preventDefault()
        console.log(this.state)
        Axios.post("http://localhost:3307/createCommittee/", this.state)
        .then(response =>{
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
    }
    render() {
        const { CommitteeName, goal, committeeCreationDate, Name } = this.state
        const options = [
            {name: 'Swedish', value: 'sv'},
            {name: 'English', value: 'en'},
        ]
        return (
            <div>
                <div id="page-wrapper" style={{}}>
                    <div className="row">
                        <div className="col-lg-12">
                            <h2>Create Committee</h2>
                            <hr></hr>
                            <form onSubmit={this.submitHandler} action="/HOD/CreateCommittee"><input name="__RequestVerificationToken" type="hidden" defaultValue="9VoIdSnaplP2kJk8caDA2b19kWHDL5FZMPBNnUz4ZVSzNY-_C4Q_pZXVjyMjDp3OFtATglj0Lxb7vb1SILyaZMfQuz5DCse0Da26Y-8t5Cv_nPNZZYtO8CEUhhZuaIwz0" />    <div className="form-horizontal">
                                <div className="form-group">
                                    <label className="control-label col-md-2" htmlFor="SemesterNo">Date</label>
                                    <div className="col-md-10">
                                        <input type="date" className="form-control text-box single-line" name = "committeeCreationDate" value = {committeeCreationDate} onChange = {this.changeHandler}></input>
                                        {/* <span className="field-validation-valid" data-valmsg-for="SemesterNo" data-valmsg-replace="true" /> */}
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="control-label col-md-2" htmlFor="SectionNo">Committee name</label>
                                    <div className="col-md-10">
                                    <input type="text" className="form-control text-box single-line" name = "CommitteeName" value = {CommitteeName} onChange = {this.changeHandler}></input>
                                        {/* <input className="form-control text-box single-line" data-val="true" data-val-required="The Section field is required." id="SectionNo" name="SectionNo" type="text" defaultValue /> eg. A,B,C...
                                        <span className="field-validation-valid" data-valmsg-for="SectionNo" data-valmsg-replace="true" /> */}
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="control-label col-md-2" htmlFor="SectionNo">Head</label>
                                    <div className="col-md-10">
                                    {/* <input type="text" className="form-control text-box single-line"></input> */}
                                    {/* <div class="dropdown">
                                        <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Select the Head
                                        <span class="caret"></span></button>
                                    </div> */}
                                    <SelectSearch options={options} value="" name="language" placeholder="choose" />
                                        {/* <input className="form-control text-box single-line" data-val="true" data-val-required="The Section field is required." id="SectionNo" name="SectionNo" type="text" defaultValue /> eg. A,B,C...
                                        <span className="field-validation-valid" data-valmsg-for="SectionNo" data-valmsg-replace="true" /> */}
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="control-label col-md-2" htmlFor="SectionNo" for="comment">Goal</label>
                                    <div className="col-md-10">
                                    <textarea class="form-control" rows="5" id="comment" name = "goal" value = {goal} onChange = {this.changeHandler}></textarea>
                                    {/* <input type="input" className="form-control text-box single-line"></input> */}
                                        {/* <input className="form-control text-box single-line" data-val="true" data-val-required="The Section field is required." id="SectionNo" name="SectionNo" type="text" defaultValue /> eg. A,B,C...
                                        <span className="field-validation-valid" data-valmsg-for="SectionNo" data-valmsg-replace="true" /> */}
                                    </div>
                                </div>
                                
                                <div className="form-group">
                                    <label className="control-label col-md-2" htmlFor="SectionNo"> Add Members</label>
                                    <div className="col-md-10">
                                        <div style={{display: 'flex', justifyContent: 'left'}}>
                                            <MultiSearchSelect searchable={true} showTags={true} multiSelect={true} width="500px" onSelect={this.handleChange} options={this.state.values}/>
                                        </div>
                                    {/* <div class="dropdown"> */}
                                        {/* <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Select the Participants
                                        <span class="caret"></span></button> */}

                                    {/* <ul class="dropdown-menu">
                                        <li>
                                            <a href="#">
                                                <label class="checkbox">
                                                    <input type="checkbox" value=""/>Kamran Abbasi
                                                </label>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <label class="checkbox">
                                                    <input type="checkbox" value=""/>Rohan Ilyas
                                                </label>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <label class="checkbox">
                                                    <input type="checkbox" value=""/>Musab Khatri
                                                </label>
                                            </a>
                                        </li>
                                    </ul>  */}

                                {/* </div> */}
                                    {/* <input type="search" className="form-control text-box single-line"></input> */}
                                        {/* <input className="form-control text-box single-line" data-val="true" data-val-required="The Section field is required." id="SectionNo" name="SectionNo" type="text" defaultValue /> eg. A,B,C...
                                        <span className="field-validation-valid" data-valmsg-for="SectionNo" data-valmsg-replace="true" /> */}
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="control-label col-md-2" htmlFor="SectionNo">Head of Committee</label>
                                    <div className="col-md-10">
                                    <input type="search" className="form-control text-box single-line" name = "Name" value = {Name} onChange = {this.changeHandler}></input>
                                        {/* <input className="form-control text-box single-line" data-val="true" data-val-required="The Section field is required." id="SectionNo" name="SectionNo" type="text" defaultValue /> eg. A,B,C...
                                        <span className="field-validation-valid" data-valmsg-for="SectionNo" data-valmsg-replace="true" /> */}
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-md-offset-2 col-md-10">
                                        <input type="submit" defaultValue="Create" className="btn btn-default" />
                                    </div>
                                </div>
                            </div>
                            </form>
                            <div>
                                <Link to="/HOD/ViewCommittees">Back to List</Link>
                            </div>
                        </div>
                        {/* /.col-lg-12 */}
                    </div>
                    {/* /.row */}
                </div>
                <hr />
            </div>

        )
    }
}
