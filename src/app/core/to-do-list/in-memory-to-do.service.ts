import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { ToDo, User } from './to-do.model';

@Injectable({
  providedIn: 'root'
})
export class InMemoryToDoService {

  constructor() { }

  createDb() {
    let todoItems: ToDo[] = [
      {
        id: 1000, 
        content: 'Getting up at 8 am', 
        completed: true,
        userId: 1
      },
      {
        id: 1111, 
        content: 'Sleeping', 
        completed: false,
        userId: 1
      },
      {
        id: 1112, 
        content: 'Test', 
        completed: false,
        userId: 2
      }
    ];

    let users: User[] = [
      {
        id: 1,
        username: 'yang',
        password: '1234',
      },
      {
        id: 2,
        username: 'test',
        password: '1234',
      }
    ]

    return { todoItems, users }; 
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
