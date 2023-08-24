import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrandonComponent } from './alumnos/brandon/brandon.component';
import { HomeComponent } from './home/home.component';
import { ArturoComponent } from './alumnos/arturo/arturo.component';

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
