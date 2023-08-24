import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrandonComponent } from './Alumnos/apartadobrandon/brandon/brandon.component';
import { ApartadobrandonModule } from './Alumnos/apartadobrandon/apartadobrandon.module';

@NgModule({
  declarations: [
    AppComponent,
    BrandonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
