var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
 
var indexRouterHoc = require('./routes/index');
var usersRouterHoc = require('./routes/users');
var login = require('./routes/login');
var ViewComitteesHoc= require('./routes/HOC/Committee/viewComittee');
var MilestonesHoc = require('./routes/HOC/Committee/SetMilestone');
var ViewMilestoneHoc= require('./routes/HOC/Committee/ViewMilestone');
var AssignTaskHoc= require('./routes/HOC/Tasks/Assigntask');
var AllassignTaskHoc= require('./routes/HOC/Tasks/AllassignedTask');
var SubmittedTaskHoc = require('./routes/HOC/Tasks/SubmittedTask');
var RejectedTaskHoc = require('./routes/HOC/Tasks/RejectedTask');
var CallMeetingHoc = require('./routes/HOC/Meetings/CallMeeting');
var MeetingRecordHoc = require('./routes/HOC/Meetings/MeetingRecord');
var AvailableslotHoc = require('./routes/HOC/Meetings/Availableslot');
var CommitteeReportHoc = require('./routes/HOC/ReportGeneration/CommitteeReport');
var ReportCommitteeMemHoc = require('./routes/HOC/ReportGeneration/ReportCommitteeMem');



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
app.use('/usersHoc', usersRouterHoc);
app.use('/login', login);

app.use('/CommitteesHoc',ViewComitteesHoc);
app.use('/MilestoneHoc',MilestonesHoc);
app.use('/ViewMilestonesHoc',ViewMilestoneHoc);
app.use('/AssignTasksHoc',AssignTaskHoc);
app.use('/AllassignTasksHoc',AllassignTaskHoc);
app.use('/SubmittedTasksHoc',SubmittedTaskHoc);
app.use('/RejectedTasksHoc',RejectedTaskHoc);
app.use('/CallMeetingsHoc',CallMeetingHoc);
app.use('/MeetingRecordsHoc',MeetingRecordHoc);
app.use('/AvailableslotsHoc',AvailableslotHoc);
app.use('/CommitteeReportsHoc',CommitteeReportHoc);
app.use('/ReportCommitteeMemsHoc',ReportCommitteeMemHoc);



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
