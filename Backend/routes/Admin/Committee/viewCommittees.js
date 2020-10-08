const express= require('express');
const Router = express.Router();
var db= require('../../../database/connectionDB');


Router.get('/', function (req, res) {
    db.query('SELECT * FROM `committee`', (err, data)=>{
        if (err) {
            res.json({
                success: false,
                err: 'Unexpected Error occurred. Try Again! '
            })
        }
        if (data) {
            res.json({
                viewCommittee: data
            })
        }
    });
})

module.exports = Router;
