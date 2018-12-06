import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class EventBus {

  addPerson = new Subject<Person>();
  deletePerson = new Subject<number>();
  updateDataDump = new Subject<Person[]>();

}
