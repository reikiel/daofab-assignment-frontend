import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import {UserService} from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  // this holds a response of the rest api
  users: User[];
  
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    // subscribe to the Observable object
    this.userService.getUsers().subscribe((data: User[]) => {
      console.log(data);
      this.users = data;
    });
  }

}
