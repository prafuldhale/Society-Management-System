import { Component, OnInit } from '@angular/core';
import { AnnoucementserviceService } from '../services/annoucementservice.service';
import {MatBadgeModule} from '@angular/material/badge';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  
  
  truncateDescription(description: String) {
     let words = description.split(' ');
     if(words.length > 13){
      return words.slice(0, 13).join(' ') + '...';
     }
     else
      return description;
  }
  
  annoucementList: any;
  constructor(private annoucementService: AnnoucementserviceService) {}

  ngOnInit(): void {
    this.annoucementService.getAnnoucements().subscribe((data) => {
      this.annoucementList = data;
      console.log(this.annoucementList);
    });
    // this.annoucementList = this.annoucementService.getAnnoucements();
    // console.log(this.annoucementList);
  }
}
