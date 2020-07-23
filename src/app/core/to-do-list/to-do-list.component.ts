import { Component, OnInit } from '@angular/core';
import { ToDo } from "./to-do.model";

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {
  todoItems: ToDo[] = [];
  content = '';

  constructor() { }

  ngOnInit(): void {
  }

  addToDo() {
    this.todoItems.push({id: 1, content: this.content, completed: false});
    this.content = '';
  }

}
