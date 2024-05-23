import { Component, OnInit } from '@angular/core';
import { IUser } from './interfaces/user/user.interface';
import { UserList } from './data/users-list';
import { IFilterOptions } from './interfaces/filter-options.interface';
import { isWithinInterval } from 'date-fns';
import { filterList } from './utils/filter-users-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  
  usersList: IUser[] = [];

  usersListFiltered: IUser[] = []

  title = 'users-filter-project';

  UserSelected : IUser = {} as IUser;

  IS_STARTED: boolean = false;

  
  ngOnInit() {
    setTimeout(() => {
      this.usersList = UserList;
      this.usersListFiltered = this.usersList;
    }, 1)    // It simulates a HTTP Request via Database
  }



  showUser(user: IUser){
    this.UserSelected = user;
    this.IS_STARTED = true;
  }

  onFilter(user: IFilterOptions){
    console.log(user)

    this.usersListFiltered = filterList(user, this.usersList);

  }


  CloseModal(value: boolean){
    this.IS_STARTED = false
  }




  

  


  


 



  




}
