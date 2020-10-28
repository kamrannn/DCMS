const express= require('express');
const Router = express.Router();
var db= require('../../database/connectionDB');
require('dotenv').config;

Router.get('/', (req, res) =>{
    db.query('SELECT * FROM Reviews, users WHERE users.idUser= Reviews.Users_idUser and Reviews.Roles_rolesid = 2', (err, data)=>{
        res.json({
            result: data
        })
    })
});


module.exports = Router;
