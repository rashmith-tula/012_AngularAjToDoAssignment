import { Injectable } from '@angular/core';
import { Todo } from './todo.model';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class TodoService {

  todoList: Todo[] = [
    new Todo('Go to the Bank', 'High'),
    new Todo('Go to the Gym', 'Medium'),
    new Todo('Do homework', 'Low'),
    new Todo('Go to shopping', 'High'),
    new Todo('Visit a friend', 'Low')];

  constructor() { }

  getTodo() {
    return this.todoList.slice();
  }

  // Insert new task to the list
  addTodo(todo: Todo) {
    this.todoList.push(todo);
  }

}
