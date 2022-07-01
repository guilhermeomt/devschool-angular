import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesListComponent } from './components/employees-list/employees-list.component';

@NgModule({
  declarations: [EmployeesListComponent],
  imports: [CommonModule],
  exports: [EmployeesListComponent],
})
export class AssociatesModule {}
