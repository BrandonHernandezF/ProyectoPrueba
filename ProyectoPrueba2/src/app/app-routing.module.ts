import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandonComponent } from './Alumnos/brandon/brandon.component';

const routes: Routes = [
  {
    path: 'brandon',
    component: BrandonComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
