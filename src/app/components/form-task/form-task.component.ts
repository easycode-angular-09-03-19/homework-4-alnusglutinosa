import { Component, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-task',
  templateUrl: './form-task.component.html',
  styleUrls: ['./form-task.component.css']
})
export class FormTaskComponent {

  @Output() addInfo: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  submitForm(form: NgForm): void {
    this.addInfo.emit({ addItem: form });
    form.resetForm();
  }

}
