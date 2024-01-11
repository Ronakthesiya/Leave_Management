import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiLoginService {
  apiUrl = "https://loginpageronak.onrender.com/";
  constructor(private _http : HttpClient) { }
  get(){
    return this._http.get(this.apiUrl);
  }
}
