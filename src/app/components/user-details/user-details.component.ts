import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IUser } from '../../interfaces/user/user.interface';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss'
})
export class UserDetailsComponent {

  @Input({required: true, alias: "User"})
  user: IUser = {} as IUser  //It declares the empty object

  @Output("onCloseClick")
  CloseClicked = new EventEmitter<boolean>

  CloseModal(){
    this.CloseClicked.emit(false)

  }

}
