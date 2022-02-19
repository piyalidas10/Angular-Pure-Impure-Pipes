import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(students: any[], searchValue: string): any {
    console.log('Filter Pure Pipe in transform');
    if (searchValue && searchValue.trim() !== '') {
      return students.filter(student => student.name === searchValue);
    } else {
      return students;
    }
  }

}
