import { Component, OnInit } from '@angular/core';
import { Employee } from './models/employee.model';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss'],
})
export class EmployeesListComponent implements OnInit {
  employees: Employee[] = [
    {
      id: 1,
      name: 'Guilherme Tavares',
      salary: 3000,
      job: 'Dev Jr',
    },
    {
      id: 2,
      name: 'Fulano de Tal',
      salary: 1400,
      job: 'Estagiário',
    },
    {
      id: 4,
      name: 'Beltrano de Tal',
      salary: 10500,
      job: 'Dev Sr',
    },
    {
      id: 7,
      name: 'Nathan Carlos Exercicio',
      salary: 4500,
      job: 'Dev Pl',
    },
  ];

  showEmployee = true;

  constructor() {}

  ngOnInit(): void {}

  showEmployeeDetails() {
    this.showEmployee = !this.showEmployee;
  }
}
