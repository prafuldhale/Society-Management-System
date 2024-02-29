import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }
  serviceUrl = "http://localhost:8080/login";

  createData(data: any): Observable<any> {
    
    console.log(
      this.httpClient.post(`${this.serviceUrl}`, data)
    );
    return this.httpClient.post(`${this.serviceUrl}`, data);

  }

}
