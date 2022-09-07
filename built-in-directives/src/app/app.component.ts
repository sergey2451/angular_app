import { Component} from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})
export class AppComponent{
  cities: string[];
  people: {name: string, age: number, city: string}[];
  peopleByCity: {city: string, people: {name: string, age: number}[], }[];

  constructor() {
    this.cities = ['Miami', 'Sao Paulo', 'New York'];
    this.people = [
      {name: 'Anderson', age: 35, city: 'Sao Paulo'},
      {name: 'John', age: 12, city: 'Miami'},
      {name: 'Peter', age: 22, city: 'New York'}
    ];
    this.peopleByCity = [
      {
        city: 'Miami',
        people: [
          {name: 'John', age: 12},
          {name: 'Angel', age: 22}
        ]
      },
      {
        city: 'Sao Paolo',
        people: [
          {name: 'Anderson', age: 35},
          {name: 'Felipe', age: 36}
        ]
      }
    ];
  }
}
