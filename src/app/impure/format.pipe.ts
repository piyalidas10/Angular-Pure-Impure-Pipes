import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'format',
  pure: false
})
export class FormatPipe implements PipeTransform {
  constructor() {
    console.log('Format Impure Pipe in constructor');
  }
  transform(value: any, enteredValue: any): unknown {
    console.log('Format Impure Pipe in transform');
    if (value.length === 0 || enteredValue === '') {
      return value;
    } else {
      return value.amount + ' ' + value.unit;
    }
  }

}
