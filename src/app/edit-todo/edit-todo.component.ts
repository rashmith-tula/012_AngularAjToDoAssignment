import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Todo } from '../shared/todo.model';
import { TodoService } from '../shared/todo.service';

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.css']
})
export class EditTodoComponent implements OnInit {
  priorities = ['High', 'Medium', 'Low'];
  addTodo: FormGroup;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.addTodo = new FormGroup({
      'title' : new FormControl(null),
      'priorities' : new FormControl('High')
    });
  }

  onSubmit() {
    const newTodo = new Todo(this.addTodo.value['title'], this.addTodo.value['priorities']);
    this.todoService.addTodo(newTodo);
    this.addTodo.controls['title'].reset();
  }

}
