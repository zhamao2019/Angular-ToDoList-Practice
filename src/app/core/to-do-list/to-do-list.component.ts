import { Component, OnInit } from '@angular/core';
import { ToDo } from "./to-do.model";
import { TodoService } from './todo.service';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {
  todoItems: ToDo[] = [];
  itemCount: number;

  constructor(
    private todoService: TodoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    console.log('getTodoItems: success');
    this.getTodoItems();
    this.countLeftItems();

    // this.route.params.subscribe((params: Params) => {
    //   let filter = params['filter'];
    //   this.filterTodoItems(filter);
    // });
   
  }

  getTodoItems(): void {
    this.todoService.getTodoItems()
    .subscribe(todos => this.todoItems = todos);
  }

  addToDo(content: string) {
    console.log('addTodo: ' + content);
    content = content.trim();

    let newTodoItem = new ToDo();
    newTodoItem.content = content;

    if (!content) {return;}
    this.todoService.addToDo(newTodoItem)
    .subscribe(todo => {
      this.todoItems.push(todo);
    });
  }

  toggleTodo(todoItem: ToDo) {
      this.todoService.toggleTodoItem(todoItem)
      .subscribe();
    }
  
    removeTodo(todoItem: ToDo): void {
      this.todoItems = this.todoItems.filter(t => t !== todoItem);
  
      this.todoService.deleteTodoItemById(todoItem.id)
      .subscribe();
    }

    countLeftItems() {
      this.itemCount = 0;
      this.todoService.countLeftItems()
      .subscribe(
        () => {
          for(let i = 0; i < this.todoItems.length; i++) {
            if (this.todoItems[i].completed == false){
              this.itemCount ++;
            }
          }
        })
    }

    clearCompleted() {
      let todoItems = this.todoItems.filter(item => item.completed == true);
      Promise.all(todoItems.map(item => this.removeTodo(item)));
    }

    // filterTodoItems(filter: string) {
    //   console.log('filter success: ' + filter);
      
    //   this.todoService.filterTodoItems(filter)
    //   .subscribe()
    // }
}
