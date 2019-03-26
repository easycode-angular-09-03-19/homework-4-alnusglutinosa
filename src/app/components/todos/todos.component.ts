import { Component } from '@angular/core';
import { Task } from "../../interfaces/task";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {

  todos: Task[] = [
    {
      id: 1,
      text: "Lorem ipsum dolor sit amet",
      complete: true
    },
    {
      id: 2,
      text: "Duis aute irure dolor in reprehenderit in voluptate velit esse",
      complete: false
    },
    {
      id: 3,
      text: "Excepteur sint occaecat cupidatat non proident",
      complete: false
    }
  ];

  constructor() { }

  onOutputEvent(todoItem: Task): void {
    todoItem.complete = !todoItem.complete;
  }

  onDeleteItem(deleteInfo: Task): void {
    for (let i = 0; i < this.todos.length; i++) {
      if (this.todos[i].id === deleteInfo.id) {
          this.todos.splice(i, 1);
          break;
      }
    }
  }

  onAddItem(deleteInfo) {
    this.todos.push({
      id: this.getNewId(),
      text: deleteInfo.addItem.form.value.textTask,
      complete: false
    });
  }

  getNewId(): number {
    if (!this.todos.length) {
        return 1;
    }

    let todosSort = this.todos.slice();
    let compareId = (taskA, taskB) => {
      return taskB.id - taskA.id;
    }

    todosSort.sort(compareId);
    return todosSort[0].id + 1;
  }

  getOpenTask(): Task[] {
    return this.todos.filter((task) => {
      return !task.complete;
    });
  }

  endAllTask(): void {
    this.todos.forEach((item) => {
      item.complete = true;
    });
  }

}
