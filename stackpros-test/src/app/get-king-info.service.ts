import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetKingInfoService {

  constructor(private http: HttpClient) { }
  
  //method to get data from API
  data() {
    const  headers = new  HttpHeaders().set("Content-Type", "application/json");
    return this.http.get('http://localhost:3000/',{headers});
    
  }
}
