import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'percentage'
})
export class PercentagePipe implements PipeTransform {
  constructor() {
    console.log('Percentage Pipe call in constructor');
  }

  transform(score: number, total?: number): any {
    console.log('Percentage Pure Pipe in transform');
    if (score === 0) {
      return 0.00;
    } else if (total && total !== 0) {
      return ((score / total) * 100).toFixed(2);
    } else {
      return ((score / 100) * 100).toFixed(2);
    }
  }

}
