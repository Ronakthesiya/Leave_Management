import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { SigninComponent } from './signin/signin.component';
import { HomeComponent } from './home/home.component';
import { authenticationGuard } from './authentication.guard';
import { HomeadminComponent } from './homeadmin/homeadmin.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { HomeempComponent } from './homeemp/homeemp.component';
import { EmpprofileComponent } from './empprofile/empprofile.component';
import { LeaveComponent } from './leave/leave.component';
import { RequestleaveComponent } from './requestleave/requestleave.component';
import { LeaveListComponent } from './leave-list/leave-list.component';
import { LeaveFormComponent } from './leave-form/leave-form.component';

const routes: Routes = [
  {path : '' , redirectTo : '/firstpage' , pathMatch : "full"},
  { path : 'firstpage' , component : FirstpageComponent },//,canActivate:[authenticationGuard]
  { path : 'adminlogin' , component : AdminloginComponent},
  { path : 'signin' , component :SigninComponent},
  
  { path : 'homeadmin' , component : HomeadminComponent , children:[
    { path : 'requestleave' , component : RequestleaveComponent},
    { path : 'leavelist' , component : LeaveListComponent},
    { path: 'adminProfile', component : EmpprofileComponent}
  ]},
  { path : 'homeemp' , component : HomeempComponent,children:[
    { path: 'empprofile/:id', component : EmpprofileComponent},
    { path : 'leave', component: LeaveComponent},
    { path : 'leaveForm' , component : LeaveFormComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
