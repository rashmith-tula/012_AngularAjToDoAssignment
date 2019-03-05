import { Component, OnInit, OnDestroy } from '@angular/core';
import { TodoService } from '../shared/todo.service';
import { Todo } from '../shared/todo.model';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit, OnDestroy {
  addObservable : Subscription;
  todoList = [];

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.addObservable = this.todoService.onUpdate.subscribe((resp) => {this.todoList = this.todoService.getTodo();});
    this.todoList = this.todoService.getTodo();
  }

  ngOnDestroy() {
    this.addObservable.unsubscribe();
  }

  onRemove(i: number) {
     this.todoService.removeTodo(i);
  }

}
