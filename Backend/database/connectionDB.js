
var mysql = require ('mysql');

var express = require ('express');

const db = mysql.createConnection({
    host:"localhost",
    user: "root",
    password:"",
    database:"dcms"
});

db.connect(function(err){
    if(err){
        console.log('DB Error');
        throw err;
    }
    else{
        console.log("connect")
    }
});

module.exports= db;