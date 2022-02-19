import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'strToJson'
})
export class JsonPipe implements PipeTransform {
  constructor() {
    console.log('JSON Pure Pipe in constructor');
  }

  transform(value: any, ...args: unknown[]): unknown {  
    console.log('JSON Pure Pipe in transform');  
    return JSON.parse(value);
  }

}
