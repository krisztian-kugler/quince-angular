import { Component, OnInit } from '@angular/core';
import { EventBus } from './shared/eventbus.service';
import { HttpService } from './shared/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.pug',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {

  constructor(
    private eventBus: EventBus,
    private httpService: HttpService
  ) {}
  
  persons: Person[] = [];
  displayModal: boolean = false;
  dataDump: string = "";
  updatedClass: boolean = false;
  timeout: any = null;

  updated(): void {
    this.updatedClass = true;
    if (this.timeout) {
      clearTimeout(this.timeout);
      this.timeout = null;
    }
    this.timeout = setTimeout(() => {
      this.updatedClass = false;
    }, 100);
  }

  updateDataDump(): void {
    let data: string = "";
    this.persons.forEach((person: Person, i: number) => {
      data += `{\n  "name": "${person.name}",\n  "job": "${person.job}",\n  "age": "${person.age}",\n  "nick": "${person.nick}",\n  "employee": ${person.employee}\n}${i === this.persons.length - 1 ? "" : ","}\n`
    })
    this.dataDump = data;
    this.updated();
  }

  ngOnInit(): void {
    this.httpService.getPersons().subscribe((persons: Person[]) => {
      this.persons = persons;
    })
    this.eventBus.updateDataDump.subscribe(() => {
      this.updateDataDump();
    })
  }

}
