import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import ReactTable from "react-table-6";
import "react-table-6/react-table.css";

export default class CreateMeeting extends Component {

     
    constructor (props) {
        super(props)
        this.state = {
            //ID:'',
            Date: '',
            Time:'',
            Duration: '',
            MeetingMinutes: '',
            Agenda: '',
            Venue: '',
            ParticipantInvited:'',
            Committee:''
            
        };
    }
    // handleIDChange = (event) => {
    //     this.setState({
    //         ID: event.target.value
    //     })

    // }
    handleDateChange = (event) => {
        this.setState({
            Date: event.target.value
        });

    }
    handleTimeChange = (event) => {
        this.setState({
            Time: event.target.value
        });

    }
    handleDurationChange = (event) => {
        this.setState({
            Duration: event.target.value
        });
    }
    handleMeetingMinutesChange = (event) => {
        this.setState({
            MeetingMinutes: event.target.value
        });
    }
    handleAgendaChange = (event) => {
        this.setState({
            Agenda: event.target.value
        });
    }
    handleVenueChange = (event) => {
        this.setState({
            Venue: event.target.value
        });
    }

    handleParticipantInvitedChange = (event) => {
        this.setState({
            ParticipantInvited: event.target.value
        });
    }
    handleCommitteeChange = (event) => {
        this.setState({
            Committee: event.target.value
        });
    }


    // resetForm() {
    //     this.setState({
    //         Name: '',
    //         CreateDate: '',
    //         CompletionDate: '',
    //         TotalTask: '',
    //         Status: ''
    //     })
    // }

    CreateMeeting = async () => {

        try {
            var Dates = this.state.Date;
            var Times = this.state.Time;
            var Durations = this.state.Duration;
            var MeetingMinute = this.state.MeetingMinutes;
            var Agendas = this.state.Agenda;
            var Venues = this.state.Venue;
            var ParticipantInviteds = this.state.ParticipantInvited;
            var Committees= this.state.Committee;

            var res = await axios({
                method: 'post',
                url: 'http://localhost:3307/CallMeetings',
                data: {
                    date: Dates,
                    time: Times,
                    duration: Durations,
                    meetingminutes:MeetingMinute,
                    agenda :Agendas,
                    venue :Venues,
                    participantInvited:ParticipantInviteds,
                    Committee:  Committees
                }
            })
            var result = res.data;
            console.log(result);
            if (result.success) {
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
        return (
            <div>
                <div id="page-wrapper" style={{}}>
                    <div className="row">
                        <div className="col-lg-12">
                            <h2>Call Meeting</h2>

                            <div className="form-horizontal">

                                <div className="form-group">
                                    <label className="control-label col-md-2" >Date</label>
                                    <div className="col-md-10">
                                        <input  value={this.state.Date} onChange={this.handleDateChange}  className="form-control text-box single-line" data-val="true" data-val-number="" data-val-range="" data-val-required="" id="date" name="date" type="date" defaultValue />
                                        <span className="field-validation-valid" data-valmsg-for="SemesterNo" data-valmsg-replace="true" />
                                    </div>
                                </div>


                                <div className="form-group">
                                    <label className="control-label col-md-2" >Time</label>
                                    <div className="col-md-10">
                                        <input  value={this.state.Time} onChange={this.handleTimeChange}  className="form-control text-box single-line" data-val="true" data-val-required="The Section field is required." id="time" name="time" type="time" defaultValue /> 
                                        <span className="field-validation-valid" data-valmsg-for="SectionNo" data-valmsg-replace="true" />
                                    </div>
                                </div>
                                
                                
                                <div className="form-group">
                                    <label className="control-label col-md-2">Duration</label>
                                    <div className="col-md-10">
                                        <input  value={this.state.Duration} onChange={this.handleDurationChange}  className="form-control text-box single-line" data-val="true" data-val-required="The Section field is required." id="duration" name="duration" type="text" defaultValue /> 
                                        <span className="field-validation-valid" data-valmsg-for="SectionNo" data-valmsg-replace="true" />
                                    </div>
                                </div>
                                
                                <div className="form-group">
                                    <label className="control-label col-md-2">MeetingMinutes</label>
                                    <div className="col-md-10">
                                        <input  value={this.state.MeetingMinutes} onChange={this.handleMeetingMinutesChange}  className="form-control text-box single-line" data-val="true" name="minutes" type="text" defaultValue /> 
                                        <span className="field-validation-valid" data-valmsg-for="SectionNo" data-valmsg-replace="true" />
                                    </div>
                                </div>
                                
                                <div className="form-group">
                                    <label className="control-label col-md-2" htmlFor="SectionNo">Agenda</label>
                                    <div className="col-md-10">
                                        <textarea id="agenda"  value={this.state.Agenda} onChange={this.handleAgendaChange}  name="agenda" placeholder="Write something.."></textarea>
                                    </div>
                                </div>
                                
                                <div className="form-group">
                                    <label className="control-label col-md-2" htmlFor="SectionNo">Venue</label>
                                    <div className="col-md-10">
                                        <input value={this.state.Venue} onChange={this.handleVenueChange}  className="form-control text-box single-line" data-val="true" id="place" name="place" type="text" defaultValue /> 
                                        <span className="field-validation-valid" data-valmsg-for="SectionNo" data-valmsg-replace="true" />
                                    </div>
                                
                                </div>
                                
                                
                                <div className="form-group">
                                <label className="control-label col-md-2" htmlFor="SectionNo">Participant Invited</label>
                                <div className="col-md-2">
                                        <select onClick={this.handleParticipantInvitedChange} className="form-control" id="Year" name="Year">
                                            <option value={'Select '}>Select</option>
                                            <option value={1}>1</option>
                                            <option value={2}>2</option>
                                            <option value={3}>3</option>
                                            <option value={4}>4</option>
                                            <option value={5}>5</option>
                                            <option value={6}>6</option>
                                            <option value={0}>7</option>
                                            <option value={0}>8</option>
                                            <option value={0}>9</option>
                                            <option value={20}>10</option>
                                            <option value={11}>11</option>
                                            <option value={12}>12</option>
                                            <option value={13}>13</option>
                                            <option value={14}>14</option>
                                            <option value={15}>15</option>
                                            <option value={16}>16</option>
                                            <option value={17}>17</option>
                                            <option value={18}>18</option>
                                            <option value={19}>19</option>
                                            <option value={20}>20</option>


                                        </select>
                                    </div>
                                    </div>

                                <div className="form-group">
                                    <label className="control-label col-md-2" htmlFor="SectionNo">Select Commiittee</label>
                                    <div className="col-md-4">
                                    <select onClick={this.handleCommitteeChange} className="form-control" id="Year" name="Year">
                                            <option value={'Select '}>Select</option>
                                            <option value={1}>1-Exams Committee   </option>
                                            <option value={2}>2-Evaluation Committee   </option>
                                    </select>
                                    </div>
                                </div>
                          
                                
                                <div className="form-group">
                                    <div className="col-md-offset-2 col-md-10">
                                        <input type="submit" onClick={() => this.CreateMeeting()} className="btn btn-default" />
                                        <Link to="/HOC/MeetingRecords"> </Link>
                                    </div>
                                </div>


                            </div>
                            <div>
                                <Link to="/HOC/MeetingRecords">Back to List</Link>
                            </div>
                        </div>
                    </div>
                </div>
            
                <hr />
            </div>

        )
    }
}
