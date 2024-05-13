import { Pipe, PipeTransform } from '@angular/core';
import { IStatus } from '../interfaces/user/status.interface';

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {

  transform(status: boolean): string {
    const INVALID_STATUS = status === undefined || status === null;

    if(INVALID_STATUS){
      return "Invalid or inaccessible status"
    }

    return status ? "Active" : "Inactive" 
    
  }

}
