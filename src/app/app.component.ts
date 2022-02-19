import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  students = [];
  enteredValue = '';
  money = [];
  userString = '{"name":"John", "age":30, "city":"New York"}';
  constructor() {
    this.students = [
      {name:'John', age:'23', city:'Agra', score: 530, total: 800},
      {name:'Steve', age:'28', city:'Delhi', score: 320, total: 500},
      {name:'Peter', age:'32', city:'Chennai', score: 420, total: 800},
      {name:'Chaitanya', age:'28', city:'Bangalore', score: 275, total: 500}
    ];
    this.money = [
      {amount: 100, unit: 'Rs'},
      {amount: 150, unit: 'Rs'},
      {amount: 80, unit: 'Rs'}
    ];
  }

  addStudent() {
    this.students.push({name:'Test', age:'00', city:'Agra', score: 344, total: 500});
  }

  print(){
    console.log('Hello World!')
  }

}
