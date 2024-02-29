import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.css'],
})
export class UserSettingsComponent{
  fileName: String = '';
  userurl: String  = '';
  // const MAX_SIZE = 500
  constructor(private http: HttpClient, private cookie: CookieService) {
  //  document.images[document.images.length-1].src = this.userurl+cookieService.get("id");
      // this.userurl += cookie.get("i d")+".jpg"
      console.log(this.userurl);
      
    }
    ngOnInit(){
      this.userurl = "assets/uploads/"+this.cookie.get("id")+".jpg";
  }

  onFileSelected(event: Event) {
    const target = event.target as HTMLInputElement;
    
    if (target && target.files && target.files?.length > 0) {
      const file: File = target.files[0];
      console.log("File selected");

      if(file.size == 1365187){
        alert("File must be less than 1mb");
        return
      }
      
      if (file) {
        this.fileName = file.name;
        const formData = new FormData();
        const newName = this.cookie.get("id")+".jpg";
        const newFile = new File([file], newName,{type: file.type })
        console.log(file);
        formData.append('image', newFile);
        // url_i = '';
        const upload$ = this.http.post('http://localhost:8080/upload', formData);
        
        upload$.subscribe();
        alert("Uploaded successfully");
        window.location.reload();
        // console.log("File Uploaded "+ file.size );
        
      }
    }
  }
}
