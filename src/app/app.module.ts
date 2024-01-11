import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { SigninComponent } from './signin/signin.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { HomeadminComponent } from './homeadmin/homeadmin.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { HomeempComponent } from './homeemp/homeemp.component';
import { EmpprofileComponent } from './empprofile/empprofile.component';
import { LeaveComponent } from './leave/leave.component';
import { RequestleaveComponent } from './requestleave/requestleave.component';
import { LeaveListComponent } from './leave-list/leave-list.component'; 
import { LeaveFormComponent } from './leave-form/leave-form.component';


@NgModule({
  declarations: [
    AppComponent,
    FirstpageComponent,
    AdminloginComponent,
    SigninComponent,
    HomeComponent,
    HomeadminComponent,
    HomeempComponent,
    EmpprofileComponent,
    LeaveComponent,
    RequestleaveComponent,
    LeaveListComponent,
    LeaveFormComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
