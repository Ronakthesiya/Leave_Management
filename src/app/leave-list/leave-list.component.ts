import { Component } from '@angular/core';
import { ApiHistoryLeaveService } from '../api-history-leave.service';

class LeaveCatalog{
  Name:string;
  type:string;
  fromDate:string;
  toDate:string;
  id:number
  emialId:string;
  phone:number;
  department:string;

  constructor(){
    this.Name='';
    this.type='';
    this.fromDate='';
    this.toDate='';
    this.id=0;
    this.emialId='';
    this.phone=0;
    this.department='CSE';
  }


}


@Component({
  selector: 'app-leave-list',
  templateUrl: './leave-list.component.html',
  styleUrl: './leave-list.component.css'
})
export class LeaveListComponent {
  constructor(private _api:ApiHistoryLeaveService){}

  leaves:any = new LeaveCatalog();

  // leaves : LeaveCatalog []=[{Name:'', type:'',fromDate:'',toDate:'',id:0,emialId:'', phone:0,department:'CSE'}]

  ngOnInit(){
    this._api.get().subscribe((res:any)=>{
      this.leaves = res;
    })
  }
}
