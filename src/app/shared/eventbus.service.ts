import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class EventBus {

  addPerson = new Subject<Person>();
  updateDataDump = new Subject<Person>();

}
