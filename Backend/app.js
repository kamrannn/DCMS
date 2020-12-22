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
var myTaskHoc= require('./routes/HOC/Tasks/myTask');
var SubmittedTaskHoc = require('./routes/HOC/Tasks/SubmittedTask');
var RejectedTaskHoc = require('./routes/HOC/Tasks/RejectedTask');
var CallMeetingHoc = require('./routes/HOC/Meetings/CallMeeting');
var MeetingRecordHoc = require('./routes/HOC/Meetings/MeetingRecord');
var AvailableslotHoc = require('./routes/HOC/Meetings/Availableslot');
var CommitteeReportHoc = require('./routes/HOC/ReportGeneration/CommitteeReport');
var ReportCommitteeMemHoc = require('./routes/HOC/ReportGeneration/ReportCommitteeMem');




var viewCommitteeHOD = require('./routes/HOD/viewCommittee')
var createCommitteeHOD = require('./routes/HOD/createCommittee')
var viewUpcommingMeetingHOD = require('./routes/HOD/UpcommingMeeting')
var viewRecentMeetingHOD = require('./routes/HOD/RecentMeeting')
var viewCommitteeMembersHOD = require('./routes/HOD/viewCommitteeMember')
var viewFacultyHOD = require('./routes/HOD/viewFaculty')
var viewDetailsHOD = require('./routes/HOD/viewHOD')
var viewDetailsHOC = require('./routes/HOD/viewHOC')
var viewDetailsStudent = require('./routes/HOD/viewStudent')
var AssignTaskHOD = require('./routes/HOD/AssignTask')
var AssignedTaskHOD = require('./routes/HOD/AssignedTask')
var createMeetingHOD = require('./routes/HOD/createMeeting')

var viewCommitteeMOC = require('./routes/MOC/viewCommittee')
var createCommitteeMOC = require('./routes/MOC/createCommittee')
var viewUpcommingMeetingMOC = require('./routes/MOC/UpcommingMeeting')
var viewRecentMeetingMOC = require('./routes/MOC/RecentMeeting')
var viewMilestoneMOC = require('./routes/MOC/viewMilestone')
var SetMilestoneMOC = require('./routes/MOC/SetMilestone')
var viewTaskMOC = require('./routes/MOC/viewTask')
var HOCReviews = require('./routes/MOC/HOCReviews')
var HODReviews = require('./routes/MOC/HODReviews')

//var of committee
var viewCommitteesADMIN = require('./routes/Admin/Committee/viewCommittees');
var ADMINcreateCommittee = require('./routes/Admin/Committee/createCommittee');

//var Tasks
var viewAssignedTasksADMIN= require('./routes/Admin/Tasks/viewAssignedTasks');
var assignTaskADMIN= require ('./routes/Admin/Tasks/assignTask');

//var Meetings
var viewRecentMeetingsADMIN= require('./routes/Admin/Meetings/viewRecentMeetings');
var viewUpcommingMeetingADMIN= require('./routes/Admin/Meetings/upcomingMeetings');
var createMeetingADMIN = require('./routes/Admin/Meetings/createMeeting');

//var dataCM
var viewCMADMIN= require('./routes/Admin/dataCM/viewCM');

//var dataFaculty
var viewFacultyADMIN= require('./routes/Admin/dataFaculty/viewFaculty');

//var dataHOD
var viewHODADMIN= require('./routes/Admin/dataHOD/viewHOD');

//var dataHOC
var viewHOCADMIN= require('./routes/Admin/dataHOC/viewHOC');

//var dataStudent
var viewStudentADMIN= require('./routes/admin/dataStudent/viewStudent');

var viewTaskFaculty = require('./routes/Faculty/viewTask');



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
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, X-Custom-Header");
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
app.use('/myTaskHoc',myTaskHoc);
app.use('/SubmittedTasksHoc',SubmittedTaskHoc);
app.use('/RejectedTasksHoc',RejectedTaskHoc);
app.use('/CallMeetingsHoc',CallMeetingHoc);
app.use('/MeetingRecordsHoc',MeetingRecordHoc);
app.use('/AvailableslotsHoc',AvailableslotHoc);
app.use('/CommitteeReportsHoc',CommitteeReportHoc);
app.use('/ReportCommitteeMemsHoc',ReportCommitteeMemHoc);



app.use('/viewCommitteeHOD/', viewCommitteeHOD)
app.use('/createCommitteeHOD/', createCommitteeHOD)
app.use('/viewUpcommingMeetingHOD/', viewUpcommingMeetingHOD)
app.use('/viewRecentMeetingHOD/', viewRecentMeetingHOD)
app.use('/viewCommitteeMembersHOD/', viewCommitteeMembersHOD)
app.use('/viewFacultyHOD/', viewFacultyHOD)
app.use('/viewDetailsHOD/', viewDetailsHOD)
app.use('/viewDetailsHOC/', viewDetailsHOC)
app.use('/viewDetailsStudent/', viewDetailsStudent)
app.use('/AssignTaskHOD/', AssignTaskHOD)
app.use('/AssignedTaskHOD/', AssignedTaskHOD)
app.use('/createMeetingHOD/', createMeetingHOD)

app.use('/viewCommitteeMOC/', viewCommitteeMOC)
app.use('/createCommitteeMOC/', createCommitteeMOC)
app.use('/viewUpcommingMeetingMOC/', viewUpcommingMeetingMOC)
app.use('/viewRecentMeetingMOC/', viewRecentMeetingMOC)
app.use('/viewMilestoneMOC/', viewMilestoneMOC)
app.use('/SetMilestoneMOC/', SetMilestoneMOC)
app.use('/viewTaskMOC/', viewTaskMOC)
app.use('/HOCReviews/', HOCReviews)
app.use('/HODReviews/', HODReviews)

/////////////////committee Routers/////////////////////////////////
app.use('/viewCommitteesADMIN',viewCommitteesADMIN);

app.use('/ADMINcreateCommittee',ADMINcreateCommittee);

/////////////////Task Routers/////////////////////////////////
app.use('/viewAssignedTasksADMIN',viewAssignedTasksADMIN);
app.use('/assignTaskADMIN',assignTaskADMIN);

/////////////////Meeting Routers/////////////////////////////////
app.use('/viewRecentMeetingsADMIN',viewRecentMeetingsADMIN);
app.use('/viewUpcommingMeetingsADMIN', viewUpcommingMeetingADMIN)
app.use('/createMeetingADMIN',createMeetingADMIN);

//dataCommitteeMember
app.use('/viewCMADMIN',viewCMADMIN);

//dataFaculty
app.use('/viewFacultyADMIN',viewFacultyADMIN);

//dataHOD
app.use('/viewHODADMIN',viewHODADMIN);

//dataHOC
app.use('/viewHOCADMIN',viewHOCADMIN);

//dataStudent
app.use('/viewStudentADMIN',viewStudentADMIN);

app.use('/viewTaskFaculty', viewTaskFaculty)

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
