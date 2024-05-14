import { Component } from '@angular/core';
import { IUser } from './interfaces/user/user.interface';
import { UserList } from './data/users-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'users-filter-project';

  UserSelected : IUser = {} as IUser;

  IS_STARTED: boolean = false;

  showUser(user: IUser){
    this.UserSelected = user;
    this.IS_STARTED = true;
  }

}
