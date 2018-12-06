import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ModalComponent } from './modal/modal.component';
import { PersonsListComponent } from './persons-list/persons-list.component';
import { HttpService } from './shared/http.service';
import { HttpClientModule } from '@angular/common/http';
import { PersonItemComponent } from './persons-list/person-item/person-item.component';
import { EventBus } from './shared/eventbus.service';
import { SortService } from './shared/sort.service';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    PersonsListComponent,
    PersonItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    HttpService,
    EventBus,
    SortService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
