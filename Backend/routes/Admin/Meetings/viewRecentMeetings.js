const express= require('express');
const Router = express.Router();
var db= require('../../../database/connectionDB');


Router.get('/', function (req, res, next) {
    db.query('SELECT idMeeting,Date,Time,Duration,MeetingMinutes,Agenda,Venue,ParticipantInvited, committee.CommitteeName FROM meeting, committee WHERE meeting.Committee_idCommittee= committee.idCommittee', (err, data)=>{
        if (err) {
            res.json({
                success: false,
                err: 'Unexpected Error occurred. Try Again! '
            })
        }
        if (data) {
            // res.json({
            //     viewCommittees: data
            // })
            res.json(data);
            // res.render('Committees',{title:'View Committees', viewCommittees: data});
        }
    });
})

module.exports = Router;