import { Component, OnInit } from '@angular/core';
import {SevicesService}  from '../sevices.service';
import { Router , ActivatedRoute} from '@angular/router';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-homedetail3',
  templateUrl: './homedetail3.page.html',
  styleUrls: ['./homedetail3.page.scss'],
})
export class Homedetail3Page implements OnInit {

  data: any;
  role: any;
  table : any;
  api: any;
  userId: any;

  constructor(
    public router: Router,
    private activatedRoute: ActivatedRoute,
    private service : SevicesService,
    public storage: Storage,
  ) { }

  viewTable(){
    if( (this.role == 'HOD') && (this.api == 'View Meeting')){
      this.service.viewRecentMeetingHOD().subscribe(data => {
        console.log("this is hoddata MEETING done task", data['result']);
        this.table = data['result'];
      });
    }
    else if((this.role == 'HOC') && (this.api == 'View Meeting')){
      console.log("this is HOC data  MEETINGTASK")
      this.service.MeetingRecordsHoc(this.userId).subscribe(data => {
        console.log("this is HOC data  MEETINGTASK", data);
        this.table = data['sessionsData']
      })
    } 
    else if((this.role == 'MOC') && (this.api == 'View Meeting')){
      console.log("this is MOC data  MEETINGTASK")
      this.service.viewRecentMeetingMOC(this.userId).subscribe(data => {
        console.log("this is MOC data  MEETINGTASK", data);
        this.table = data['result']
      })
    } 
  }

  ngOnInit() {
    this.storage.get('userId').then((val) => {
     
      this.userId = val;
      console.log('Your userid is', this.userId);
      this.viewTable();
    });
     this.role = this.activatedRoute.snapshot.paramMap.get('ids');
     this.api = this.activatedRoute.snapshot.paramMap.get('api');
    console.log("this is the parmssss data", this.role);
    // this.viewTable();

  }
}
