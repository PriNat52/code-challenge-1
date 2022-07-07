import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css'],
})
export class PeopleComponent implements OnInit {
  @Input() id: number;
  @Input() first: string;
  @Input() last: string;

  @Output() deleteMe: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  deletePerson() {
    this.deleteMe.emit(this.id);
  }
}
