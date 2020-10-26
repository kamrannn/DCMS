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
})

module.exports = Router;
