
var mysql = require ('mysql');

var express = require ('express');

// const db = mysql.createConnection({
//     host:"localhost",
//     user: "root",
//     password:"",
//     database:"dcms"
// });

const db = mysql.createConnection({
    host:"remotemysql.com",
    user: "cO4dIPDQlQ",
    password:"GDmbPithNm",
    database:"cO4dIPDQlQ"
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