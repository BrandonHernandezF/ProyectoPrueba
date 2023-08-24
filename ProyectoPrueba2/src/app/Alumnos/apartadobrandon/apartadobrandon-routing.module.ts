import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandonComponent } from './brandon/brandon.component';

const routes: Routes = [
  {
    path: '',
    component : BrandonComponent,
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApartadobrandonRoutingModule { }
