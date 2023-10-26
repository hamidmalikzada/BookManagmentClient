import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/Models/Login';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  username: string = "";
  password: string = "";
  loginStatus: string = "";
  loginClass: string = "";
 constructor(private loginService: LoginService){}

 ngOnInit(): void {

 }

 login(): void {
  this.loginService.loginUser(this.username, this.password).subscribe({
    next: res => {console.log('HTTP response', res); 
  if (res.token) {
    this.loginStatus = "You are now signed in!"
    this.loginClass = "success"
  }
  else{
    this.loginStatus = "Wrong user credentials!";
    this.loginClass = 'error';
  }
  },
    error: err => {console.log('HTTP Error', err);
  this.loginStatus = "Wrong user credentials!"
  this.loginClass = 'error';
  },
    complete: () => console.log('HTTP request completed.')
  });
}

}
