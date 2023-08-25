import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrandonComponent } from './Alumnos/apartadobrandon/layout/brandon.component';
import { HomeComponent } from './home/home.component';
import { ArturoComponent } from './Alumnos/Arturo/arturo.component';

@NgModule({
  declarations: [
    AppComponent,
    BrandonComponent,
    HomeComponent,
    ArturoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
