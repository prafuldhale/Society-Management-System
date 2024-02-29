import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  error_message: any;
  data = { id: '', username: '', password: '', position: '' };

  constructor(
    private router: Router,
    private loginService: LoginService,
    private cookie: CookieService
  ) {}

  navigateToDashboard() {
    // this.router.navigate(['homepage']);
    const cookieExists: boolean = this.cookie.check('isLogin');

    console.log(cookieExists);
    if (this.data.password == '' || this.data.username == '') {
      this.error_message = '* Fill mandatory field';
    }

    this.loginService.createData(this.data).subscribe(
      (response) => {
        console.log(response);
        this.cookie.set('id', response.id);
        this.cookie.set('username', response.username);
        this.cookie.set('password', response.password);
        this.cookie.set('position', response.position);
        this.cookie.set('isLogin', '1');
        console.log(response.position);

        if (response.position == 'President') this.router.navigate(['/admin']);
        else this.router.navigate(['/dashboard/homepage']);
        
        
        console.log(this.cookie.check('isLogin'));
      },
      (error) => {
        this.error_message = 'Fill Valid Data';
        console.log(error);
      }
    );
  }
}
