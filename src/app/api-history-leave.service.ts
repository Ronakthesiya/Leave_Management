import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiHistoryLeaveService {

  apiUrl ="https://historyapironak.onrender.com/"

  constructor(private _http :HttpClient) { }

  add(data:any){
    return this._http.post(this.apiUrl,data);
  }

  get(){
    return this._http.get(this.apiUrl)
  }

}