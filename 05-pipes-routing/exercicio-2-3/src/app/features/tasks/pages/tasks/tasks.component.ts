import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  addTask() {
    alert('Não implementado!');
  }
}
