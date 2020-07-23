import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { ToDo } from './to-do.model';

@Injectable({
  providedIn: 'root'
})
export class InMemoryToDoService {

  constructor() { }

  createDb() {
    let todoItems: ToDo[] = [
      {id: '307aceab-7880-f421-e8e1-7c9003372ae1', content: 'Getting up at 8 am', completed: true},
      {id: '502fcedb-5130-d631-f9e1-9l8203592eb6', content: 'Sleeping', completed: false}
    ];

    return { todoItems };
  }
}
