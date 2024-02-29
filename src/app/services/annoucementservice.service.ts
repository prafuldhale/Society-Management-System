import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AnnoucementserviceService {
 
  constructor(private http : HttpClient) { }
  insertUrl = "http://localhost:8080/addAnnoucement";
  
  getAnnoucements(){
   return this.http.get('http://localhost:8080/validTaskAfterTodaysDate');
  }

  insertAnnoucement(data: any){
    return this.http.post(`${this.insertUrl}`,data);
  }
}

