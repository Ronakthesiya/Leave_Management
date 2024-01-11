import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiRequestleaveService {
  apiUrl = "https://leaveapironak.onrender.com/";
  constructor(private _http : HttpClient) { }
  get(){
    return this._http.get(this.apiUrl);
  }
  delete(id:any){
    return this._http.delete(this.apiUrl+"/"+id);
  }
  add(data:any){
    return this._http.post(this.apiUrl,data);
  }
}
