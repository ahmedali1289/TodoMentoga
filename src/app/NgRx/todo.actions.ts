import { createAction, props } from '@ngrx/store';
import { todo } from './todo.model';

export const addTodo = createAction(
  '[Todo] Add Todo',
  props<{ todo: todo }>()
);

export const removeTodo = createAction(
  '[Todo] Remove Todo',
  props<{ id: string }>()
);

export const updateTodoStatus = createAction(
  '[Todo] Update Todo Status',
  props<{ id: string, status: string }>()
);
