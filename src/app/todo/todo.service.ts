import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as TodoActions from '../NgRx/todo.actions';
import { todo } from '../NgRx/todo.model';
@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private store: Store) { }

  addTodo(title: string, description: string) {
    const todoItem: todo = {
      id: Date.now().toString(),
      title,
      description,
      status: 'pending'
    };
    this.store.dispatch(TodoActions.addTodo({ todo: todoItem }));
  }

  removeTodo(id: string) {
    this.store.dispatch(TodoActions.removeTodo({ id }));
  }
  updateTodo(id: string) {
    this.store.dispatch(TodoActions.updateTodoStatus({ id, status: 'completed' }));
  }
}
