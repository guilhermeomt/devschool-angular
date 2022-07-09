import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { EmployeesListComponent } from './components/employees-list/employees-list.component';
import { AssociatesComponent } from './pages/associates/associates.component';

@NgModule({
  declarations: [EmployeesListComponent, AssociatesComponent],
  imports: [CommonModule, SharedModule],
  exports: [EmployeesListComponent, AssociatesComponent],
})
export class AssociatesModule {}
