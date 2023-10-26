import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable, tap } from 'rxjs';
import { Login } from '../Models/Login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl = "http://localhost:5286/api/Authentication";
  
  constructor(private http: HttpClient) { }
  
  loginUser(username: string, password: string): Observable<any> {
    const body = { username: username, password: password };
    return this.http.post(this.apiUrl, body).pipe(
      tap((response: any) => {
        if (response && response.token) {
          localStorage.setItem('token', response.token);
        }
      })
    );
  }
  
}
