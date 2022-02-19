# Angular Pure Impure Pipe

Pure pipes are executed only when a “PURE CHANGE” to the input value is detected. A pure change is either a change to a primitive input (string, number etc) value. or changed Object reference. By default a pipe is pure pipe.
Impure pipe executes every time irrespective of source has changed or not. which leads to bad performance.
Examples of Impure Pipes

1. Async Pipe
2. JsonPipe
3. SlicePipe

### Q. If Async Pipe is an impure pipe then why Async Pipe is used for better performance ?
Ans. The main advantage of Async Pipe is automatically unsubscribe the observable . If you have multiple observables in your application. It is very difficult to remember to unsubscribe each of them.
If you properly study Async Pipe implementation, you will get Async Pipe is mainly used with Push change detection to prevent unnecessary calling.

## Format (Impure) Pipe
ts file
```
import { Pipe, PipeTransform } from ‘@angular/core’;
@Pipe({
name: ‘format’,
pure: false
})
export class FormatPipe implements PipeTransform {
constructor() {
console.log(‘Format Impure Pipe in constructor’);
}
transform(value: any, enteredValue: any): unknown {
console.log(‘Format Impure Pipe in transform’);
if (value.length === 0 || enteredValue === ‘’) {
return value;
} else {
return value.amount + ‘ ‘ + value.unit;
}
}
}
```
html file
```
<h1>Format Pipe (Impure)</h1>
<div *ngFor=”let val of money”>
{{ val | format }}
<button (click)=”val.amount = val.amount + 10">Increment</button>
</div>
```

Just check the console, 12 times transform function are calling. But it should called 3 times because we have array of 3 length. This is Bad Performance.


## Percentage (Pure) Pipe
ts file
```
import { Pipe, PipeTransform } from ‘@angular/core’;
@Pipe({
name: ‘percentage’
})
export class PercentagePipe implements PipeTransform {
constructor() {
console.log(‘Percentage Pipe call in constructor’);
}
transform(score: number, total?: number): any {
console.log(‘Percentage Pure Pipe in transform’);
if (score === 0) {
return 0.00;
} else if (total && total !== 0) {
return ((score / total) * 100).toFixed(2);
} else {
return ((score / 100) * 100).toFixed(2);
}
}
}
```

html file
```
<h1>Percentage Pipe (Pure)</h1>
<div *ngFor=”let stud of students”>
{{stud.score | percentage : stud.total}}
</div>
```

Just check the console, 4 times transform function are calling because we have an array of 4 length. No extra calls are not happening.