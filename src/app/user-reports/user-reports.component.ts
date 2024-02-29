import { Component } from '@angular/core';
import { GetBillsService } from '../services/getbills.service';

@Component({
  selector: 'app-user-reports',
  templateUrl: './user-reports.component.html',
  styleUrls: ['./user-reports.component.css']
})
export class UserReportsComponent {
  constructor(private reportService: GetBillsService){}

  report: any;

  ngOnInit(): void{
   
    this.reportService.getBills().subscribe((data) => {
      this.report = data; 
    });
  }

  downloadBill(id: String){
    console.log("into a download bills" + id);
          
  }

}
