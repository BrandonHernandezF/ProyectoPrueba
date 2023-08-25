import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandonComponent } from './layout/brandon.component';
import { BitacorasComponent } from './bitacoras/bitacoras.component';

const routes: Routes = [
  {
    path: '',
    component: BrandonComponent,
    children: [
      {   path: 'bitacoras', component: BitacorasComponent   }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApartadobrandonRoutingModule { }
