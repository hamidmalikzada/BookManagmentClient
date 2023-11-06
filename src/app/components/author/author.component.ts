import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { Author } from 'src/app/Models/Author';
import { AuthorService } from 'src/app/services/author.service';
import { Category } from 'src/app/Models/Category';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  author: Author[] = [];
  Category = Category;
  constructor(private authorService: AuthorService, private sharedService: SharedService, private router: Router) { 
  }

  ngOnInit(): void {
    this.authorService.getAuthors().subscribe((author) => {
      this.author = author;
      this.sharedService.changeAuthors(this.author);
      console.log("Data has been fetched from the API:", this.author);
    });
  }
  
  onRowClicked(row : Author) {
    this.router.navigate(['/detail'], { state: { data: row, origin: 'author' } });
  }

}
