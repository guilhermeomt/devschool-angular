import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from './components/task-list/task-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TasksComponent } from './pages/tasks/tasks.component';

@NgModule({
  declarations: [TaskListComponent, TasksComponent],
  imports: [CommonModule, SharedModule],
})
export class TasksModule {}
