import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable, tap } from 'rxjs';
import { Login } from '../Models/Login';
import { baseUrl } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class LoginService {  
  constructor(private http: HttpClient) { }
  
  loginUser(username: string, password: string): Observable<any> {
    const body = { username: username, password: password };
    return this.http.post( `${baseUrl}Authentication`, body).pipe(
      tap((response: any) => {
        if (response && response.token) {
          localStorage.setItem('token', response.token);
        }
      })
    );
  }
  
}
