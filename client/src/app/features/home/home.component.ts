import { Component, OnInit } from '@angular/core';

// import { User } from '../models/user';
// import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // currentUser: User;
  // users: User[] = [];
  //
  // constructor(private usersService: UsersService) {
  //     this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  // }

  ngOnInit() {
      this.loadAllUsers();
  }

  deleteUser(id: number) {
      // this.usersService.delete(id).subscribe(() => { this.loadAllUsers() });
  }

  private loadAllUsers() {
      // this.usersService.getAll().subscribe(users => { this.users = users; });
  }
}
