import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Author } from 'src/app/Models/Author';
import { Category } from 'src/app/Models/Category';
import { AuthorComponent } from '../author/author.component';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  Category = Category;
  data: any;
  origin: string;
constructor(private router: Router)
{
  const navigation = this.router.getCurrentNavigation();
  this.data = navigation?.extras.state?.['data'];
  this.origin = navigation?.extras.state?.['origin'];
}

ngOnInit(): void {
  console.log(this.data);
  console.log(this.origin);
}

}
