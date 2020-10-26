var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var login = require('./routes/login');
var ViewComittees= require('./routes/HOC/viewComittee');
var Milestones = require('./routes/HOC/SetMilestone');
var ViewMilestone= require('./routes/HOC/ViewMilestone');
var AssignTask= require('./routes/HOC/Assigntask');
var AllassignTask= require('./routes/HOC/AllassignedTask');
var SubmittedTask = require('./routes/HOC/SubmittedTask');
var RejectedTask = require('./routes/HOC/RejectedTask');
var CallMeeting = require('./routes/HOC/CallMeeting');
var MeetingRecord = require('./routes/HOC/MeetingRecord');
var Availableslot = require('./routes/HOC/Availableslot');
var CommitteeReport = require('./routes/HOC/CommitteeReport');
var ReportCommitteeMem = require('./routes/HOC/ReportCommitteeMem');



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

app.use('/Committees',ViewComittees);
app.use('/Milestone',Milestones);
app.use('/ViewMilestones',ViewMilestone);
app.use('/AssignTasks',AssignTask);
app.use('/AllassignTasks',AllassignTask);
app.use('/SubmittedTasks',SubmittedTask);
app.use('/RejectedTasks',RejectedTask);
app.use('/CallMeetings',CallMeeting);
app.use('/MeetingRecords',MeetingRecord);
app.use('/Availableslots',Availableslot);
app.use('/CommitteeReports',CommitteeReport);
app.use('/ReportCommitteeMems',ReportCommitteeMem);



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
