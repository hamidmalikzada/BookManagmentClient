import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from '../Models/User';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:5286/api/User'
  constructor(private http:HttpClient) { }

  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.apiUrl);                           
  }
}
