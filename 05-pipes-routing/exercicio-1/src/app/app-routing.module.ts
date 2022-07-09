import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssociatesComponent } from './features/associates/pages/associates/associates.component';
import { HomeComponent } from './features/home/pages/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'associates', component: AssociatesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
