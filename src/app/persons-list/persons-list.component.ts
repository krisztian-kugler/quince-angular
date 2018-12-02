import { Component, OnInit } from '@angular/core';
import { HttpService } from '../shared/http.service';
import { EventBus } from '../shared/eventbus.service';

@Component({
  selector: 'app-persons-list',
  templateUrl: './persons-list.component.pug',
  styleUrls: ['./persons-list.component.sass']
})
export class PersonsListComponent implements OnInit {

  constructor(private httpService: HttpService, private eventBus: EventBus) { }

  persons: Person[] = [];

  onDelete(i: number): void {
    let deletedPerson = this.persons.splice(i, 1);
    this.eventBus.updateDataDump.next(...deletedPerson);
  }

  ngOnInit(): void {
    this.httpService.getPersons().subscribe((persons: Person[]) => {
      this.persons = persons;
    })
    this.eventBus.addPerson.subscribe((newPerson: Person) => {
      this.persons.push(newPerson);
    })
  }

}
