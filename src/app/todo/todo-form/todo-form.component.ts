import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent {
  todoForm!: FormGroup;

  constructor(private router: Router, private todoService: TodoService, private fb: FormBuilder) {
    this.todoForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  addTodo() {
    const { title, description } = this.todoForm.value;
    this.todoService.addTodo(title, description);
    this.router.navigateByUrl('/todos')
    this.todoForm.reset();
  }
}
