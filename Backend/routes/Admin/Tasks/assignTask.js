var express = require('express');
var Router = express.Router();
var db = require('../../../database/connectionDB');

Router.get('/', function (req, res) {

    db.query('SELECT DISTINCT users.idUser,users.Name FROM roles, users, user_roles WHERE user_roles.Users_idUser= users.idUser AND user_roles.roles_roles_id= roles.roles_id AND roles.roles_id!=6 AND roles.roles_id!=1 AND roles.roles_id!=2;', (err, data)=>{
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
    // let idMilestone = req.body.idMilestone;
    let Users_idUser = req.body.userID;
    let Description = req.body.Description;
    let Status = req.body.Status;
    let AssignDate = req.body.AssignDate;
    let Deadline = req.body.Deadline;
    let uploadFile = req.body.uploadFile;

    var values = [Description,Status,AssignDate,Deadline, Users_idUser];
    console.log(values)
    db.query('INSERT INTO `task`(`Description`, `Status`, `AssignDate`, `Deadline`, `Users_idUser`) VALUES (?)', [values], function (err, result) {
        if (err) {
            res.json({
                success: false,
                err:err.message
            })
            console.log(err.message);
        }
        if(result){
            res.json({
                success: true
            });
        }
            
    });
});
module.exports = Router;