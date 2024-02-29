import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetBillsService {

  constructor(private httpClient: HttpClient) { }

  getBills(){
    return this.httpClient.get("http://localhost:3000/reports");
  }
}
