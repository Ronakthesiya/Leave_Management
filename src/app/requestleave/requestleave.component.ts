import { Component } from '@angular/core';
import { ApiRequestleaveService } from '../api-requestleave.service';
import { ApiEmployService } from '../api-employ.service';

@Component({
  selector: 'app-requestleave',
  templateUrl: './requestleave.component.html',
  styleUrl: './requestleave.component.css'
})
export class RequestleaveComponent {
  constructor(private _api: ApiRequestleaveService , private _apiemp : ApiEmployService) { }
  ngOnInit() {
    this._api.get().subscribe((res: any) => {
      this.leaves = res;
      console.log(this.leaves)
    })
  }
  index = 0;
  approve(){
    // add in emp api , leave


    //delete from api leave
  }
  deleteleave(id : any){

    if(confirm("are your sure ?")){

    
    // this._api.delete(id).subscribe((res : any) => {
    //   this.ngOnInit();
    //   console.log('deleted')
    // })
    console.log(id);
    
    fetch("https://leaveapironak.onrender.com/"+id, {
      method:"DELETE"
    })
    .then(res => this.ngOnInit())
    .then(res => this.ngOnInit())
  }
}
  leaves : any = new Leave();
  // leaves : Leave[] = [{
  //   id : 0 , Name : '' , type : '',fromDate:'',toDate:'',emailId:'',phone : 0,department : ''
  // }]
  
}
class Leave {
  id: number;
  Name: string;
  type: string;
  fromDate: string;
  toDate: string;
  emailId: string;
  phone: number;
  department: string;
  constructor() {
    this.id = 0;
    this.Name = '';
    this.type = '';
    this.fromDate = '';
    this.toDate = '';
    this.emailId = '';
    this.phone = 0;
    this.department = '';
  }
}

