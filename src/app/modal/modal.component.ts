import { Component, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { EventBus } from '../shared/eventbus.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.pug',
  styleUrls: ['./modal.component.sass']
})
export class ModalComponent {

  constructor(private eventBus: EventBus) { }

  enableSubmit: boolean = false;
  isEmployee: boolean = false;
  @Output() destroy = new EventEmitter<void>();
  @ViewChild("nameInput") nameInput: ElementRef;
  @ViewChild("jobInput") jobInput: ElementRef;
  @ViewChild("ageInput") ageInput: ElementRef;
  @ViewChild("nicknameInput") nicknameInput: ElementRef;

  submitPerson(): void {
    if (!this.enableSubmit) {
      return;
    }
    const newPerson: Person = {
      name: <string>this.nameInput.nativeElement.value,
      job: <string>this.jobInput.nativeElement.value,
      age: <string>this.ageInput.nativeElement.value,
      nick: <string>this.nicknameInput.nativeElement.value,
      employee: <boolean>this.isEmployee
    }
    this.eventBus.addPerson.next(newPerson as Person);
    this.eventBus.updateDataDump.next();
    this.destroy.emit();
  }

  toggleCheckbox(): void {
    this.isEmployee = !this.isEmployee;
  }

}
