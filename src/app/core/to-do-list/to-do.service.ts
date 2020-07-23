import { Injectable } from '@angular/core';
import { ToDo } from './to-do.model';
import { UUID } from "angular2-uuid";

@Injectable({
  providedIn: 'root'
})
export class ToDoService {
  todoItems: ToDo[] = [];

  constructor() { }

  addToDo(todoContent: string): ToDo[] {
    let todoItem = {
      id: UUID.UUID(),
      content: todoContent,
      completed: false
    };

    this.todoItems.push(todoItem);
    return this.todoItems;
  }
}
