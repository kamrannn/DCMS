var express = require('express');
var Router = express.Router();
var db = require('../../../database/connectionDB');

Router.get('/', function (req, res) {
    var userId = req.headers['x-custom-header'];
    db.query('SELECT * FROM users, committee, user_roles WHERE users.idUser = user_roles.Users_idUser AND committee.idCommittee = user_roles.Committee_idCommittee and user_roles.roles_roles_id = 3 AND users.idUser=?',[userId], function (err, result) {
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
module.exports = Router;