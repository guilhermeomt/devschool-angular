import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AssociatesModule } from './features/associates/associates.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, SharedModule, AssociatesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
