const express= require('express');
const Router = express.Router();
var db= require('../../../database/connectionDB');
require('dotenv').config;

Router.get('/', (req, res) =>{
    db.query('SELECT * FROM users, Student WHERE users.idUser = Student.Users_idUser', (err, data)=>{
        res.json({
            result: data
        });
    })
});

module.exports = Router;
