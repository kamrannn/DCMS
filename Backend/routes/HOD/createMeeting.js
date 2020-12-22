var express = require('express');
var Router = express.Router();
var db = require('../../database/connectionDB');

Router.get('/', function (req, res) {
    db.query('SELECT DISTINCT users.idUser,users.Name FROM roles, users, user_roles WHERE user_roles.Users_idUser= users.idUser AND user_roles.roles_roles_id= roles.roles_id AND roles.roles_id!=6 AND roles.roles_id!=2 AND roles.roles_id!=1', function (err, result) {
        if (err) {
            res.json({
                success: false,
                err: 'Unexpected Error occurred. Try Again! '
            })
        }
        if (result) {
            res.json(result);
        }
    });
})  
Router.post('/', function (req, res) {
    // let idMilestone = req.body.idMilestone;
    let createUser = req.body.user;
    let Date = req.body.date;
    let Time = req.body.time;
    let Duration = req.body.duration;
    let Agenda = req.body.agenda;
    let Venue = req.body.venue;
    let ParticipantInvited = req.body.participantInvited;

    var values = [Date,Time,Duration,Agenda,Venue,ParticipantInvited.length,createUser];
    console.log(values);
    db.query('INSERT INTO `meeting`(`Date`, `Time`, `Duration`, `Agenda`, `Venue`,`ParticipantInvited`, `createMeetingUser`) VALUES (?)', [values], function (err, result) 
    {
        if (err) {
            res.json({
                success: false,
                err: 'Can not interted right know. Try again!'
            })
        }
        var meetingId= result.insertId;
        if(result){
            for (var e in ParticipantInvited) 
                    {
                        ParticipantInvitedId=ParticipantInvited[e].value;
                        var values1= [meetingId,ParticipantInvitedId, ParticipantInvited.length];
                        // console.log(values3);
                        db.query('INSERT INTO `meetingparticipant`(`Meeting_idMeeting`, `Users_idUser`, `Attendance`) VALUES (?)', [values1], function (err2, result2)
                        {
                            // if (err2) 
                            //     {
                            //         res.json({
                            //             success: false,
                            //             err2: 'Can not interted right know. Try again!'
                            //         });
                            //         return;
                            //         // console.log(err2);
                            //     };
                            // if(result2){
                            //     res.json({
                            //         success:true
                            //     })
                            //     // console.log(result2)
                            // }
                        });
                    }
            console.log("1 record inserted");
            res.json({
            success: true
        })
        }
    });
 });
 Router.get('/CommitteeList', function (req, res) {
    db.query('SELECT DISTINCT committee.idCommittee,committee.CommitteeName FROM committee', function (err, result) {
        if (err) {
            res.json({
                success: false,
                err: 'Unexpected Error occurred. Try Again! '
            })
        }
        if (result) {
            res.json(result);
        }
    });
})  
Router.post('/CommitteeList', function (req, res) {
    // let idMilestone = req.body.idMilestone;
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