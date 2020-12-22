import { Injectable } from '@angular/core';
import { map, filter, find, switchMap, tap, catchError, mergeMap } from 'rxjs/operators';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SevicesService {

  httpOptions = {
    headers: new HttpHeaders({


      
      'Content-Type':  'application/json',
      'x-custom-header': '3'

    })
  };

  constructor(private http:HttpClient) { }

  loginUser(bodyData){
    console.log("this is service response", bodyData);
    return this.http.post<any>("http://localhost:3306/login",
    bodyData, this.httpOptions);
  }

  //HOD

  viewCommitteeHOD(){

    
    return this.http.get("http://localhost:3306/viewCommitteeHOD");


  }

  AssignedTaskHOD(){

    
    return this.http.get("http://localhost:3306/AssignedTaskHOD");


  }
  viewRecentMeetingHOD(){

    
    return this.http.get("http://localhost:3306/viewRecentMeetingHOD");


  }

  viewDetailsHOC(){

    
    return this.http.get("http://localhost:3306/viewDetailsHOC");


  }

  viewCMADMIN(){

    
    return this.http.get("http://localhost:3306/viewCMADMIN");


  }

  //HOC

  viewCommitteeHOC(data){
    console.log("this is hoc data", JSON.stringify(data))

   let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'x-custom-header': JSON.stringify(data)
      })
    }; 
    return this.http.get("http://localhost:3306/CommitteesHoc", httpOptions);
  }

  AllassignTasksHoc(data){
    console.log("this is hoc data", JSON.stringify(data))

   let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'x-custom-header': JSON.stringify(data)
      })
    }; 
    return this.http.get("http://localhost:3306/AllassignTasksHoc", httpOptions);
  }

  MeetingRecordsHoc(data){
    console.log("this is hoc data", JSON.stringify(data))

   let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'x-custom-header': JSON.stringify(data)
      })
    }; 
    return this.http.get("http://localhost:3306/MeetingRecordsHoc", httpOptions);
  }

//MOC

  viewCommitteeMOC(data){
    console.log("this is hoc data", JSON.stringify(data))
   let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'x-custom-header': JSON.stringify(data)
      })
    }; 
    return this.http.get("http://localhost:3306/viewCommitteeMOC", httpOptions);
  }

  viewRecentMeetingMOC(data){
    console.log("this is hoc data", JSON.stringify(data))
   let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'x-custom-header': JSON.stringify(data)
      })
    }; 
    return this.http.get("http://localhost:3306/viewRecentMeetingMOC", httpOptions);
  }
  viewTaskMOC(data){
    console.log("this is hoc data", JSON.stringify(data))
   let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'x-custom-header': JSON.stringify(data)
      })
    }; 
    return this.http.get("http://localhost:3306/viewTaskMOC", httpOptions);
  }
}
