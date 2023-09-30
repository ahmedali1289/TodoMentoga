import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoListComponent } from './todo/todo-list/todo-list.component';
import { TodoFormComponent } from './todo/todo-form/todo-form.component';

const routes: Routes = [
  { path: 'todos', component: TodoListComponent, data: { title: 'TODOS' } },
  { path: 'add-todos', component: TodoFormComponent, data: { title: 'ADD TODOS' } },
  { path: '**', redirectTo: 'todos' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
