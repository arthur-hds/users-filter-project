import { Component } from '@angular/core';
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
    status: true

  }

  status = [
  {

    description: "Active",
    value: true

  },
  {

    description: "Inactive",
    value: false

  }

]


  changeTest(value: string){
    console.log(value)
  }

  showUser(){
    console.log(this.userFiltered)
  }


}
