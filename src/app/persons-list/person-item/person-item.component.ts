import { Component, Input } from '@angular/core';
import { EventBus } from 'src/app/shared/eventbus.service';

@Component({
  selector: 'app-person-item',
  templateUrl: './person-item.component.pug',
  styleUrls: ['./person-item.component.sass']
})
export class PersonItemComponent {

  constructor(private eventBus: EventBus) { }

  @Input() id: number;
  @Input() person: Person;

  toggleCheckbox(): void {
    this.person.employee = !this.person.employee;
    this.eventBus.updateDataDump.next();
  }

  deletePerson(): void {
    this.eventBus.deletePerson.next(this.id);
  }

}
