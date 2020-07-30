import { Component, OnInit } from '@angular/core';
import { ToDo } from "./to-do.model";
import { TodoService } from './todo.service';


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

  ) { }

  ngOnInit() {
    console.log('getTodoItems: success');
    this.getTodoItems();
    this.countLeftItems();
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
      let i = this.todoItems.indexOf(todoItem);

      this.todoService.toggleTodoItem(todoItem)
      .subscribe(
        // t => {
        //   this.todoItems = [
        //   ...this.todoItems.slice(0,i),
        //   ...this.todoItems.slice(i+1),
        //   t
        //   ];
        // });

        //() => this.moveToBottom(this.todoItems, i)
      )
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
        }
      )
    }

    // moveToBottom(todoItems: Array<ToDo>, i) {
    //   let deleted = todoItems.splice(i, 1);
    //   todoItems = todoItems.concat(deleted);
    //   console.log('moveToBottom: ' + JSON.stringify(todoItems));
      
    //   return todoItems;
    // }
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
