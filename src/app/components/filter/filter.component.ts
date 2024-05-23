import { Component, EventEmitter, Output } from '@angular/core';
import { IFilterOptions } from '../../interfaces/filter-options.interface';

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

    description: "Active",
    value: true

  },
  {

    description: "Inactive",
    value: false

  },
  {
    description: "Any",
    value: undefined

  }


]

  @Output("onFilter") onFilterEmitt = new EventEmitter<IFilterOptions>();

  showUser(){
    this.onFilterEmitt.emit(this.userFiltered);
  }


}
