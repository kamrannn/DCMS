import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute} from '@angular/router';
import {SevicesService}  from '../sevices.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.page.html',
  styleUrls: ['./home-detail.page.scss'],
})
export class HomeDetailPage implements OnInit {
  data: any;
  role: any;
  table : any;
  userId : number;

 

  constructor(
    public router: Router,
    private activatedRoute: ActivatedRoute,
    private service : SevicesService,
    public storage: Storage,
  ) { }

  viewTable(){
    if((this.data=='View Committe') && (this.role == 'HOD') ){
      this.service.viewCommitteeHOD().subscribe(data => {
        console.log("this is hoddata", data['result']);
        this.table = data['result']
      });
    }
    else if((this.data=='View Committe') && (this.role == 'HOC')){
      this.service.viewCommitteeHOC(this.userId).subscribe(data => {
        console.log("this is hoc committee data", data);
        this.table = data['sessionsData']
      })
    } 
    else if((this.data=='View Committe') && (this.role == 'MOC')){
      this.service.viewCommitteeMOC(this.userId).subscribe(data => {
        console.log("this is MOC committee data", data);
        this.table = data['result']
      })
    } 
  }

  //else if((data=='View Committe') && (this.role == 'HOC')){

  ngOnInit() {
    this.storage.get('userId').then((val) => {
     
      this.userId = val;
      console.log('Your userid is', this.userId);
      this.viewTable();
    });
     this.role = this.activatedRoute.snapshot.paramMap.get('ids');
     this.data = this.activatedRoute.snapshot.paramMap.get('api');
    console.log("this is the parmssss", this.data);
    

  }

}
