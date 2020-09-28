import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-todo-lists',
  templateUrl: './todo-lists.component.html',
  styleUrls: ['./todo-lists.component.css']
})
export class TodoListsComponent implements OnInit {

  @Input() tasks: string[];
  constructor() { }

  ngOnInit(): void {
  }
}
