import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { ToDo } from './to-do.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  // web API address: a fake one, only for testing
  private todoUrl = 'api/todoItems';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient
  ) { }

  // GET /todoItems
  getTodoItems(): Observable <ToDo[]> {
    return this.http.get<ToDo[]>(this.todoUrl)
    .pipe(
      catchError(this.handleError<ToDo[]>('getTodoItems', []))
    );
  }

  // POST /todoItems
  addToDo(todoItem: ToDo): Observable<ToDo> {

    return this.http
    .post<ToDo>(this.todoUrl, todoItem, this.httpOptions)
    .pipe(
      catchError(this.handleError<ToDo>('addToDo'))
    );
  }

  // PUT /todoItems/:id 
  toggleTodoItem(todoItem: ToDo): Observable<ToDo>{
    let url = `${this.todoUrl}/${todoItem.id}`;
    console.log('toggleTodoItem service success: '+ url);
    let updatedTodoItem = Object.assign(todoItem, {completed: !todoItem.completed});
    
    return this.http
    .put(url, updatedTodoItem, this.httpOptions)
    .pipe(
      catchError(this.handleError<any>('toggleTodoItem'))
    );
 
  }

  // DELETE /todoItems/:id
  deleteTodoItemById(id: number): Observable<ToDo>{
    
    let url = `${this.todoUrl}/${id}`;

    return this.http
    .delete<ToDo>(url, this.httpOptions)
    .pipe(
      catchError(this.handleError<ToDo>('deleteTodoItemById'))
    );

  }

  countLeftItems(): Observable<ToDo[]> {
    return this.http.get<ToDo[]>(this.todoUrl)
    .pipe(
      catchError(this.handleError<ToDo[]>('countLeftItems', []))
    );
  }

    /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
