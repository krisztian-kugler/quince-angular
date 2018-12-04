import { Component, OnInit, Input } from '@angular/core';
import { EventBus } from '../shared/eventbus.service';

@Component({
  selector: 'app-persons-list',
  templateUrl: './persons-list.component.pug',
  styleUrls: ['./persons-list.component.sass']
})
export class PersonsListComponent implements OnInit {

  constructor(private eventBus: EventBus) { }

  @Input() persons: Person[];

  onDelete(i: number): void {
    this.persons.splice(i, 1);
    this.eventBus.updateDataDump.next();
  }

  ngOnInit(): void {
    this.eventBus.addPerson.subscribe((newPerson: Person) => {
      this.persons.push(newPerson);
    })
  }

}
