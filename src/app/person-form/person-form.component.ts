import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PersonClass } from '../person';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css'],
})
export class PersonFormComponent implements OnInit {
  AddForm!: FormGroup;

  get id() {
    return this.AddForm.get('id');
  }
  get firstName() {
    return this.AddForm.get('firstName');
  }
  get lastName() {
    return this.AddForm.get('lastName');
  }

  constructor(private formbuilder: FormBuilder) {}

  ngOnInit() {
    this.AddForm = this.formbuilder.group({
      id: [''],
      firstName: [''],
      lastName: [''],
    });
  }

  addPerson() {
    const Person: PersonClass = {
      id: this.AddForm.value.id,
      firstName: this.AddForm.value.firstName,
      lastName: this.AddForm.value.lastName,
    };
    console.log(Person);
  }
}
