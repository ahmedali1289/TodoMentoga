import { createReducer, on } from '@ngrx/store';
import * as TodoActions from './todo.actions';
import { todo } from './todo.model';

export interface TodoState {
  todos: todo[];
}

const initialState: TodoState = {
  todos: [],
};

export const todoReducer = createReducer(
  initialState,
  on(TodoActions.addTodo, (state, { todo }) => {
    return { todos: [...state.todos, todo] };
  }),
  on(TodoActions.removeTodo, (state, { id }) => {
    const updatedTodos = state.todos.filter((todo) => todo.id !== id);
    return { todos: updatedTodos };
  }),
  on(TodoActions.updateTodoStatus, (state, { id, status }) => {
    const updatedTodos = state.todos.map((todoItem) => {
      if (todoItem.id === id) {
        return { ...todoItem, status };
      } else {
        return todoItem;
      }
    });
    return { todos: updatedTodos };
  })
);
