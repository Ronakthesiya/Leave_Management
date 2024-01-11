import { Component } from '@angular/core';
import { ApiEmployService } from '../api-employ.service';
import { ActivatedRoute, Router } from '@angular/router';
// import { Employee } from '../DAO/employSchema';

@Component({
  selector: 'app-empprofile',
  templateUrl: './empprofile.component.html',
  styleUrl: './empprofile.component.css'
})
export class EmpprofileComponent {
  constructor(private _api:ApiEmployService, private _activatedRoute:ActivatedRoute){}

  // laptop:Employee = new Employee();
  // id:number = 0;
  // ngOnInit(){
  //   this.id = this._activatedRoute.snapshot.params['id'];
  //   this._api.getById(this.id).subscribe((res:any)=>{
  //     this.laptop = res;
  //     console.log(this.laptop)
  //   });
  // }
}
