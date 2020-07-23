import { Injectable } from '@angular/core';
import { ToDo } from './to-do.model';
import { UUID } from "angular2-uuid";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError} from "rxjs/operators";

import 'rxjs/add/operator/toPromise';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {
  //todoItems: ToDo[] = [];

  // web API address: a fake one, only for testing
  private todoUrl = 'api/todoItems';
  private headers = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(
    private http: HttpClient,
  ) { }

  // POST /todoItems
  addToDo(content: string): Promise<ToDo> {
    let todoItem = {
      id: UUID.UUID(),
      content: content,
      completed: false
    };

    //this.todoItems.push(todoItem);
    return this.http
    .post<ToDo>(this.todoUrl, JSON.stringify(todoItem), {headers: this.headers})
    .toPromise()
    .then(res => JSON.parse(JSON.stringify(res)).data as ToDo)
    .catch(this.handleError);
  }

  // GET /todoItems
  getTodoItems(): Promise <ToDo> {
    return this.http.get(this.todoUrl)
    .toPromise()
    .then(res => JSON.parse(JSON.stringify(res)).data as ToDo)
    .catch(this.handleError);
  }

  // PUT /todoItems/:id
  toggleTodoItem(todoItem:ToDo) : Promise<ToDo>{
    let url = `${this.todoUrl}/${todoItem}`;
    console.log(url);
    let updatedTodo = Object.assign({}, todoItem, {completed: !todoItem.completed});

    return this.http
    .put(url, JSON.stringify(todoItem), {headers: this.headers})
    .toPromise()
    .then(() => updatedTodo)
    .catch(this.handleError);
  }

  // DELETE /todoItems/:id
  deleteTodoItemById(id: string): Promise<void>{
    let url = `${this.todoUrl}/${id}`;

    return this.http
    .delete(url, {headers: this.headers})
    .toPromise()
    .then(() => null)
    .catch(this.handleError);
  }

  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
