import { Component, OnInit } from '@angular/core';
import {SevicesService}  from '../sevices.service';
import { Router , ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-homedetail4',
  templateUrl: './homedetail4.page.html',
  styleUrls: ['./homedetail4.page.scss'],
})
export class Homedetail4Page implements OnInit {

  data: any;
  role: any;
  table : any;
  api: any;

  constructor(
    public router: Router,
    private activatedRoute: ActivatedRoute,
    private service : SevicesService
  ) { }

  viewTable(){
    if( this.role == 'HOD'){
      this.service.viewDetailsHOC().subscribe(data => {
        console.log("this is hoddata assign task", data['result']);
        this.table = data['result'];
      });
    }
    // else if(this.api=='View Meeting' ){
    //   this.service.viewRecentMeetingHOD().subscribe(data => {
    //     console.log("this is Moc data meeting", data);
    //     this.table = data['result']
    //   })
    // } 
  }

  ngOnInit() {
     this.role = this.activatedRoute.snapshot.paramMap.get('ids');
     this.api = this.activatedRoute.snapshot.paramMap.get('api');
    console.log("this is the parmssss data", this.role);
    this.viewTable();

  }

}
