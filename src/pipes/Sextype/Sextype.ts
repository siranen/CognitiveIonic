import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'SexType',
})
export class SexTypePipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string, ...args) {
    if(value == "male"){
      return "MASCULINO"
    }
    return "FEMENINO"
  }
}
