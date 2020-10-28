var express = require('express');
var Router = express.Router();
var db = require('../../../database/connectionDB');


Router.get('/', function (req, res, next) {
    db.query('SELECT Description,Status,AssignDate,Deadline,uploadFile,Comment, users.Name FROM task, users WHERE task.Users_idUser= users.idUser;', (err, data)=>{
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