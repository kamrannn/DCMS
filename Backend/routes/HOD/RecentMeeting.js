const express= require('express');
const Router = express.Router();
var db= require('../../database/connectionDB');
require('dotenv').config;

Router.get('/', (req, res) =>{
    db.query('SELECT * FROM users, meeting, user_roles WHERE users.idUser = user_roles.Users_idUser AND meeting.Committee_idCommittee = user_roles.Committee_idCommittee and user_roles.roles_roles_id = 3', (err, data)=>{
        res.json({
            result: data
        })
    })
});



module.exports = Router;
