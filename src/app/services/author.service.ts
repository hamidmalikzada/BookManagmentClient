import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Author } from '../Models/Author';
import { baseUrl } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  constructor(private http:HttpClient) { }
  getAuthors(): Observable<Author[]> {    
    return this.http.get<Author[]>(`${baseUrl}Author`);  
  }
}
