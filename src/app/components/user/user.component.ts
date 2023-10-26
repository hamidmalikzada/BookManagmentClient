import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Models/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users : User[] = [];
  constructor(private userService : UserService){}

  ngOnInit(): void {

    this.userService.getUsers().subscribe((user) => {this.users = user; console.log(this.users)});
   }
}
