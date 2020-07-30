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
      {id: 1000, content: 'Getting up at 8 am', completed: true},
      {id: 1111, content: 'Sleeping', completed: false}
    ];

    return { todoItems }; 
  }

  // Overrides the genId method to ensure that a todoItem always has an id.
  // If the todoItems array is empty,
  // the method below returns the initial number (1000).
  // if the todoItems array is not empty, the method below returns the highest
  // todoItem id + 1.
  genId(todoItems: ToDo[]): number {
    return todoItems.length > 0 ? Math.max(...todoItems.map(todo => todo.id)) + 1 : 1000;
  }

}
