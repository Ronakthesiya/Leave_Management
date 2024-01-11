import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiEmployService {
  apiUrl = 'https://leaveapironak.onrender.com/'
  constructor(private _http:HttpClient) { }

  getAll(){
    return this._http.get(this.apiUrl);
  }

  getById(id:any){
    return this._http.get(this.apiUrl+"/"+id);
  }

  
}
