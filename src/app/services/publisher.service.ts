import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Publisher } from '../Models/Publisher';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PublisherService {

  private apiUrl = 'http://localhost:5286/api/Publisher'
  constructor(private http:HttpClient) { }

  getPublishers(): Observable<Publisher[]> {    
      return this.http.get<Publisher[]>(this.apiUrl);                           
  }


}
