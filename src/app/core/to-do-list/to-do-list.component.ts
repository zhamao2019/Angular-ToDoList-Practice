import { Component, OnInit } from '@angular/core';
import { ToDo } from "./to-do.model";
import { ToDoService } from './to-do.service';
import { TodoService } from './todo.service';


@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {
  todoItems: ToDo[] = [];
  //content = '';

  constructor(
    private todoService: TodoService,

  ) { }

  ngOnInit() {
    console.log('getTodoItems: success');
    this.getTodoItems();
  }

  getTodoItems(): void {
    this.todoService.getTodoItems()
    .subscribe(todos => this.todoItems = todos);
  }

  addToDo(content: string) {
    console.log('addTodo: ' + content);
    
    content = content.trim();
    if (!content) {return;}
    this.todoService.addToDo({ content } as ToDo)
    .subscribe(todo => {
      this.todoItems.push(todo);
    });
  }

  toggleTodo(todoItem: ToDo) {
      let i = this.todoItems.indexOf(todoItem);
  
      console.log('toggleTodo: success '+ JSON.stringify(todoItem));

      this.todoService.toggleTodoItem(todoItem)
      .subscribe(
        todo => {this.todoItems = [
          ...this.todoItems.slice(0,i),
          ...this.todoItems.slice(i+1),
          todo
        ];
        return null;
        });
      }
  
    removeTodo(todoItem: ToDo): void {
      this.todoItems = this.todoItems.filter(t => t !== todoItem);
  
      this.todoService.deleteTodoItemById(todoItem.id)
      .subscribe();
    }

    onToggleTriggered(todoItem: ToDo) {
      console.log('onToggleTriggered: success');
      
    }
  // addToDo() {
  //   this.todoService.addToDo(this.content)
  //   .then(todoItem => this.todoItems = [...this.todoItems, todoItem]);

  //   this.content = '';
  // }

  // toggleTodo(todoItem: ToDo) {
  //   let i = this.todoItems.indexOf(todoItem);

  //   this.todoService.toggleTodoItem(todoItem)
  //   .then(
  //     todo => {this.todoItems = [
  //       ...this.todoItems.slice(0,i),
  //       todo,
  //       ...this.todoItems.slice(i+1)
  //     ]
  //   });
  // }

  // removeTodo(todoItem: ToDo) {
  //   let i = this.todoItems.indexOf(todoItem);

  //   this.todoService.deleteTodoItemById(todoItem.id)
  //   .then(() =>{
  //     this.todoItems = [
  //       ...this.todoItems.slice(0,i),
  //       ...this.todoItems.slice(i+1)
  //     ]
  //   });
  // }

  // getTodoItems(): void {
  //   this.todoService.getTodoItems()
  //   .then(todos => this.todoItems = [todos]);
  // }

}
