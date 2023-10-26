import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Publisher } from '../Models/Publisher';
import { Author, AuthoredBook } from '../Models/Author';


@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private publisherSource = new BehaviorSubject<Publisher[]>([]);
  currentPublishers = this.publisherSource.asObservable();

  private authorSource = new BehaviorSubject<Author[]>([]);
  currentAuthor = this.authorSource.asObservable();


  constructor() { }

  changePublishers(publishers: Publisher[]) {
    this.publisherSource.next(publishers);
    console.log("Data has been updated in SharedService:", publishers);
  }

  changeAuthors(authors: Author[]) {
    this.authorSource.next(authors);
    console.log("Data has been updated in SharedService:", authors);
  }
}
