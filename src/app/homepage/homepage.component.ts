import { Component, OnInit } from '@angular/core';
import { AnnoucementserviceService } from '../services/annoucementservice.service';
import {MatBadgeModule} from '@angular/material/badge';
import { CookieService } from 'ngx-cookie-service';
import { Route, Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  responsiveOptions: any[] | undefined;
  truncateDescription(description: String) {
     const words = description?.split(',') || [];

     if(words.length >= 13){
      return words.slice(0, 13).join(' ') + '...';
     }
     else
      return description;
  }
  
  annoucementList: any;
  constructor(private router: Router,private annoucementService: AnnoucementserviceService, private cookieService:CookieService) {}

  ngOnInit(): void {

    if(!this.cookieService.check("isLogin")){
        this.router.navigate(["/"])
        return;
    }

    this.annoucementService.getAnnoucements().subscribe((data) => {
      this.annoucementList = data;
      console.log(this.annoucementList);
    });
  }
}
