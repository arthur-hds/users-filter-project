import { Component, EventEmitter, Output } from '@angular/core';
import { IFilterOptions } from '../../interfaces/filter-options.interface';
import { getStatusValue, status } from '../../utils/status-list';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})




export class FilterComponent {

  userFiltered: IFilterOptions = {

    name: undefined,
    startDate: undefined,
    endDate: undefined,
    status: undefined

  }

 


  status = [
  {

    description: status.Active,
    value: getStatusValue(status.Active)

  },
  {

    description: status.Inactive,
    value: getStatusValue(status.Inactive)

  },
  {
    description: status.Any,
    value: getStatusValue(status.Any)


  }


]

  @Output("onFilter") onFilterEmitt = new EventEmitter<IFilterOptions>();

  showUser(){
    this.onFilterEmitt.emit(this.userFiltered);
  }


}
