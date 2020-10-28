var express = require('express');
var Router = express.Router();
var db = require('../../../database/connectionDB');

Router.get('/', function (req, res) {
    db.query('SELECT DISTINCT users.idUser,users.Name FROM roles, users, user_roles WHERE user_roles.Users_idUser= users.idUser AND user_roles.roles_roles_id= roles.roles_id AND roles.roles_id!=6 AND roles.roles_id!=1 AND roles.roles_id!=2;', function (err, result) {
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
    let Users_idUser = req.body.userID;
    let Date = req.body.date;
    let Time = req.body.time;
    let Duration = req.body.duration;
    let MeetingMinutes = req.body.meetingminutes;
    let Agenda = req.body.agenda;
    let Venue = req.body.venue;
    let ParticipantInvited = req.body.participantInvited;
    let Committee_idCommittee=req.body.Committee;

    var values = [Date,Time,Duration,MeetingMinutes,Agenda,Venue,ParticipantInvited,Committee_idCommittee,Users_idUser];
    console.log(values);
    db.query('INSERT INTO `meeting`(`Date`, `Time`, `Duration`, `MeetingMinutes`, `Agenda`, `Venue`,`ParticipantInvited`,`Committee_idCommittee`,`Users_idUser`) VALUES (?)', [values], function (err, result) {

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