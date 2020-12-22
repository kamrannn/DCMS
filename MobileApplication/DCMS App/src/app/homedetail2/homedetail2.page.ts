import { Router , ActivatedRoute} from '@angular/router';
import {SevicesService}  from '../sevices.service';
import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-homedetail2',
  templateUrl: './homedetail2.page.html',
  styleUrls: ['./homedetail2.page.scss'],
})
export class Homedetail2Page implements OnInit {

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
    if( (this.role == 'HOD') && (this.api == 'View Task')){
      this.service.AssignedTaskHOD().subscribe(data => {
        console.log("this is hoddata COMMITTE", data);
        this.table = data;
      });
    }
    else if((this.role == 'HOC') && (this.api == 'View Task')){
      this.service.AllassignTasksHoc(this.userId).subscribe(data => {
        console.log("this is Moc data TASK", data);
        this.table = data
      })
    } 
    else if((this.role == 'MOC') && (this.api == 'View Task')){
      this.service.viewTaskMOC(this.userId).subscribe(data => {
        console.log("this is Moc data TASK", data);
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
    

  }


}
