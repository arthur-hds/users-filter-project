import { Component, OnInit } from '@angular/core';
import { IUser } from './interfaces/user/user.interface';
import { UserList } from './data/users-list';
import { IFilterOptions } from './interfaces/filter-options.interface';
import { isWithinInterval } from 'date-fns';

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

    this.usersListFiltered = this.filterList(user, this.usersList);

  }


  filterList(user: IFilterOptions, usersList: IUser[]) : IUser[]{

    let listFiltered = [];

    listFiltered = this.filterListByName(user.name, usersList)

    listFiltered = this.filterListByStatus(user.status, listFiltered)

    listFiltered = this.filterListByDate(user.startDate, user.endDate, listFiltered)

    return listFiltered;

  }

  filterListByDate(UserStartDate: Date | undefined, UserEndDate: Date | undefined, userList: IUser[]): IUser[]{
    const DATE_INVALID = UserStartDate === undefined || UserEndDate === undefined;

    if(DATE_INVALID){
      return userList;
    }

    const checkDateInterval = (user: IUser) => isWithinInterval(new Date(user.signupDate), {
      start: UserStartDate,
      end: UserEndDate
    })

    const filteredList = userList.filter(checkDateInterval)

    return filteredList

  }


  filterListByName(UserName: string | undefined, userList: IUser[]): IUser[]{

    const NAME_INVALID = UserName === undefined;

    if(NAME_INVALID){
      return userList;
    }

    const filteredList = userList.filter((user) => user.name.toLowerCase().includes(UserName.toLowerCase()))

    return filteredList;

  }


  filterListByStatus(UserStatus: boolean | undefined, userList: IUser[]): IUser[]{
    const STATUS_INVALID = UserStatus === undefined;

    if(STATUS_INVALID){
      return userList;
    }

    const filteredList = userList.filter((user) => user.active === UserStatus);

    return filteredList;

  }



  




}
