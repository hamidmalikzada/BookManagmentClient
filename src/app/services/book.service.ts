import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Book } from '../Models/Book';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class BookService {
  constructor(private http:HttpClient) { }

  getBooks(): Observable<Book[]>{
    return this.http.get<Book[]>( `${baseUrl}Book`);                           
  }

  addBook(bookData : Book) {
    return this.http.post(`${baseUrl}Book`, bookData);
  }

  deleteBook(bookId: number) {
    return this.http.delete(`${baseUrl}Book/${bookId}`);
  }
}
