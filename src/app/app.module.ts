import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserPelletComponent } from './user-pellet/user-pellet.component';

@NgModule({
  declarations: [
    AppComponent,
    UserPelletComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
