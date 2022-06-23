import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss'],
})
export class EmployeesListComponent implements OnInit {
  employee = {
    id: 7,
    name: 'Nathan Carlos Exercicio',
    salary: 4500,
    job: 'Dev Pl',
  };

  constructor() {}

  ngOnInit(): void {}
}
