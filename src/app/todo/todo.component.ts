import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'] 
  /*
  template: '<h2>Hello from todo component</h2>' */
})
export class TodoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
