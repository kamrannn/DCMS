var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var login = require('./routes/login');

//var of committee
var viewCommittees = require('./routes/Admin/Committee/viewCommittees');
var ADMINcreateCommittee = require('./routes/Admin/Committee/createCommittee');

//var Tasks
var viewAssignedTasks= require('./routes/Admin/Tasks/viewAssignedTasks');
var assignTaskADMIN= require ('./routes/Admin/Tasks/assignTask');

//var Meetings
var viewRecentMeetings= require('./routes/Admin/Meetings/viewRecentMeetings')
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS");
  next();
})

// app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/login', login);

/////////////////committee Routers/////////////////////////////////
app.use('/viewCommittees',viewCommittees);

app.use('/ADMINcreateCommittee',ADMINcreateCommittee);

/////////////////Task Routers/////////////////////////////////
app.use('/viewAssignedTasks',viewAssignedTasks);
app.use('/assignTaskADMIN',assignTaskADMIN);

/////////////////Meeting Routers/////////////////////////////////
app.use('/viewRecentMeetings',viewRecentMeetings);

///////////////////////////////////////////////////////////////////////

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
