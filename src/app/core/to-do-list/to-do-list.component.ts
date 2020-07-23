import { Component, OnInit } from '@angular/core';
import { ToDo } from "./to-do.model";
import { ToDoService } from './to-do.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {
  todoItems: ToDo[] = [];
  content = '';

  constructor(
    private todoService: ToDoService
  ) { }

  ngOnInit(): void {
  }

  addToDo() {
    this.todoItems = this.todoService.addToDo(this.content);
    this.content = '';
  }

}
