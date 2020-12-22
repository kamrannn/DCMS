var express = require('express');
var Router = express.Router();
var db = require('../../../database/connectionDB');

Router.get('/', function (req, res) {
    var userId = req.headers['x-custom-header'];
    db.query('SELECT * FROM users, committee, user_roles WHERE users.idUser = user_roles.Users_idUser AND committee.idCommittee = user_roles.Committee_idCommittee and user_roles.roles_roles_id = 3 and committee.Status = 1 AND users.idUser=?',[userId], function (err, result) {
        if (err) {
            res.json({
                success: false,
                err: 'Unexpected Error occurred. Try Again! '
            })
        }
        if (result) {
            res.json(result)
        }
    });
})  
Router.post('/', function (req, res) {
    let createUser = req.body.user;
    let Date = req.body.date;
    let Time = req.body.time;
    let Duration = req.body.duration;
    let Agenda = req.body.agenda;
    let Venue = req.body.venue;
    let Committee = req.body.Committee;

    db.query('SELECT idCM, Name, PhoneNo, CommitteeName, idUser FROM users, committeemembers, committee Where committee.idCommittee = committeemembers.Committee_idCommittee AND users.idUser = committeemembers.Users_idUser and committee.idCommittee = ?',[Committee], (err, data)=>{
        var values = [Date,Time,Duration,Agenda,Venue,Committee,createUser,data.length];
        if(data){
            db.query('INSERT INTO `meeting`(`Date`, `Time`, `Duration`, `Agenda`, `Venue`,`Committee_idCommittee`, `createMeetingUser`, `ParticipantInvited`) VALUES (?)', [values], function (err, result) 
            {
                if (err) {
                    res.json({
                        success: false,
                        err: 'Can not interted right know. Try again!'
                    })
                    return;
                }
            });
        }            
    })
    res.json({
    success: true
})
 });

module.exports = Router;