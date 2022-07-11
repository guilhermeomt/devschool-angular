import { Component, OnInit } from '@angular/core';
import { Student } from './models/student.model';

@Component({
  selector: 'app-students-table',
  templateUrl: './students-table.component.html',
  styleUrls: ['./students-table.component.scss'],
})
export class StudentsTableComponent implements OnInit {
  students: Student[] = [
    {
      id: 1,
      name: 'João',
      fee: 400,
      lastPaymentAt: '2020-01-01',
      createdAt: '2018-03-01',
    },
    {
      id: 2,
      name: 'Guilherme',
      fee: 350,
      lastPaymentAt: '2020-04-10',
      createdAt: '2019-03-01',
    },
    {
      id: 3,
      name: 'Alex',
      fee: 500,
      lastPaymentAt: '2020-01-01',
      createdAt: '2015-05-05',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
