import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {SevicesService}  from '../sevices.service';
import { Storage } from '@ionic/storage';
import { ToastController  } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  login = { email: '', password: '', role: '' };
  submitted = false;
  constructor(public router: Router,
    private service : SevicesService,
    public storage: Storage,
    private toastCtrl: ToastController,
    ) { }

  ngOnInit() {
  }

  logins(loginForm){
    console.log("data",loginForm.value);
    this.service.loginUser(this.login).subscribe(data => {
      if(data.success == true){
        this.storage.set('userId', data.userId);
        console.log('loginData true', data);
        this.router.navigate(['/home', {ids: data.role}]);
      }
      else{
        alert("something went wrong")
      }
     
    }, error => {
      alert("error");
    });

    // this.router.navigateByUrl('/home');

  }
  setLanguage() {
    console.log('Role Selected', this.login.role);
  }
}
