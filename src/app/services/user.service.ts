import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from '../Models/User';
import { baseUrl } from 'src/environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http:HttpClient) { }

  getUsers(): Observable<User[]>{
    return this.http.get<User[]>( `${baseUrl}User`);                           
  }
}
