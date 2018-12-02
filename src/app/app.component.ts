import { Component, OnInit } from '@angular/core';
import { EventBus } from './shared/eventbus.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.pug',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {

  constructor(private eventBus: EventBus) {}
  
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

  ngOnInit(): void {
    this.eventBus.updateDataDump.subscribe((person: Person) => {
      this.dataDump = `{name: ${person.name}, job: ${person.job}, age: ${person.age}, nick: ${person.nick}, employee: ${person.employee}}`;
      this.updated();
    })
  }

}
