import { Component } from '@angular/core';
import { PersonClass } from './person';

const Person1 = new PersonClass(1, 'Mini', 'Mouse');
const Person2 = new PersonClass(2, 'Mickey', 'Mouse');
const Person3 = new PersonClass(3, 'Donald', 'Duck');

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  people = [Person1, Person2, Person3];
  name = 'Person List';

  deletePerson(id: number) {
    console.log(id);
  }

  addPerson() {
    console.log();
  }
}
