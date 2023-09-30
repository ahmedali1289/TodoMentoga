import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { TodoState } from 'src/app/NgRx/todo.reducer';
import { LoaderService } from '../../loader.service';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  todos: any;
  constructor(private todoService: TodoService, private store: Store<{ todo: TodoState }>) {
    this.store.select((state) => state).subscribe((state) => {
      this.todos = state.todo.todos;
    });
    console.log(this.todos);

  }

  removeTodo(id: string) {
    this.todoService.removeTodo(id);
  }
  updateTodo(id: string) {
    LoaderService.loader.next(true)
    setTimeout(() => {
      this.todoService.updateTodo(id)
      LoaderService.loader.next(false)
    }, 3000);
  }

}
