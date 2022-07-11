import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { StudentsTableComponent } from './components/students-table/students-table.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, StudentsTableComponent],
  imports: [CommonModule, RouterModule],
  exports: [HeaderComponent, FooterComponent, StudentsTableComponent],
})
export class SharedModule {}
