import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Publisher } from '../Models/Publisher';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class PublisherService {
  constructor(private http:HttpClient) { }

  getPublishers(): Observable<Publisher[]> {    
      return this.http.get<Publisher[]>( `${baseUrl}Publisher`);                           
  }


}
