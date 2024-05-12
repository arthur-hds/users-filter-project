import { Component } from '@angular/core';
import { IUser } from '../../interfaces/user/user.interface';
import { UserList } from '../../data/users-list';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss'
})
export class UsersListComponent {

  usersList: IUser[] = UserList;
  displayedColumns: string[] = ["name", "date", "status"]
  onUserSelected(user: IUser){
    console.log("User: ", user)
  }

}
