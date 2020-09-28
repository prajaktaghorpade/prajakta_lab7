import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { TodoHeaderComponent } from './todo/todo-header/todo-header.component';
import { TodoFooterComponent } from './todo/todo-footer/todo-footer.component';
import { TodoListsComponent } from './todo/todo-lists/todo-lists.component';
import { TodoInputComponent } from './todo/todo-input/todo-input.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoHeaderComponent,
    TodoFooterComponent,
    TodoListsComponent,
    TodoInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }