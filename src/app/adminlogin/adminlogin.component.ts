import { Component } from '@angular/core';
import { ApiLoginService } from '../api-login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrl: './adminlogin.component.css'
})
export class AdminloginComponent {
  constructor(private _api : ApiLoginService , private _router : Router){}
  logincheck : boolean = false;
  loginapi = [{_id : '',userName : '',userPassword : '',__v : ''}];
  loginuser = {_id : '',userName : '',userPassword : '',__v : ''};
  msg : string = '';

  ngOnInit(){
    this._api.get().subscribe((res : any) => {
      this.loginapi = res;
    })
  }
  checklogin(){
    console.log(this.loginuser);
    this.loginapi.some((temp : any)=>{
      if(temp.userName == this.loginuser.userName && temp.userPassword == this.loginuser.userPassword && temp.userType == 'Admin'){
        localStorage.setItem('user',JSON.stringify(this.loginuser));
        this.logincheck = true;
        this._router.navigate(['/homeadmin']);
      }
      else{
        this.msg = 'Invalid Username or password';
      }
    })
    console.log(this.logincheck)
  }
}
