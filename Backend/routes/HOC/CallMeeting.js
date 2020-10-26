var express = require('express');
var Router = express.Router();
var db = require('../../database/connectionDB');

Router.get('/', function (req, res) {
    db.query('SELECT * FROM `meeting`', function (err, result) {
        if (err) {
            res.json({
                success: false,
                err: 'Unexpected Error occurred. Try Again! '
            })
        }
        if (result) {
            res.json({
                sessionsData: result
            })
        }
    });
})  
Router.post('/', function (req, res) {
    // let idMilestone = req.body.idMilestone;

    let Date = req.body.date;
    let Time = req.body.time;
    let Duration = req.body.duration;
    let MeetingMinutes = req.body.meetingminutes;
    let Agenda = req.body.agenda;
    let Venue = req.body.venue;
    let ParticipantInvited = req.body.participantInvited;
    let Committee_idCommittee=req.body.Committee;

    var values = [Date,Time,Duration,MeetingMinutes,Agenda,Venue,ParticipantInvited,Committee_idCommittee];
    console.log(values);
    db.query('INSERT INTO `meeting`(`Date`, `Time`, `Duration`, `MeetingMinutes`, `Agenda`, `Venue`,`ParticipantInvited`,`Committee_idCommittee`) VALUES (?)', [values], function (err, result) {

        if (err) {
            res.json({
                success: false,
                err: 'Can not interted right know. Try again!'
            })
        }
        console.log("1 record inserted");
            res.json({
            success: true
        })
    });
 });

module.exports = Router;