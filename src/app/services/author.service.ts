import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Author } from '../Models/Author';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  private apiUrl = 'http://localhost:5286/api/Author'

  constructor(private http:HttpClient) { }
  getAuthors(): Observable<Author[]> {    
    return this.http.get<Author[]>(this.apiUrl);  
  }
}
