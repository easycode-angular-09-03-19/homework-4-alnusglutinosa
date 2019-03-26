import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from "../../interfaces/task";

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent  {
  @Input() todoItem: Task;
  @Output() outputInfo: EventEmitter<Task> = new EventEmitter<Task>();
  @Output() deleteInfo: EventEmitter<Task> = new EventEmitter<Task>();
  @Output() popuptInfo: EventEmitter<Task> = new EventEmitter<Task>();

  constructor() { }

  switchTask(): void {
    this.outputInfo.emit(this.todoItem);
   }

  deleteTask(): void {
    this.deleteInfo.emit(this.todoItem);
  }

  onPopupOpen(deleteInfo: boolean): void {
    if (deleteInfo === true) {
      this.deleteInfo.emit(this.todoItem);
    }
  }

}
