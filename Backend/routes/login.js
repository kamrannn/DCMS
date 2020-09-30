const bcrypt = require('bcrypt');
const express= require('express');
const Router = express.Router();
var db= require('../database/connectionDB');

Router.get('/', (req, res) =>{
    db.query('SELECT * FROM `users`', (err, data)=>{
        res.json({
            result: data
        })
    })
})


Router.post('/',function(req, res){
    let email = req.body.email;
    let password = req.body.password;

    db.query('SELECT * FROM `users` WHERE users.Email=? AND users.Password = ?  LIMIT 1',[email,password],function (err,data) {
        if(err){
            res.json({
                success: false,
                msg: err.message
            });
            return;
        }
        if(data && data.length==1){
            res.json({
                success:true,
                id: data[0].idUser,
                email: data[0].Email,
                name: data[0].Name,
                role: data[0].Role
            });
        }
    });

}); 

module.exports = Router;
