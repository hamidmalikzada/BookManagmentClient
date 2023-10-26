import { Component, OnInit } from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Category } from 'src/app/Models/Category';
import { Publisher } from 'src/app/Models/Publisher';
import { PublisherComponent } from '../publisher/publisher.component';
import { SharedService } from 'src/app/services/shared.service';
import { Author } from 'src/app/Models/Author';
import { takeUntil, Subject } from 'rxjs';



@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  destroy$ = new Subject();
  Category = Category;
  publishers : Publisher[] = [];
  authors : Author[] = [];
  book = {
    id: null,
    title: '',
    publishingDate: '',
    categori: '',
    publisherName: '',
    authorNames: '',
    authors: []
  };
  date = new FormControl(new Date());
  serializedDate = new FormControl(new Date().toISOString());

  constructor(private sharedService : SharedService) {}
  ngOnInit(): void {
    this.sharedService.currentPublishers.pipe(takeUntil(this.destroy$)).subscribe(publishers => {this.publishers = publishers; console.log("here ",publishers)
  });

  this.sharedService.currentAuthor.subscribe(authors => {this.authors = authors; console.log("here are authors: ",authors)});
  }



}
