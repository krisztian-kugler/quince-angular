import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { EventBus } from '../shared/eventbus.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.pug',
  styleUrls: ['./modal.component.sass']
})
export class ModalComponent implements OnInit {

  constructor(private eventBus: EventBus) { }

  isEmployee: boolean = false;
  @Output() destroy = new EventEmitter<void>();
  @ViewChild("nameInput") nameInput: ElementRef;
  @ViewChild("jobInput") jobInput: ElementRef;
  @ViewChild("ageInput") ageInput: ElementRef;
  @ViewChild("nicknameInput") nicknameInput: ElementRef;

  submitPerson(): void {
    const newPerson: Person = {
      name: this.nameInput.nativeElement.value,
      job: this.jobInput.nativeElement.value,
      age: this.ageInput.nativeElement.value,
      nick: this.nicknameInput.nativeElement.value,
      employee: this.isEmployee
    }
    this.eventBus.addPerson.next(newPerson);
    this.eventBus.updateDataDump.next(newPerson);
    this.destroy.emit();
  }

  toggleCheckbox(): void {
    this.isEmployee = !this.isEmployee;
  }

  ngOnInit() {
  }

}
