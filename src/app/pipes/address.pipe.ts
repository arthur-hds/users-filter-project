import { Pipe, PipeTransform } from '@angular/core';
import { IAddress } from '../interfaces/user/address.interface';

@Pipe({
  name: 'address'
})
export class AddressPipe implements PipeTransform {

  transform(address: IAddress): string {
    
    const INVALID_ADDRESS = !address ||
    !address.street ||
    !address.state ||
    address.houseNumber === null ||
    address.houseNumber === undefined

    if(INVALID_ADDRESS){
      return "Invalid or non-existent address"
    }

    return `${address.street}, ${address.houseNumber}, ${address.state} - ${address.country}`


  }

}
