import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetKingInfoService {

  constructor(private http: HttpClient) { }
  private _url = 'http://localhost:3000';
  //method to get data from API
  data() {
    
    const  headers = new  HttpHeaders().set("Content-Type", "application/json");
    return this.http.get(this._url,{headers});   
  }
}
