import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandonComponent } from './alumnos/brandon/brandon.component';
import { HomeComponent } from './home/home.component';
import { ArturoComponent } from './alumnos/arturo/arturo.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'brandon', component: BrandonComponent },
  {path: 'arturo', component: ArturoComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
