import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/Models/Category';
import { Publisher } from 'src/app/Models/Publisher';
import { PublisherService } from 'src/app/services/publisher.service';
import { SharedService } from 'src/app/services/shared.service';


@Component({
  selector: 'app-publisher',
  templateUrl: './publisher.component.html',
  styleUrls: ['./publisher.component.css']
})
export class PublisherComponent implements OnInit {
  publisher: Publisher[] = [];
  Category = Category;

  constructor(private publisherService: PublisherService,private sharedService: SharedService, private router: Router) { 
  }
  // ngOnInit(): void {
  //   this.publisherService.getPublishers().subscribe((publisher) => {this.publisher = publisher});
  //   this.sharedService.changePublishers(this.publisher);
  //   console.log("Data has been fetched from the API:", this.publisher);
    
  // }     


  ngOnInit(): void {
    this.publisherService.getPublishers().subscribe((publisher) => {
      this.publisher = publisher;
      this.sharedService.changePublishers(this.publisher);
      console.log("Data has been fetched from the API:", this.publisher);
    });
    
  }
  onRowClicked(row : Publisher) {
    this.router.navigate(['/detail'], { state: { data: row, origin: 'publisher' } });

  }
}
