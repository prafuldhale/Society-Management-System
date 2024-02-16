import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AnnoucementserviceService {

  constructor(private http : HttpClient) { }
  
  getAnnoucements(){
   return this.http.get('http://localhost:3000/accouncement');
  }
}
