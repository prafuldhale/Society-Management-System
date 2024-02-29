import { Component } from '@angular/core';
import { AnnoucementserviceService } from '../services/annoucementservice.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-annoucement',
  templateUrl: './annoucement.component.html',
  styleUrls: ['./annoucement.component.css']
})
export class AnnoucementComponent {
  constructor(private annousementService: AnnoucementserviceService, private datePipe: DatePipe){}
  announcement ={title:'', description: '', eventDate: '', time:'', eventManagerName:''};
  todaysDate:Date = new Date();
  insertAnnoucement(){
    const formattedDate = this.datePipe.transform(this.announcement.eventDate, 'yyyy-MM-dd');
    console.log(this.announcement);
    
    if(formattedDate != null)
    this.announcement.eventDate = formattedDate;
    
    console.log(this.announcement);
    console.log(this.announcement +  "  "+ formattedDate);
    
    this.annousementService.insertAnnoucement(this.announcement).subscribe((res)=>{
      console.log(res);
      this.announcement ={title:'', description: '', eventDate: '', time:'', eventManagerName:''};
    },
    (err)=>{
      console.log(err);
      
    })
    
  }
}
