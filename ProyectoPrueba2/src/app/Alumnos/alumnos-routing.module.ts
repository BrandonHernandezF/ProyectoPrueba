import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'brandon',
    loadChildren: () => import('./apartadobrandon/apartadobrandon.module').then(m => m.ApartadobrandonModule),
    pathMatch: 'full'
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
