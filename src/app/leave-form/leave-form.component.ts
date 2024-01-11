import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiHistoryLeaveService } from '../api-history-leave.service';
import { Router } from '@angular/router';
import { ApiRequestleaveService } from '../api-requestleave.service';

@Component({
  selector: 'app-leave-form',
  templateUrl: './leave-form.component.html',
  styleUrl: './leave-form.component.css'
})
export class LeaveFormComponent {

  constructor(private _apih:ApiHistoryLeaveService, private _apil : ApiRequestleaveService, private _router:Router ){}

  leaveForm:FormGroup=new FormGroup({
    Name:new FormControl('',Validators.required),
    type:new FormControl('', Validators.required),
    toDate:new FormControl(''),
    fromDate:new FormControl('')
    

  });

  add(){
    this._apih.add(this.leaveForm.value).subscribe((res:any)=>{
      this._router.navigate(['/homeemp/empprofile/:id'])
      console.log(this.leaveForm);
      
    });
    this._apil.add(this.leaveForm.value).subscribe((res:any)=>{
      this._router.navigate(['/homemp/empprofile/:id'])
      console.log(this.leaveForm);
      
    });
  
  }


}
