import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TodosComponent } from './components/todos/todos.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { FormTaskComponent } from './components/form-task/form-task.component';
import { PopupConfirmComponent } from './components/popup-confirm/popup-confirm.component';

import { NgbdModalConfirm } from './components/popup-confirm/popup-confirm.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoItemComponent,
    FormTaskComponent,
    PopupConfirmComponent,
    NgbdModalConfirm
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  entryComponents: [
    NgbdModalConfirm
  ],
  exports: [ NgbdModalConfirm ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
