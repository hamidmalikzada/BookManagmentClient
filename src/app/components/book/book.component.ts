import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/Models/Book';
import { BookService } from 'src/app/services/book.service';
import { Category } from 'src/app/Models/Category';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';



@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  books: Book[] = [];
  Category = Category;
  isLoading = false;
constructor(private bookService: BookService, private router: Router, private dialog : MatDialog, private snackBar: MatSnackBar) {
}
ngOnInit(): void {
  this.isLoading = true;
 this.bookService.getBooks().subscribe((book) => {
  this.books = book; 
  this.isLoading = false
  console.log(this.books, this.isLoading);});
}

onRowClicked(row : Book) {
  console.log('Row clicked: ', row);
}
onAddBtnCliked(){
  this.router.navigate(['/create']);
}

openConfirmDialog(bookId : number) {
  const dialogRef = this.dialog.open(ConfirmDialogComponent);

  dialogRef.afterClosed().subscribe(result => {
    if (result) {
      // User clicked 'Yes', delete the book
      this.bookService.deleteBook(bookId).subscribe({
        next: (data:any) => {
          this.snackBar.open("Book was successfully deleted!", 'Close', {duration:3000})
          this.books = this.books.filter(book => book.id !== bookId);
        },
        error: error => {
          console.error('There was an error!', error);
          this.snackBar.open('Failed to delete the book', 'Close', {
            duration: 3000,
          });
        }
      });
      
    } else {
      // User clicked 'No' or clicked outside the dialog
    }
  });
}
}
