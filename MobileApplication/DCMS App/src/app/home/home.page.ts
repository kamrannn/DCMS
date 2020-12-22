import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {SevicesService}  from '../sevices.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  role: any;

  constructor(public router: Router, private activatedRoute: ActivatedRoute,  private service : SevicesService,) { }

  ngOnInit() {
    this.role = this.activatedRoute.snapshot.paramMap.get('ids');
    console.log("this is the parmssss", this.role);
    
  }

 
  
  
  data(data){
    console.log("this is data role", this.role );
    if((this.role == 'HOD') && (data == 'View Committe')){
      console.log("role logic HOD", this.role, data)
      this.router.navigate(['/home-detail', {ids: this.role, api:data}]);

    }
     else if((this.role == 'HOD') && (data == 'View Task')){
      console.log("role logic HOD", this.role, data)
      this.router.navigate(['/homedetail2', {ids: this.role, api:data}]);
    }
    else if((this.role == 'HOD') && (data == 'View Meeting')){
      console.log("role logic HOD", this.role, data)
      this.router.navigate(['/homedetail3', {ids: this.role, api:data}]);
    }
    else if(data=='View Hoc'){
      this.router.navigate(['/homedetail4', {ids: this.role}]);
    }
    else if(data=='View CM'){
      this.router.navigate(['/homedetail5', {ids: this.role}]);
    }

    else if( (this.role == 'HOC') && (data == 'View Committe')){
      console.log("role logic HOC", this.role, data)
      this.router.navigate(['/home-detail', {ids: this.role, api:data}]);
    }
    else if( (this.role == 'HOC') && (data == 'View Task')){
      console.log("role logic HOC", this.role, data)
      this.router.navigate(['/homedetail2', {ids: this.role, api:data}]);
    }
    else if( (this.role == 'HOC') && (data == 'View Meeting')){
      console.log("role logic HOC", this.role, data)
      this.router.navigate(['/homedetail3', {ids: this.role, api:data}]);
    }
    else if( (this.role == 'MOC') && (data == 'View Committe')){
      console.log("role logic MOC", this.role, data)
      this.router.navigate(['/home-detail', {ids: this.role, api:data}]);
    }
    else if( (this.role == 'MOC') && (data == 'View Task')){
      console.log("role logic MOC", this.role, data)
      this.router.navigate(['/homedetail2', {ids: this.role, api:data}]);
    }
    else if( (this.role == 'MOC') && (data == 'View Meeting')){
      console.log("role logic MOC", this.role, data)
      this.router.navigate(['/homedetail3', {ids: this.role, api:data}]);
    }
    
  }

  logout(){
    this.router.navigateByUrl('/login')
  }

}
