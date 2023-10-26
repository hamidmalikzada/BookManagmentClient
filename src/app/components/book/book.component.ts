import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/Models/Book';
import { BookService } from 'src/app/services/book.service';
import { Category } from 'src/app/Models/Category';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  books: Book[] = [];
  Category = Category;
constructor(private bookService: BookService, private router: Router) {
}
ngOnInit(): void {

 this.bookService.getBooks().subscribe((book) => {this.books = book; console.log(this.books)});
}

onRowClicked(row : Book) {
  console.log('Row clicked: ', row);
}
onAddBtnCliked(){
  this.router.navigate(['/create']);
}
}
