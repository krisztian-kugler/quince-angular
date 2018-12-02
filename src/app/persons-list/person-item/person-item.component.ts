import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { EventBus } from 'src/app/shared/eventbus.service';

@Component({
  selector: 'app-person-item',
  templateUrl: './person-item.component.pug',
  styleUrls: ['./person-item.component.sass']
})
export class PersonItemComponent implements OnInit {

  constructor(private eventBus: EventBus) { }

  @Input() id: number;
  @Input() person: Person;
  @Output() delete = new EventEmitter<number>(); 

  toggleCheckbox(): void {
    this.person.employee = !this.person.employee;
    this.eventBus.updateDataDump.next(this.person);
  }

  deletePerson(): void {
    this.delete.emit(this.id);
  }

  ngOnInit() {}

}
