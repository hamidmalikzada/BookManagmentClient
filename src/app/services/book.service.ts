import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Book } from '../Models/Book';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BookService {
private apiUrl = "http://localhost:5286/api/Book";

  constructor(private http:HttpClient) { }

  getBooks(): Observable<Book[]>{
    return this.http.get<Book[]>(this.apiUrl);                           
  }
}
