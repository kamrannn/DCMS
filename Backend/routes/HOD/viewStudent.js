const express= require('express');
const Router = express.Router();
var db= require('../../database/connectionDB');
require('dotenv').config;

Router.get('/', (req, res) =>{
    db.query('SELECT * FROM users, Student WHERE users.idUser = Student.Users_idUser', (err, data)=>{
        res.json({
            result: data
        })
        //UNION ALL SELECT role_name FROM users, user_roles, roles Where users.idUser = user_roles.Users_idUser and roles.roles_id = user_roles.roles_roles_id

    })
});


module.exports = Router;
