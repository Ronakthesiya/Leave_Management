import { Component } from '@angular/core';
import { ApiEmployService } from '../api-employ.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homeemp',
  templateUrl: './homeemp.component.html',
  styleUrl: './homeemp.component.css'
})
export class HomeempComponent {
  constructor(private _api:ApiEmployService, private _router:Router){}

  employe = [{}]

  ngOnInit(){
    this._api.getAll().subscribe((res:any)=>{
      this.employe = res;
    });
  }

  detailView(id:any){
    this._router.navigate(['/employ/',id]);
  }
}
