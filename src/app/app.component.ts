import { Component, OnInit } from '@angular/core';
import { IUser } from './interfaces/user/user.interface';
import { UserList } from './data/users-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  
  usersList: IUser[] = [];

  title = 'users-filter-project';

  UserSelected : IUser = {} as IUser;

  IS_STARTED: boolean = false;

  ngOnInit() {
    setTimeout(() => {
      this.usersList = UserList;
    }, 3000)    // It simulates a HTTP Request via Database
  }


  showUser(user: IUser){
    this.UserSelected = user;
    this.IS_STARTED = true;
  }

}
