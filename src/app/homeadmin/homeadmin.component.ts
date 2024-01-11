import { Component } from '@angular/core';
import { ApiRequestleaveService } from '../api-requestleave.service';

@Component({
  selector: 'app-homeadmin',
  templateUrl: './homeadmin.component.html',
  styleUrl: './homeadmin.component.css'
})
export class HomeadminComponent {
  leaves : Leave[] = [{
    id : 0 , Name : '' , type : '',fromDate:'',toDate:'',emailId:'',phone : 0,department : ''
  }]
  constructor(private _api: ApiRequestleaveService) { }
  ngOnInit() {
    this._api.get().subscribe((res: any) => {
      this.leaves = res;
    })
  }
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
