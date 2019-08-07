import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { AuthenticateService } from '../authenticate.service';
import {Router, ActivatedRoute} from '@angular/router';

import {LoginInfo, LoginStatus} from '../model/loginInfo';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(public auth:AuthenticateService, public router: Router) {  
  }

  ngOnInit() {
    this.LogDetails= new LoginInfo();
  }
  LogDetails:LoginInfo;
  Logstat:LoginStatus;

  onSubmit(form: NgForm){
    this.auth.Authenticate(form.value).subscribe(data=>{
      var ls = data as LoginStatus;
      if(ls.Status==1)
     {
        localStorage.setItem("CustomerLoginInfo", JSON.stringify(ls));

  
      if(ls.Role.toLowerCase()=='customer')
      {
        this.router.navigateByUrl("User")
  
      }
  
      if(ls.Role.toLowerCase()=='admin')
      {
        this.router.navigateByUrl("Admin")
  
      }
    }

    },err=>{console.log(err)});
     
  }



}
