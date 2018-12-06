import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-persons-list',
  templateUrl: './persons-list.component.pug',
  styleUrls: ['./persons-list.component.sass']
})
export class PersonsListComponent {

  constructor() { }
  
  @Input() persons: Person[];

}
