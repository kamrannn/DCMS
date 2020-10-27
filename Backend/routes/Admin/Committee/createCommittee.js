const express= require('express');
const Router = express.Router();
var db= require('../../../database/connectionDB');


Router.get('/', function (req, res) {

    // res.redirect('/viewCommittees')
    db.query('SELECT DISTINCT users.idUser,users.Name FROM roles, users, user_roles WHERE user_roles.Users_idUser= users.idUser AND user_roles.roles_roles_id= roles.roles_id AND roles.roles_id!=6 AND roles.roles_id!=1;', (err, data)=>{
        if (err) {
            res.json({
                success: false,
                err: 'Unexpected Error occurred. Try Again! '
            })
        }
        if (data) {
            res.json(data);
        }
    });
});


Router.post('/', function (req, res) {
    let CommitteeName = req.body.CommitteeName;
    let CommitteeGoal = req.body.CommitteeGoal;
    let CommitteeCreationDate = req.body.CommitteeCreationDate;
    let CommitteeDesolvingDate = req.body.CommitteeDesolvingDate;
    let CommitteeDescription = req.body.CommitteeDescription;
    let headID = req.body.headID;
    let Members = req.body.Members;

    // for (var e in Members) {
    //     console.log('Employer ID: ', Members[e].value);
    // }

    var values = [CommitteeName, CommitteeGoal,CommitteeCreationDate,CommitteeDesolvingDate,CommitteeDescription];
    db.query('INSERT INTO `committee`(`CommitteeName`, `goal`, `committeeCreationDate`, `committeeDesolveDate`, `Description`) VALUES (?)', [values], function (err, result) 
    {
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
