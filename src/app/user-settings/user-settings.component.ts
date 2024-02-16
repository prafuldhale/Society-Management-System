import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.css'],
})
export class UserSettingsComponent {
  fileName: String = '';
  constructor(private http: HttpClient) {}

  onFileSelected(event: Event) {
    const target = event.target as HTMLInputElement;
    if (target && target.files && target.files?.length > 0) {
      const file: File = target.files[0];
      console.log("File selected");
      
      if (file) {
        this.fileName = file.name;
        
        const formData = new FormData();
        
        formData.append('thumbnail', file);
        // url_i = '';
        const upload$ = this.http.post('http://localhost:4000/api', formData);
        
        upload$.subscribe();
        console.log("File Uploaded");
      }
    }
  }
}
