import { Component, OnInit } from '@angular/core';
import {FormControl,Validators, FormGroup, FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Category } from 'src/app/Models/Category';
import { Publisher } from 'src/app/Models/Publisher';
import { PublisherComponent } from '../publisher/publisher.component';
import { SharedService } from 'src/app/services/shared.service';
import { Author } from 'src/app/Models/Author';
import { takeUntil, Subject } from 'rxjs';
import { Book } from 'src/app/Models/Book';
import { BookService } from 'src/app/services/book.service';
import { MatSnackBar } from '@angular/material/snack-bar';



@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  destroy$ = new Subject();
  Category = Category;
  categoryLabels = {
    0: 'Fantasy',
    1: 'Fiction',
    2: 'Historical',
    3: 'Horror',
    4: 'Romance',
    5: 'Thriller',
    6: 'Education'
  };
  publishers : Publisher[] = [];
  authors : Author[] = [];
  constructor(private sharedService : SharedService, private bookService : BookService, private snackBar: MatSnackBar) {}

  date = new FormControl(new Date());
  serializedDate = new FormControl(new Date().toISOString());

  ngOnInit(): void {
    this.sharedService.currentPublishers.pipe(takeUntil(this.destroy$)).subscribe(publishers => {this.publishers = publishers; console.log("here ",publishers)
  });

  this.sharedService.currentAuthor.subscribe(authors => {this.authors = authors; console.log("here are authors: ",authors)});
  }
  
  onSubmit(bookData : Book) {
    this.bookService.addBook(bookData).subscribe({
      next: (data:any) => {
        this.snackBar.open("Book was added successfully!", 'Close', {duration:3000})
      },
      error: error => {
        console.error('There was an error!', error);
        this.snackBar.open('Failed to add thebook', 'Close', {
          duration: 3000,
        });
      }
    });
  }
}

