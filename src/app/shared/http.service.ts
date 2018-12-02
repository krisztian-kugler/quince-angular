import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpService {

  constructor(private httpClient: HttpClient) { }

  getPersons(): Observable<Object> {
    return this.httpClient.get("assets/persons.json");
  }

}
