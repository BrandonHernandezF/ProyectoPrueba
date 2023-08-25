import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandonComponent } from './apartadobrandon/layout/brandon.component';

const routes: Routes = [
  {
    path: 'brandon',
    loadChildren: () => import('./apartadobrandon/apartadobrandon-routing.module').then(m => m.ApartadobrandonRoutingModule)
  },
  {
    path: '**',
    redirectTo: 'brandon'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlumnosRoutingModule { }
