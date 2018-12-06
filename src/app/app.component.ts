import { Component, OnInit } from '@angular/core';
import { EventBus } from './shared/eventbus.service';
import { HttpService } from './shared/http.service';
import { SortService } from './shared/sort.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.pug',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {

  constructor(
    private eventBus: EventBus,
    private sortService: SortService,
    private httpService: HttpService
  ) {}
  
  persons: Person[] = [];
  displayModal: boolean = false;
  dataDump: string = "";
  updatedClass: boolean = false;
  timeout: any = null;
  initialized: boolean = false;
  order: "ascending" | "descending" = "ascending";
  arrow: "&uarr;" | "&darr;" = "&uarr;";

  sort(event?: any): void {
    if (event && event.target.parentElement.classList.contains("list-header")) {
      if (this.order === "ascending") {
        this.order = "descending";
        this.arrow = "&darr;";
      } else {
        this.order = "ascending";
        this.arrow = "&uarr;";
      }
    }
    this.sortService.sortByName(this.persons, this.order);
    if (this.initialized) {
      this.updateDataDump();
    }
  }

  delete(i: number): void {
    this.persons.splice(i, 1);
    this.eventBus.updateDataDump.next();
  }

  updateDataDump(): void {
    let data: string = "";
    this.persons.forEach((person: Person, i: number) => {
      data += `{\n  "name": "${person.name}",\n  "job": "${person.job}",\n  "age": "${person.age}",\n  "nick": "${person.nick}",\n  "employee": ${person.employee}\n}${i === this.persons.length - 1 ? "" : ","}\n`;
    })
    this.dataDump = data;
    this.updated();
  }

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

  ngOnInit(): void {
    this.httpService.getPersons().subscribe((persons: Person[]) => {
      this.persons = persons;
      this.sort();
      this.initialized = true;
    })
    this.eventBus.addPerson.subscribe((newPerson: Person) => {
      this.persons.push(newPerson);
      this.sort();
    })
    this.eventBus.deletePerson.subscribe((id: number) => {
      this.delete(id);
    })
    this.eventBus.updateDataDump.subscribe(() => {
      this.updateDataDump();
    })
  }

}
